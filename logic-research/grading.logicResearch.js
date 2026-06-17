export function gradeAssessment(questions, studentAnswers) {
  let earned = 0;
  let possible = 0;
  const skillScores = {};
  const bookScores = {};
  const unitScores = {};

  const results = questions.map((question) => {
    possible += question.points;

    let correct = false;
    const studentAnswer = studentAnswers[question.id];

    if (question.type === "multiple-choice") {
      correct = Number(studentAnswer) === question.correctAnswer;
    }

    if (correct) earned += question.points;

    addScore(skillScores, question.skill, correct);
    addScore(bookScores, question.bookId, correct);
    addScore(unitScores, question.unit, correct);

    return {
      questionId: question.id,
      level: question.level,
      unit: question.unit,
      lessonId: question.lessonId,
      bookId: question.bookId,
      skill: question.skill,
      correct,
      studentAnswer,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation,
      pointsEarned: correct ? question.points : 0,
      pointsPossible: question.points
    };
  });

  const percentage = possible ? Math.round((earned / possible) * 100) : 0;

  return {
    earned,
    possible,
    percentage,
    grade: getLetterGrade(percentage),
    passed: percentage >= 70,
    results,
    skillScores: finalizeScores(skillScores),
    bookScores: finalizeScores(bookScores),
    unitScores: finalizeScores(unitScores),
    recommendations: makeRecommendations(finalizeScores(skillScores))
  };
}

function addScore(bucket, key, correct) {
  if (!bucket[key]) {
    bucket[key] = { correct: 0, total: 0 };
  }
  bucket[key].total += 1;
  if (correct) bucket[key].correct += 1;
}

function finalizeScores(bucket) {
  return Object.fromEntries(
    Object.entries(bucket).map(([key, value]) => [
      key,
      {
        ...value,
        percentage: Math.round((value.correct / value.total) * 100)
      }
    ])
  );
}

function getLetterGrade(percentage) {
  if (percentage >= 90) return "A";
  if (percentage >= 80) return "B";
  if (percentage >= 70) return "C";
  if (percentage >= 60) return "D";
  return "F";
}

function makeRecommendations(skillScores) {
  const weak = Object.entries(skillScores)
    .filter(([, score]) => score.percentage < 70)
    .map(([skill]) => skill);

  if (!weak.length) {
    return ["Continue to the next lesson or level."];
  }

  return weak.map((skill) => `Review skill: ${skill.replaceAll("-", " ")}`);
}

export function buildTeacherFeedback(gradeReport) {
  const strong = Object.entries(gradeReport.skillScores)
    .filter(([, score]) => score.percentage >= 80)
    .map(([skill]) => skill.replaceAll("-", " "));

  const weak = Object.entries(gradeReport.skillScores)
    .filter(([, score]) => score.percentage < 70)
    .map(([skill]) => skill.replaceAll("-", " "));

  return {
    summary: `Score: ${gradeReport.earned}/${gradeReport.possible} (${gradeReport.percentage}%). Grade: ${gradeReport.grade}.`,
    status: gradeReport.passed ? "Passed" : "Needs retake or review",
    strengths: strong.length ? strong : ["No mastery strengths yet. Keep practicing."],
    needsWork: weak.length ? weak : ["No major weak areas detected."],
    nextSteps: gradeReport.recommendations
  };
}

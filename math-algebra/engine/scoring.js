export function normalizeAnswer(value) {
  return String(value ?? "").trim().toLowerCase().replace(/\s+/g, " ");
}

export function isCorrect(userAnswer, correctAnswer) {
  if (Array.isArray(correctAnswer)) {
    return correctAnswer.map(normalizeAnswer).includes(normalizeAnswer(userAnswer));
  }
  return normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer);
}

export function scoreAssessment(questions, userAnswers) {
  let earned = 0;
  let possible = 0;
  const results = [];
  const missedSkills = {};
  const masteredSkills = {};

  questions.forEach((question) => {
    const points = question.points || 1;
    possible += points;
    const submitted = userAnswers[question.id];
    const correct = isCorrect(submitted, question.answer);

    if (correct) {
      earned += points;
      masteredSkills[question.skill] = (masteredSkills[question.skill] || 0) + 1;
    } else {
      missedSkills[question.skill] = (missedSkills[question.skill] || 0) + 1;
    }

    results.push({
      questionId: question.id,
      question: question.question,
      submitted,
      correctAnswer: question.answer,
      correct,
      skill: question.skill,
      explanation: question.explanation,
      wrongExplanation: !correct && question.wrongExplanations ? question.wrongExplanations[submitted] : null,
      pointsEarned: correct ? points : 0,
      pointsPossible: points
    });
  });

  const percent = possible === 0 ? 0 : Math.round((earned / possible) * 100);

  return {
    earned,
    possible,
    percent,
    letter: getLetter(percent),
    mastery: getMasteryLabel(percent),
    placement: getPlacementFromScore(earned, possible),
    missedSkills,
    masteredSkills,
    results
  };
}

export function getLetter(percent) {
  if (percent >= 90) return "A";
  if (percent >= 80) return "B";
  if (percent >= 70) return "C";
  if (percent >= 60) return "D";
  return "F";
}

export function getMasteryLabel(percent) {
  if (percent >= 90) return "Mastered";
  if (percent >= 80) return "Proficient";
  if (percent >= 70) return "Developing";
  if (percent >= 60) return "Needs Practice";
  return "Restart Lesson";
}

export function getPlacementFromRawScore(score) {
  if (score <= 17) return "basic";
  if (score <= 27) return "intermediate";
  if (score <= 35) return "advanced";
  return "advanced-honors";
}

export function getPlacementFromScore(earned, possible) {
  if (possible === 40) return getPlacementFromRawScore(earned);
  const percent = possible === 0 ? 0 : Math.round((earned / possible) * 100);
  if (percent < 60) return "restart-current-lesson";
  if (percent < 80) return "review-current-skill";
  return "continue-next-lesson";
}

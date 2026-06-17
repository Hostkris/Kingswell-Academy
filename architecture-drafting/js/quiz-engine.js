// Kingswell Academy — Architecture + Drafting Quiz Engine

window.KWAQuiz = (() => {
  function shuffle(items, seed = Date.now()) {
    const arr = [...items];
    let value = seed % 2147483647;
    if (value <= 0) value += 2147483646;
    const rand = () => {
      value = (value * 16807) % 2147483647;
      return (value - 1) / 2147483646;
    };
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function getQuestionsByClass(curriculum, classId) {
    return curriculum.questionBank.filter(q => q.classId === classId);
  }

  function getQuestionsByLevel(curriculum, level) {
    return curriculum.questionBank.filter(q => q.level === level);
  }

  function buildClassQuiz(curriculum, classId) {
    const questions = getQuestionsByClass(curriculum, classId);
    return questions.slice(0, 5);
  }

  function buildLevelTest(curriculum, level) {
    const count = curriculum.testQuestionCount || 40;
    const questions = getQuestionsByLevel(curriculum, level);

    // Keep every class represented before filling remaining slots.
    const classIds = curriculum.levels[level].classes.map(c => c.id);
    const required = [];
    classIds.forEach(classId => {
      const first = questions.find(q => q.classId === classId);
      if (first) required.push(first);
    });

    const remaining = questions.filter(q => !required.some(r => r.id === q.id));
    const selected = [...required, ...remaining].slice(0, count);
    return selected;
  }

  function grade(questions, answers, passingScore = 70) {
    let earned = 0;
    let possible = 0;

    const results = questions.map(question => {
      const studentAnswer = answers[question.id] || "";
      const correct = String(studentAnswer).trim() === String(question.answer).trim();
      possible += question.points;
      if (correct) earned += question.points;

      return {
        id: question.id,
        classId: question.classId,
        question: question.question,
        studentAnswer,
        correctAnswer: question.answer,
        correct,
        pointsEarned: correct ? question.points : 0,
        pointsPossible: question.points,
        explanation: question.explanation,
        remediation: question.remediation,
        book: question.book,
        sourceTopic: question.sourceTopic,
        skill: question.skill
      };
    });

    const percent = possible ? Math.round((earned / possible) * 100) : 0;

    return {
      earned,
      possible,
      percent,
      passed: percent >= passingScore,
      label: scoreLabel(percent),
      results
    };
  }

  function scoreLabel(percent) {
    if (percent >= 90) return "Mastered";
    if (percent >= 80) return "Strong";
    if (percent >= 70) return "Passed";
    if (percent >= 60) return "Needs Review";
    return "Repeat Lesson";
  }

  function rubricTotal(rubric) {
    return Object.values(rubric || {}).reduce((sum, value) => sum + Number(value || 0), 0);
  }

  return {
    buildClassQuiz,
    buildLevelTest,
    grade,
    scoreLabel,
    rubricTotal,
    getQuestionsByClass,
    getQuestionsByLevel,
    shuffle
  };
})();

// Kingswell Academy — Architecture + Drafting Progress Tracker
// Stores progress in browser localStorage. For real student accounts, connect this to Firebase/Supabase/backend later.

window.KWAProgress = (() => {
  const STORAGE_KEY = "kwaArchitectureDraftingProgress.v1";

  const emptyState = () => ({
    activeLevel: "basic",
    activeClassId: "ad-basic-01",
    lessonsCompleted: {},
    quizAttempts: {},
    homeworkScores: {},
    levelTests: {},
    certificates: {},
    updatedAt: null
  });

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? { ...emptyState(), ...JSON.parse(raw) } : emptyState();
    } catch (error) {
      console.warn("Progress data was damaged. Starting fresh.", error);
      return emptyState();
    }
  }

  function save(state) {
    const cleanState = { ...state, updatedAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanState));
    return cleanState;
  }

  function reset() {
    localStorage.removeItem(STORAGE_KEY);
    return emptyState();
  }

  function setActive(level, classId) {
    const state = load();
    state.activeLevel = level;
    if (classId) state.activeClassId = classId;
    return save(state);
  }

  function completeLesson(level, classId) {
    const state = load();
    state.lessonsCompleted[classId] = {
      level,
      classId,
      completedAt: new Date().toISOString()
    };
    return save(state);
  }

  function saveQuizAttempt(level, classId, result) {
    const state = load();
    if (!state.quizAttempts[classId]) state.quizAttempts[classId] = [];
    state.quizAttempts[classId].push({
      level,
      classId,
      ...result,
      attemptedAt: new Date().toISOString()
    });
    return save(state);
  }

  function saveLevelTest(level, result) {
    const state = load();
    if (!state.levelTests[level]) state.levelTests[level] = [];
    state.levelTests[level].push({
      level,
      ...result,
      attemptedAt: new Date().toISOString()
    });

    if (result.percent >= 70) {
      state.certificates[level] = {
        level,
        earnedAt: new Date().toISOString(),
        score: result.percent
      };
    }

    return save(state);
  }

  function saveHomeworkScore(level, classId, score, notes = "") {
    const state = load();
    state.homeworkScores[classId] = {
      level,
      classId,
      score: Number(score),
      notes,
      scoredAt: new Date().toISOString()
    };
    return save(state);
  }

  function bestQuizScore(classId) {
    const state = load();
    const attempts = state.quizAttempts[classId] || [];
    if (!attempts.length) return null;
    return Math.max(...attempts.map(a => a.percent || 0));
  }

  function levelSummary(level, curriculum) {
    const state = load();
    const levelData = curriculum.levels[level];
    const classIds = levelData.classes.map(c => c.id);

    const completedLessons = classIds.filter(id => state.lessonsCompleted[id]).length;
    const homeworkCompleted = classIds.filter(id => state.homeworkScores[id]).length;
    const quizzesPassed = classIds.filter(id => bestQuizScore(id) >= curriculum.passingScore).length;
    const latestLevelTest = (state.levelTests[level] || []).slice(-1)[0] || null;

    const totalItems = classIds.length * 3 + 1;
    const earnedItems = completedLessons + homeworkCompleted + quizzesPassed + (latestLevelTest && latestLevelTest.percent >= curriculum.passingScore ? 1 : 0);

    return {
      level,
      totalClasses: classIds.length,
      completedLessons,
      homeworkCompleted,
      quizzesPassed,
      latestLevelTest,
      certificate: state.certificates[level] || null,
      percentComplete: Math.round((earnedItems / totalItems) * 100)
    };
  }

  return {
    load,
    save,
    reset,
    setActive,
    completeLesson,
    saveQuizAttempt,
    saveLevelTest,
    saveHomeworkScore,
    bestQuizScore,
    levelSummary
  };
})();

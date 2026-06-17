const STORAGE_KEY = "kwa_math_algebra_progress_v1";

export function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultProgress();
  } catch (error) {
    console.warn("Progress could not be loaded. Resetting progress.", error);
    return defaultProgress();
  }
}

export function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  return progress;
}

export function defaultProgress() {
  return {
    studentName: "Student",
    currentLevel: null,
    completedLessons: [],
    quizScores: {},
    homeworkScores: {},
    finalScores: {},
    masteredSkills: {},
    missedSkills: {},
    activityLog: []
  };
}

export function setStudentName(name) {
  const progress = loadProgress();
  progress.studentName = name || "Student";
  progress.activityLog.push({ type: "set-name", date: new Date().toISOString(), value: progress.studentName });
  return saveProgress(progress);
}

export function saveAssessmentResult(assessmentId, scoreReport, type = "quiz") {
  const progress = loadProgress();
  const bucket = type === "homework" ? "homeworkScores" : type === "final" ? "finalScores" : "quizScores";

  progress[bucket][assessmentId] = {
    earned: scoreReport.earned,
    possible: scoreReport.possible,
    percent: scoreReport.percent,
    letter: scoreReport.letter,
    mastery: scoreReport.mastery,
    placement: scoreReport.placement,
    results: scoreReport.results,
    completedAt: new Date().toISOString()
  };

  mergeSkillCounts(progress.masteredSkills, scoreReport.masteredSkills);
  mergeSkillCounts(progress.missedSkills, scoreReport.missedSkills);

  progress.activityLog.push({
    type: `complete-${type}`,
    assessmentId,
    percent: scoreReport.percent,
    mastery: scoreReport.mastery,
    date: new Date().toISOString()
  });

  return saveProgress(progress);
}

export function savePlacement(scoreReport) {
  const progress = loadProgress();
  progress.currentLevel = scoreReport.placement;
  progress.quizScores["placement-math-algebra-40"] = {
    earned: scoreReport.earned,
    possible: scoreReport.possible,
    percent: scoreReport.percent,
    placement: scoreReport.placement,
    completedAt: new Date().toISOString()
  };
  progress.activityLog.push({ type: "placement", placement: scoreReport.placement, date: new Date().toISOString() });
  return saveProgress(progress);
}

export function markLessonComplete(lessonId) {
  const progress = loadProgress();
  if (!progress.completedLessons.includes(lessonId)) progress.completedLessons.push(lessonId);
  progress.activityLog.push({ type: "complete-lesson", lessonId, date: new Date().toISOString() });
  return saveProgress(progress);
}

export function resetProgress() {
  const fresh = defaultProgress();
  saveProgress(fresh);
  return fresh;
}

function mergeSkillCounts(target, source = {}) {
  Object.entries(source).forEach(([skill, count]) => {
    target[skill] = (target[skill] || 0) + count;
  });
}

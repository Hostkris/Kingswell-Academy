const STORAGE_KEY = "kingswell.logicResearch.progress.v1";

export function getCurrentStudent() {
  return localStorage.getItem("kingswell.logicResearch.currentStudent") || "guest";
}

export function setCurrentStudent(name) {
  const clean = (name || "guest").trim() || "guest";
  localStorage.setItem("kingswell.logicResearch.currentStudent", clean);
  return clean;
}

export function getProgress(studentName = getCurrentStudent()) {
  const all = loadAll();
  return all[studentName] || createEmptyProgress();
}

export function saveLessonComplete(levelId, unitId, lessonId, studentName = getCurrentStudent()) {
  const all = loadAll();
  const progress = all[studentName] || createEmptyProgress();

  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
  }

  progress.lastLevel = levelId;
  progress.lastUnit = unitId;
  progress.updatedAt = new Date().toISOString();

  all[studentName] = progress;
  saveAll(all);

  return progress;
}

export function saveAssessmentResult(kind, levelId, lessonId, report, studentName = getCurrentStudent()) {
  const all = loadAll();
  const progress = all[studentName] || createEmptyProgress();

  progress.assessments.push({
    kind,
    levelId,
    lessonId,
    report,
    completedAt: new Date().toISOString()
  });

  progress.updatedAt = new Date().toISOString();

  all[studentName] = progress;
  saveAll(all);

  return progress;
}

export function calculateLevelProgress(level) {
  const progress = getProgress();
  const lessons = level.units.flatMap((unit) => unit.lessons);
  const completed = lessons.filter((lesson) => progress.completedLessons.includes(lesson.id)).length;
  const percentage = lessons.length ? Math.round((completed / lessons.length) * 100) : 0;

  const finalScores = progress.assessments
    .filter((item) => item.kind === "final" && item.levelId === level.id)
    .map((item) => item.report.percentage);

  const latestFinalScore = finalScores.length ? finalScores[finalScores.length - 1] : null;

  return {
    completed,
    total: lessons.length,
    percentage,
    latestFinalScore
  };
}

function createEmptyProgress() {
  return {
    completedLessons: [],
    assessments: [],
    lastLevel: "basic",
    lastUnit: null,
    updatedAt: new Date().toISOString()
  };
}

function loadAll() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveAll(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function resetProgress(studentName = getCurrentStudent()) {
  const all = loadAll();
  delete all[studentName];
  saveAll(all);
}

import { psychologyCourses, psychologyHomework, getAllLessons, findLessonById, findHomeworkById } from "./curriculum-data.js";
import { psychologyQuestionBank } from "./question-bank.js";

export const STORAGE_KEY = "KWA_PSYCHOLOGY_PROGRESS_V1";

export function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function getCourseByLevel(level) {
  return psychologyCourses.find(course => course.level === level);
}

export function getCourseById(courseId) {
  return psychologyCourses.find(course => course.id === courseId);
}

export function getQuestionsByLevel(level) {
  return psychologyQuestionBank.filter(question => question.level === level);
}

export function getQuestionsByLesson(lessonId) {
  return psychologyQuestionBank.filter(question => question.lessonId === lessonId || question.remediationLessonId === lessonId);
}

export function generateLessonQuiz(lessonId, count = 5) {
  const lessonQuestions = getQuestionsByLesson(lessonId);
  return shuffleArray(lessonQuestions).slice(0, Math.min(count, lessonQuestions.length));
}

export function generateFinalTest(level, totalQuestions = 40) {
  const availableQuestions = getQuestionsByLevel(level);
  const selected = shuffleArray(availableQuestions).slice(0, Math.min(totalQuestions, availableQuestions.length));
  return selected.map((question, index) => ({ ...question, testNumber: index + 1 }));
}

export function gradeTest(testQuestions, studentAnswersByQuestionId) {
  let correctCount = 0;

  const results = testQuestions.map(question => {
    const studentAnswer = Number(studentAnswersByQuestionId[question.id]);
    const isAnswered = Number.isInteger(studentAnswer);
    const isCorrect = isAnswered && studentAnswer === question.correctAnswer;
    if (isCorrect) correctCount++;

    return {
      questionId: question.id,
      lessonId: question.lessonId,
      remediationLessonId: question.remediationLessonId,
      question: question.question,
      options: question.options,
      studentAnswer,
      correctAnswer: question.correctAnswer,
      isAnswered,
      isCorrect,
      explanation: question.explanation,
      tags: question.tags || []
    };
  });

  const totalQuestions = testQuestions.length;
  const score = totalQuestions ? Math.round((correctCount / totalQuestions) * 100) : 0;

  return {
    score,
    correctCount,
    totalQuestions,
    passed: score >= 80,
    results,
    recommendations: buildRecommendations(results)
  };
}

export function buildRecommendations(results) {
  const missed = results.filter(result => !result.isCorrect);
  const lessonCounts = missed.reduce((acc, item) => {
    const lessonId = item.remediationLessonId || item.lessonId;
    acc[lessonId] = (acc[lessonId] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(lessonCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([lessonId, missedCount]) => {
      const lesson = findLessonById(lessonId);
      return {
        lessonId,
        missedCount,
        title: lesson?.title || lessonId,
        courseTitle: lesson?.courseTitle || "Psychology",
        action: `Review ${lesson?.title || lessonId} and retake the lesson quiz.`
      };
    });
}

export function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createEmptyProgress();
    return { ...createEmptyProgress(), ...JSON.parse(raw) };
  } catch (error) {
    console.warn("Could not load psychology progress.", error);
    return createEmptyProgress();
  }
}

export function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  return progress;
}

export function createEmptyProgress() {
  return {
    completedLessons: {},
    quizScores: {},
    finalTestScores: {},
    homeworkDrafts: {},
    homeworkSubmissions: {},
    certificates: {},
    updatedAt: null
  };
}

export function markLessonComplete(lessonId) {
  const progress = loadProgress();
  progress.completedLessons[lessonId] = {
    completed: true,
    completedAt: new Date().toISOString()
  };
  progress.updatedAt = new Date().toISOString();
  return saveProgress(progress);
}

export function recordQuizScore(quizId, lessonId, gradedResult) {
  const progress = loadProgress();
  progress.quizScores[quizId] = {
    lessonId,
    score: gradedResult.score,
    correctCount: gradedResult.correctCount,
    totalQuestions: gradedResult.totalQuestions,
    passed: gradedResult.passed,
    takenAt: new Date().toISOString(),
    recommendations: gradedResult.recommendations
  };
  progress.updatedAt = new Date().toISOString();
  return saveProgress(progress);
}

export function recordFinalTestScore(level, gradedResult) {
  const course = getCourseByLevel(level);
  const passingScore = course?.passingScore ?? 80;
  const passed = gradedResult.score >= passingScore;
  const progress = loadProgress();

  progress.finalTestScores[level] = {
    courseId: course?.id,
    level,
    score: gradedResult.score,
    correctCount: gradedResult.correctCount,
    totalQuestions: gradedResult.totalQuestions,
    passed,
    passingScore,
    takenAt: new Date().toISOString(),
    recommendations: gradedResult.recommendations
  };

  if (passed && isCourseComplete(level, progress)) {
    progress.certificates[level] = {
      earned: true,
      courseTitle: course?.title || level,
      earnedAt: new Date().toISOString()
    };
  }

  progress.updatedAt = new Date().toISOString();
  return saveProgress(progress);
}

export function saveHomeworkDraft(homeworkId, answers) {
  const progress = loadProgress();
  progress.homeworkDrafts[homeworkId] = {
    answers,
    savedAt: new Date().toISOString()
  };
  progress.updatedAt = new Date().toISOString();
  return saveProgress(progress);
}

export function submitHomework(homeworkId, answers, selfScore = null) {
  const homework = findHomeworkById(homeworkId);
  const progress = loadProgress();
  progress.homeworkSubmissions[homeworkId] = {
    homeworkId,
    lessonId: homework?.lessonId,
    answers,
    maxPoints: homework?.maxPoints || 0,
    selfScore,
    status: "submitted",
    submittedAt: new Date().toISOString()
  };
  progress.updatedAt = new Date().toISOString();
  return saveProgress(progress);
}

export function isCourseComplete(level, progress = loadProgress()) {
  const course = getCourseByLevel(level);
  if (!course) return false;
  const lessonIds = course.modules.flatMap(module => module.lessons.map(lesson => lesson.id));
  const homeworkIds = course.modules.flatMap(module => module.lessons.map(lesson => lesson.homeworkId).filter(Boolean));
  const allLessonsComplete = lessonIds.every(id => progress.completedLessons[id]?.completed);
  const allHomeworkSubmitted = homeworkIds.every(id => progress.homeworkSubmissions[id]?.status === "submitted");
  return allLessonsComplete && allHomeworkSubmitted;
}

export function getProgressSummary(level = null) {
  const progress = loadProgress();
  const lessons = getAllLessons().filter(lesson => !level || lesson.level === level);
  const homework = psychologyHomework.filter(hw => {
    const lesson = findLessonById(hw.lessonId);
    return !level || lesson?.level === level;
  });

  const completedLessons = lessons.filter(lesson => progress.completedLessons[lesson.id]?.completed).length;
  const submittedHomework = homework.filter(hw => progress.homeworkSubmissions[hw.id]?.status === "submitted").length;

  const quizScores = Object.values(progress.quizScores).filter(score => {
    if (!level) return true;
    const lesson = findLessonById(score.lessonId);
    return lesson?.level === level;
  });

  const averageQuizScore = quizScores.length
    ? Math.round(quizScores.reduce((sum, item) => sum + item.score, 0) / quizScores.length)
    : 0;

  return {
    level,
    completedLessons,
    totalLessons: lessons.length,
    lessonPercent: lessons.length ? Math.round((completedLessons / lessons.length) * 100) : 0,
    submittedHomework,
    totalHomework: homework.length,
    homeworkPercent: homework.length ? Math.round((submittedHomework / homework.length) * 100) : 0,
    quizzesTaken: quizScores.length,
    averageQuizScore,
    finalTest: level ? progress.finalTestScores[level] || null : progress.finalTestScores,
    certificates: progress.certificates
  };
}

export function resetPsychologyProgress() {
  localStorage.removeItem(STORAGE_KEY);
  return createEmptyProgress();
}

export function getRubricScoreGuide(rubric, maxPoints) {
  const totalRubricPoints = rubric.reduce((sum, item) => sum + item.points, 0);
  return rubric.map(item => ({
    ...item,
    scaledPoints: totalRubricPoints ? Math.round((item.points / totalRubricPoints) * maxPoints) : item.points
  }));
}

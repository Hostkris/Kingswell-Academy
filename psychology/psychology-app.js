import { psychologyCourses, psychologySourceMap, psychologyHomework, psychologyRubrics, findHomeworkById, findLessonById } from "./curriculum-data.js";
import {
  generateLessonQuiz,
  generateFinalTest,
  gradeTest,
  markLessonComplete,
  recordQuizScore,
  recordFinalTestScore,
  saveHomeworkDraft,
  submitHomework,
  loadProgress,
  getProgressSummary,
  getRubricScoreGuide,
  resetPsychologyProgress
} from "./testing-engine.js";

const state = {
  level: "basic",
  activeCourseId: "psy-basic-101",
  activeQuiz: null,
  activeQuizMeta: null
};

const root = document.getElementById("psychology-app");

if (!root) {
  console.warn("Psychology app root not found. Add <section id=\"psychology-app\"></section> to your page.");
} else {
  renderApp();
}

function renderApp() {
  const course = psychologyCourses.find(item => item.id === state.activeCourseId) || psychologyCourses[0];
  const summary = getProgressSummary(state.level);

  root.innerHTML = `
    <div class="psy-shell">
      <header class="psy-hero">
        <div>
          <p class="psy-kicker">Kingswell Academy Psychology</p>
          <h1>Psychology Curriculum Platform</h1>
          <p>Basic, intermediate, and advanced psychology lessons with homework, tests, answer explanations, scoring, and saved progress.</p>
        </div>
        <div class="psy-hero-card">
          <strong>${summary.lessonPercent}%</strong>
          <span>lesson completion</span>
        </div>
      </header>

      <nav class="psy-tabs" aria-label="Psychology levels">
        ${["basic", "intermediate", "advanced"].map(level => `
          <button class="psy-tab ${state.level === level ? "is-active" : ""}" data-action="change-level" data-level="${level}">
            ${capitalize(level)}
          </button>
        `).join("")}
      </nav>

      <section class="psy-dashboard">
        <article class="psy-stat"><strong>${summary.completedLessons}/${summary.totalLessons}</strong><span>Lessons</span></article>
        <article class="psy-stat"><strong>${summary.submittedHomework}/${summary.totalHomework}</strong><span>Homework</span></article>
        <article class="psy-stat"><strong>${summary.averageQuizScore}%</strong><span>Quiz Avg.</span></article>
        <article class="psy-stat"><strong>${summary.finalTest?.score ?? "—"}</strong><span>Final Test</span></article>
      </section>

      <main class="psy-layout">
        <aside class="psy-sidebar">
          ${renderCourseSelector()}
          ${renderSourceMap()}
        </aside>
        <section class="psy-main" id="psy-main">
          ${renderCourse(course)}
        </section>
      </main>
    </div>
  `;

  bindEvents();
}

function renderCourseSelector() {
  const courses = psychologyCourses.filter(course => course.level === state.level);
  return `
    <div class="psy-panel">
      <h2>${capitalize(state.level)} Track</h2>
      <div class="psy-course-list">
        ${courses.map(course => `
          <button class="psy-course-button ${state.activeCourseId === course.id ? "is-active" : ""}" data-action="select-course" data-course-id="${course.id}">
            <span>${course.title}</span>
            <small>${course.estimatedWeeks} weeks • ${course.finalTestSize} question final</small>
          </button>
        `).join("")}
      </div>
      <button class="psy-danger-link" data-action="reset-progress">Reset psychology progress</button>
    </div>
  `;
}

function renderSourceMap() {
  const sources = psychologySourceMap.filter(source => source.level === state.level);
  return `
    <div class="psy-panel">
      <h2>Book Source Map</h2>
      <p class="psy-muted">Use these books as reference maps. Lessons and questions should stay original.</p>
      ${sources.map(source => `
        <div class="psy-source">
          <strong>${source.title}</strong>
          <p>${source.role}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function renderCourse(course) {
  const final = getProgressSummary(course.level).finalTest;
  return `
    <article class="psy-course-header">
      <p class="psy-kicker">${capitalize(course.level)} Course</p>
      <h2>${course.title}</h2>
      <p>${course.subtitle}</p>
      <div class="psy-alert">${course.disclaimer}</div>
      <h3>Learning Outcomes</h3>
      <ul class="psy-check-list">
        ${course.outcomes.map(outcome => `<li>${outcome}</li>`).join("")}
      </ul>
      <div class="psy-actions">
        <button class="psy-primary" data-action="start-final" data-level="${course.level}">Start ${course.finalTestSize}-Question Final Test</button>
        ${final ? `<span class="psy-final-score">Last final: ${final.score}% • ${final.passed ? "Passed" : "Needs Review"}</span>` : ""}
      </div>
    </article>

    <div class="psy-module-list">
      ${course.modules.map(module => renderModule(module)).join("")}
    </div>
  `;
}

function renderModule(module) {
  return `
    <section class="psy-module">
      <h3>${module.title}</h3>
      <div class="psy-lesson-grid">
        ${module.lessons.map(lesson => renderLessonCard(lesson)).join("")}
      </div>
    </section>
  `;
}

function renderLessonCard(lesson) {
  const progress = loadProgress();
  const completed = progress.completedLessons[lesson.id]?.completed;
  const homeworkDone = progress.homeworkSubmissions[lesson.homeworkId]?.status === "submitted";
  const score = progress.quizScores[lesson.quizId];
  return `
    <article class="psy-lesson-card">
      <div class="psy-card-topline">
        <span>${completed ? "Completed" : "Lesson"}</span>
        <span>${score ? `${score.score}%` : "No quiz yet"}</span>
      </div>
      <h4>${lesson.title}</h4>
      <p>${lesson.objectives.slice(0, 2).join(" • ")}</p>
      <div class="psy-mini-status">
        <span>${homeworkDone ? "Homework submitted" : "Homework open"}</span>
      </div>
      <button class="psy-secondary" data-action="open-lesson" data-lesson-id="${lesson.id}">Open Lesson</button>
    </article>
  `;
}

function renderLesson(lessonId) {
  const lesson = findLessonById(lessonId);
  if (!lesson) return;
  const homework = findHomeworkById(lesson.homeworkId);

  document.getElementById("psy-main").innerHTML = `
    <button class="psy-back" data-action="back-course">← Back to course</button>
    <article class="psy-reader">
      <p class="psy-kicker">${lesson.courseTitle} • ${lesson.moduleTitle}</p>
      <h2>${lesson.title}</h2>

      <section>
        <h3>Objectives</h3>
        <ul class="psy-check-list">${lesson.objectives.map(item => `<li>${item}</li>`).join("")}</ul>
      </section>

      <section>
        <h3>Vocabulary</h3>
        <div class="psy-vocab-grid">
          ${lesson.vocabulary.map(item => `
            <div class="psy-vocab-card">
              <strong>${item.term}</strong>
              <p>${item.definition}</p>
            </div>
          `).join("")}
        </div>
      </section>

      <section>
        <h3>Lesson</h3>
        ${lesson.lesson.map(paragraph => `<p>${paragraph}</p>`).join("")}
      </section>

      <section>
        <h3>Examples</h3>
        <ul>${lesson.examples.map(example => `<li>${example}</li>`).join("")}</ul>
      </section>

      <section>
        <h3>Practice Drill</h3>
        <ul>${lesson.practice.map(item => `<li>${item}</li>`).join("")}</ul>
      </section>

      <div class="psy-actions">
        <button class="psy-primary" data-action="mark-complete" data-lesson-id="${lesson.id}">Mark Lesson Complete</button>
        <button class="psy-secondary" data-action="start-lesson-quiz" data-lesson-id="${lesson.id}" data-quiz-id="${lesson.quizId}">Take Lesson Quiz</button>
        ${homework ? `<button class="psy-secondary" data-action="open-homework" data-homework-id="${homework.id}">Open Homework</button>` : ""}
      </div>
    </article>
  `;
  bindEvents();
}

function renderHomework(homeworkId) {
  const homework = findHomeworkById(homeworkId);
  if (!homework) return;
  const progress = loadProgress();
  const draftAnswers = progress.homeworkDrafts[homeworkId]?.answers || {};
  const submission = progress.homeworkSubmissions[homeworkId];
  const rubric = psychologyRubrics[homework.rubricId] || [];
  const guide = getRubricScoreGuide(rubric, homework.maxPoints);

  document.getElementById("psy-main").innerHTML = `
    <button class="psy-back" data-action="open-lesson" data-lesson-id="${homework.lessonId}">← Back to lesson</button>
    <article class="psy-reader">
      <p class="psy-kicker">Homework • ${homework.type.replaceAll("_", " ")}</p>
      <h2>${homework.title}</h2>
      <p>${homework.instructions}</p>
      ${submission ? `<div class="psy-success">Submitted on ${formatDate(submission.submittedAt)}.</div>` : ""}

      <form id="psy-homework-form" class="psy-homework-form">
        ${homework.prompts.map((prompt, index) => `
          <label>
            <span>${prompt}</span>
            <textarea name="prompt-${index}" rows="5">${escapeHtml(draftAnswers[`prompt-${index}`] || "")}</textarea>
          </label>
        `).join("")}
      </form>

      <section>
        <h3>Rubric</h3>
        <div class="psy-rubric">
          ${guide.map(item => `
            <div>
              <strong>${item.criterion} — ${item.scaledPoints} pts</strong>
              <p>${item.description}</p>
            </div>
          `).join("")}
        </div>
      </section>

      <div class="psy-actions">
        <button class="psy-secondary" data-action="save-homework" data-homework-id="${homework.id}">Save Draft</button>
        <button class="psy-primary" data-action="submit-homework" data-homework-id="${homework.id}">Submit Homework</button>
      </div>
    </article>
  `;
  bindEvents();
}

function renderQuiz(testQuestions, meta) {
  state.activeQuiz = testQuestions;
  state.activeQuizMeta = meta;

  document.getElementById("psy-main").innerHTML = `
    <button class="psy-back" data-action="${meta.type === "final" ? "back-course" : "open-lesson"}" ${meta.lessonId ? `data-lesson-id="${meta.lessonId}"` : ""}>← Back</button>
    <article class="psy-reader">
      <p class="psy-kicker">${meta.type === "final" ? "Final Test" : "Lesson Quiz"}</p>
      <h2>${meta.title}</h2>
      <p>Choose one answer for each question. After grading, explanations and review lessons will appear.</p>

      <form id="psy-quiz-form" class="psy-quiz-form">
        ${testQuestions.map((question, questionIndex) => `
          <fieldset class="psy-question-card">
            <legend>${questionIndex + 1}. ${question.question}</legend>
            ${question.options.map((option, optionIndex) => `
              <label class="psy-option">
                <input type="radio" name="${question.id}" value="${optionIndex}">
                <span>${option}</span>
              </label>
            `).join("")}
          </fieldset>
        `).join("")}
      </form>

      <div class="psy-actions">
        <button class="psy-primary" data-action="grade-quiz">Grade Now</button>
      </div>
      <div id="psy-results"></div>
    </article>
  `;
  bindEvents();
}

function renderResults(graded) {
  const meta = state.activeQuizMeta;
  const passingScore = meta.type === "final"
    ? psychologyCourses.find(course => course.level === meta.level)?.passingScore ?? 80
    : 80;
  const passed = graded.score >= passingScore;

  document.getElementById("psy-results").innerHTML = `
    <section class="psy-results ${passed ? "is-pass" : "is-review"}">
      <h3>${passed ? "Passed" : "Needs Review"}: ${graded.score}%</h3>
      <p>${graded.correctCount} correct out of ${graded.totalQuestions}. Passing score: ${passingScore}%.</p>
      ${graded.recommendations.length ? `
        <h4>Recommended Review</h4>
        <ul>
          ${graded.recommendations.slice(0, 6).map(item => `<li><button class="psy-link-button" data-action="open-lesson" data-lesson-id="${item.lessonId}">${item.title}</button> — missed ${item.missedCount}</li>`).join("")}
        </ul>
      ` : ""}
      <details open>
        <summary>Answer Explanations</summary>
        <div class="psy-explanations">
          ${graded.results.map((result, index) => `
            <div class="psy-explanation ${result.isCorrect ? "is-correct" : "is-wrong"}">
              <strong>${index + 1}. ${result.isCorrect ? "Correct" : "Incorrect"}</strong>
              <p>${result.question}</p>
              <p><b>Your answer:</b> ${formatAnswer(result)}</p>
              <p><b>Correct answer:</b> ${result.options[result.correctAnswer]}</p>
              <p>${result.explanation}</p>
            </div>
          `).join("")}
        </div>
      </details>
    </section>
  `;
  bindEvents();
}

function collectQuizAnswers() {
  const form = document.getElementById("psy-quiz-form");
  const answers = {};
  state.activeQuiz.forEach(question => {
    const selected = form.querySelector(`input[name="${question.id}"]:checked`);
    if (selected) answers[question.id] = Number(selected.value);
  });
  return answers;
}

function collectHomeworkAnswers() {
  const form = document.getElementById("psy-homework-form");
  const answers = {};
  [...form.querySelectorAll("textarea")].forEach(textarea => {
    answers[textarea.name] = textarea.value.trim();
  });
  return answers;
}

function bindEvents() {
  root.querySelectorAll("[data-action]").forEach(element => {
    element.onclick = event => {
      const action = event.currentTarget.dataset.action;
      const dataset = event.currentTarget.dataset;

      if (action === "change-level") {
        state.level = dataset.level;
        const firstCourse = psychologyCourses.find(course => course.level === state.level);
        state.activeCourseId = firstCourse?.id || state.activeCourseId;
        renderApp();
      }

      if (action === "select-course") {
        state.activeCourseId = dataset.courseId;
        renderApp();
      }

      if (action === "back-course") {
        renderApp();
      }

      if (action === "open-lesson") {
        renderLesson(dataset.lessonId);
      }

      if (action === "mark-complete") {
        markLessonComplete(dataset.lessonId);
        renderLesson(dataset.lessonId);
      }

      if (action === "open-homework") {
        renderHomework(dataset.homeworkId);
      }

      if (action === "save-homework") {
        saveHomeworkDraft(dataset.homeworkId, collectHomeworkAnswers());
        renderHomework(dataset.homeworkId);
      }

      if (action === "submit-homework") {
        submitHomework(dataset.homeworkId, collectHomeworkAnswers());
        renderHomework(dataset.homeworkId);
      }

      if (action === "start-lesson-quiz") {
        const quiz = generateLessonQuiz(dataset.lessonId, 5);
        renderQuiz(quiz, {
          type: "lesson",
          lessonId: dataset.lessonId,
          quizId: dataset.quizId,
          title: `${findLessonById(dataset.lessonId)?.title || "Lesson"} Quiz`
        });
      }

      if (action === "start-final") {
        const course = psychologyCourses.find(item => item.level === dataset.level);
        const test = generateFinalTest(dataset.level, course?.finalTestSize || 40);
        renderQuiz(test, {
          type: "final",
          level: dataset.level,
          title: `${capitalize(dataset.level)} Psychology Final Test`
        });
      }

      if (action === "grade-quiz") {
        const graded = gradeTest(state.activeQuiz, collectQuizAnswers());
        if (state.activeQuizMeta.type === "lesson") {
          recordQuizScore(state.activeQuizMeta.quizId, state.activeQuizMeta.lessonId, graded);
        } else {
          recordFinalTestScore(state.activeQuizMeta.level, graded);
        }
        renderResults(graded);
      }

      if (action === "reset-progress") {
        const ok = confirm("Reset all saved psychology progress on this browser?");
        if (ok) {
          resetPsychologyProgress();
          renderApp();
        }
      }
    };
  });
}

function formatAnswer(result) {
  if (!result.isAnswered) return "Not answered";
  return result.options[result.studentAnswer] ?? "Unknown";
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function formatDate(iso) {
  return new Date(iso).toLocaleString();
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

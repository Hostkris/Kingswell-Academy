import { mathAlgebraCurriculum } from "./data/curriculum.js";
import { placementTest, getQuestionsByQuizId } from "./data/questions.js";
import { homeworkSets } from "./data/homework.js";
import { scoreAssessment } from "./engine/scoring.js";
import { buildTeacherFeedback, getRecommendedLesson } from "./engine/feedback.js";
import { loadProgress, saveAssessmentResult, savePlacement, markLessonComplete, resetProgress } from "./engine/progress.js";

const app = document.querySelector("#app");
const progressPanel = document.querySelector("#progressPanel");

function render() {
  renderDashboard();
  renderProgressPanel();
}

function renderDashboard() {
  app.innerHTML = `
    <section class="hero-card">
      <p class="eyebrow">Kingswell Academy Curriculum System</p>
      <h1>Math + Algebra</h1>
      <p>This system separates Basic, Intermediate, and Advanced math. It includes lessons, homework, quizzes, answer explanations, scoring, and local progress tracking.</p>
      <div class="hero-actions">
        <button class="primary" id="startPlacementBtn">Start 40-Question Placement Test</button>
        <button class="secondary" id="resetProgressBtn">Reset Progress</button>
      </div>
    </section>

    <section class="level-grid">
      ${mathAlgebraCurriculum.levels.map(level => `
        <article class="level-card">
          <div class="level-topline">${level.placementRange} placement score</div>
          <h2>${level.title}</h2>
          <p>${level.description}</p>
          <button class="secondary level-open" data-level-id="${level.id}">Open ${level.title}</button>
        </article>
      `).join("")}
    </section>
  `;

  document.querySelector("#startPlacementBtn").addEventListener("click", () => renderAssessment(placementTest.id, placementTest.title, placementTest.questions, "placement"));
  document.querySelector("#resetProgressBtn").addEventListener("click", () => {
    resetProgress();
    render();
  });
  document.querySelectorAll(".level-open").forEach(button => {
    button.addEventListener("click", () => renderLevel(button.dataset.levelId));
  });
}

function renderLevel(levelId) {
  const level = mathAlgebraCurriculum.levels.find(item => item.id === levelId);
  if (!level) return renderDashboard();

  app.innerHTML = `
    <button class="link-button" id="backBtn">← Back to Dashboard</button>
    <section class="hero-card compact">
      <p class="eyebrow">${level.placementRange} placement score</p>
      <h1>${level.title}</h1>
      <p>${level.description}</p>
      <p><strong>Mastery target:</strong> ${level.masteryTarget}%</p>
    </section>

    <section class="unit-list">
      ${level.units.map(unit => `
        <article class="unit-card">
          <p class="eyebrow">${unit.sourceAlignment}</p>
          <h2>${unit.title}</h2>
          <div class="lesson-list">
            ${unit.lessons.map(lesson => renderLessonCard(lesson)).join("")}
          </div>
        </article>
      `).join("")}
    </section>
  `;

  document.querySelector("#backBtn").addEventListener("click", renderDashboard);
  document.querySelectorAll(".lesson-open").forEach(button => button.addEventListener("click", () => renderLesson(button.dataset.lessonId)));
  document.querySelectorAll(".quiz-open").forEach(button => button.addEventListener("click", () => {
    const quizId = button.dataset.quizId;
    renderAssessment(quizId, `Quiz: ${button.dataset.lessonTitle}`, getQuestionsByQuizId(quizId), "quiz");
  }));
  document.querySelectorAll(".homework-open").forEach(button => button.addEventListener("click", () => renderHomework(button.dataset.homeworkId)));
}

function renderLessonCard(lesson) {
  return `
    <div class="lesson-card">
      <h3>${lesson.title}</h3>
      <p>${lesson.objective}</p>
      <div class="button-row">
        <button class="secondary lesson-open" data-lesson-id="${lesson.id}">Lesson</button>
        <button class="secondary homework-open" data-homework-id="${lesson.homeworkId}">Homework</button>
        <button class="primary quiz-open" data-quiz-id="${lesson.quizId}" data-lesson-title="${lesson.title}">Quiz</button>
      </div>
    </div>
  `;
}

function findLesson(lessonId) {
  for (const level of mathAlgebraCurriculum.levels) {
    for (const unit of level.units) {
      for (const lesson of unit.lessons) {
        if (lesson.id === lessonId) return { level, unit, lesson };
      }
    }
  }
  return null;
}

function renderLesson(lessonId) {
  const found = findLesson(lessonId);
  if (!found) return renderDashboard();
  const { level, unit, lesson } = found;

  app.innerHTML = `
    <button class="link-button" id="backBtn">← Back to ${level.title}</button>
    <article class="lesson-view">
      <p class="eyebrow">${unit.title}</p>
      <h1>${lesson.title}</h1>
      <section class="panel">
        <h2>Objective</h2>
        <p>${lesson.objective}</p>
      </section>
      <section class="panel">
        <h2>Vocabulary</h2>
        <div class="vocab-list">${lesson.vocabulary.map(word => `<span>${word}</span>`).join("")}</div>
      </section>
      <section class="panel">
        <h2>Lesson Notes</h2>
        <p>${lesson.directLesson}</p>
      </section>
      <section class="panel">
        <h2>Worked Example</h2>
        <p><strong>Problem:</strong> ${lesson.workedExample.problem}</p>
        <ol>${lesson.workedExample.steps.map(step => `<li>${step}</li>`).join("")}</ol>
        <p class="answer-box"><strong>Answer:</strong> ${lesson.workedExample.answer}</p>
      </section>
      <div class="button-row">
        <button class="primary" id="completeLessonBtn">Mark Lesson Complete</button>
        <button class="secondary" id="homeworkBtn">Open Homework</button>
        <button class="secondary" id="quizBtn">Take Quiz</button>
      </div>
    </article>
  `;

  document.querySelector("#backBtn").addEventListener("click", () => renderLevel(level.id));
  document.querySelector("#completeLessonBtn").addEventListener("click", () => {
    markLessonComplete(lesson.id);
    renderProgressPanel();
  });
  document.querySelector("#homeworkBtn").addEventListener("click", () => renderHomework(lesson.homeworkId));
  document.querySelector("#quizBtn").addEventListener("click", () => renderAssessment(lesson.quizId, `Quiz: ${lesson.title}`, getQuestionsByQuizId(lesson.quizId), "quiz"));
}

function renderHomework(homeworkId) {
  const set = homeworkSets[homeworkId];
  if (!set) return renderDashboard();

  app.innerHTML = `
    <button class="link-button" id="backBtn">← Back to Dashboard</button>
    <section class="assessment-card">
      <p class="eyebrow">Homework</p>
      <h1>${set.title}</h1>
      <p>${set.instructions}</p>
      <form id="homeworkForm">
        ${set.problems.map((problem, index) => `
          <fieldset class="question-card">
            <legend>${index + 1}. ${problem.prompt}</legend>
            <input name="${problem.id}" placeholder="Type your answer" autocomplete="off" />
          </fieldset>
        `).join("")}
        <button class="primary" type="submit">Grade Homework</button>
      </form>
    </section>
  `;

  document.querySelector("#backBtn").addEventListener("click", renderDashboard);
  document.querySelector("#homeworkForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const questions = set.problems.map(problem => ({
      id: problem.id,
      question: problem.prompt,
      answer: problem.answer,
      explanation: problem.solution,
      skill: problem.skill,
      points: 1,
      type: "short-answer"
    }));
    const answers = Object.fromEntries(formData.entries());
    const report = scoreAssessment(questions, answers);
    saveAssessmentResult(set.id, report, "homework");
    renderResults(set.title, report, "homework");
  });
}

function renderAssessment(assessmentId, title, questions, type = "quiz") {
  app.innerHTML = `
    <button class="link-button" id="backBtn">← Back to Dashboard</button>

    <section class="assessment-card">
      <p class="eyebrow">${type === "placement" ? "Placement" : "Assessment"}</p>
      <h1>${title}</h1>

      <form id="assessmentForm" class="assessment-form kwa-assessment-form">
        ${questions.map((question, index) => renderAssessmentQuestion(question, index)).join("")}

        <button class="primary" type="submit">Submit and Grade</button>
      </form>
    </section>
  `;

  document.querySelector("#backBtn").addEventListener("click", renderDashboard);

  document.querySelector("#assessmentForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const answers = collectAssessmentAnswers(questions, event.target);
    const report = scoreAssessment(questions, answers);

    if (type === "placement") {
      savePlacement(report);
    } else {
      saveAssessmentResult(assessmentId, report, type);
    }

    renderResults(title, report, type);
  });
}

function renderAssessmentQuestion(question, index) {
  return `
    <fieldset class="question-card kwa-question-card">
      <legend>
        <span class="question-kicker">Question ${index + 1}</span>
        <span class="question-prompt">${escapeHtml(question.question)}</span>
      </legend>

      ${renderQuestionInput(question, index)}
    </fieldset>
  `;
}

function renderQuestionInput(question, index = 0) {
  if (question.type === "mcq") {
    return `
      <div class="choices answer-grid kwa-answer-grid" role="radiogroup" aria-label="Question ${index + 1} choices">
        ${question.choices.map((choice, choiceIndex) => {
          const letter = String.fromCharCode(65 + choiceIndex);
          const inputId = `${question.id}-${choiceIndex}`;

          return `
            <label class="choice kwa-choice-card" for="${escapeHtml(inputId)}">
              <input
                id="${escapeHtml(inputId)}"
                type="radio"
                name="${escapeHtml(question.id)}"
                value="${choiceIndex}"
              >
              <span class="choice-letter kwa-choice-letter">${letter}</span>
              <span class="choice-copy kwa-choice-copy">
                <strong>${letter}.</strong>
                <span>${escapeHtml(choice)}</span>
              </span>
            </label>
          `;
        }).join("")}
      </div>
    `;
  }

  return `
    <textarea
      class="short-answer"
      name="${escapeHtml(question.id)}"
      placeholder="Write your answer here..."
    ></textarea>
  `;
}

function collectAssessmentAnswers(questions, form) {
  const formData = new FormData(form);
  const answers = {};
  questions.forEach(question => {
    answers[question.id] = formData.get(question.id);
  });
  return answers;
}

function renderResults(title, report, type) {
  const feedback = buildTeacherFeedback(report);
  const recommended = getRecommendedLesson(report, mathAlgebraCurriculum);

  app.innerHTML = `
    <button class="link-button" id="backBtn">← Back to Dashboard</button>
    <section class="results-card">
      <p class="eyebrow">Results</p>
      <h1>${title}</h1>
      <div class="score-badge">${report.percent}%</div>
      <p><strong>Score:</strong> ${report.earned}/${report.possible}</p>
      <p><strong>Letter:</strong> ${report.letter}</p>
      <p><strong>Mastery:</strong> ${report.mastery}</p>
      ${type === "placement" ? `<p><strong>Placement:</strong> ${formatPlacement(report.placement)}</p>` : ""}
      <section class="panel">
        <h2>Teacher Feedback</h2>
        <p>${feedback.teacherNote}</p>
      </section>
      ${recommended ? `<section class="panel"><h2>Recommended Review</h2><p><strong>${recommended.title}</strong></p><p>${recommended.reason}</p></section>` : ""}
      <section class="panel">
        <h2>Answer Explanations</h2>
        ${report.results.map((item, index) => `
          <div class="explanation-item ${item.correct ? "correct" : "incorrect"}">
            <h3>${index + 1}. ${item.correct ? "Correct" : "Incorrect"}</h3>
            <p><strong>Question:</strong> ${item.question}</p>
            <p><strong>Your answer:</strong> ${item.submitted || "No answer"}</p>
            <p><strong>Correct answer:</strong> ${item.correctAnswer}</p>
            ${item.wrongExplanation ? `<p><strong>Why yours missed:</strong> ${item.wrongExplanation}</p>` : ""}
            <p><strong>Explanation:</strong> ${item.explanation}</p>
            <p><strong>Skill:</strong> ${item.skill}</p>
          </div>
        `).join("")}
      </section>
    </section>
  `;

  document.querySelector("#backBtn").addEventListener("click", renderDashboard);
  renderProgressPanel();
}

function renderProgressPanel() {
  const progress = loadProgress();
  const quizCount = Object.keys(progress.quizScores || {}).length;
  const homeworkCount = Object.keys(progress.homeworkScores || {}).length;
  const mastered = Object.keys(progress.masteredSkills || {}).length;
  const missed = Object.keys(progress.missedSkills || {}).length;

  progressPanel.innerHTML = `
    <h2>Progress Tracking</h2>
    <p><strong>Current level:</strong> ${formatPlacement(progress.currentLevel) || "Not placed yet"}</p>
    <p><strong>Completed lessons:</strong> ${progress.completedLessons.length}</p>
    <p><strong>Quizzes/tests completed:</strong> ${quizCount}</p>
    <p><strong>Homework completed:</strong> ${homeworkCount}</p>
    <p><strong>Mastered skill count:</strong> ${mastered}</p>
    <p><strong>Weak skill count:</strong> ${missed}</p>
    <details>
      <summary>Weak Skills</summary>
      <ul>${Object.entries(progress.missedSkills || {}).map(([skill, count]) => `<li>${skill}: ${count}</li>`).join("") || "<li>None yet</li>"}</ul>
    </details>
  `;
}

function formatPlacement(value) {
  const map = {
    basic: "Basic Math Foundations",
    intermediate: "Intermediate Pre-Algebra",
    advanced: "Advanced Algebra I",
    "advanced-honors": "Advanced Algebra I + Honors",
    "restart-current-lesson": "Restart Current Lesson",
    "review-current-skill": "Review Current Skill",
    "continue-next-lesson": "Continue to Next Lesson"
  };
  return map[value] || value;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  }[char]));
}

render();

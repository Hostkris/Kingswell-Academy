// Kingswell Academy — Architecture + Drafting App UI

const curriculum = window.KWA_ARCHITECTURE_DRAFTING;
const app = document.querySelector("#app");

let state = window.KWAProgress.load();
let activeQuiz = null;

function sourceLabel(sourceRefs = []) {
  return sourceRefs
    .map(ref => curriculum.sources[ref]?.title || ref)
    .join(" + ");
}

function getActiveClass() {
  const levelData = curriculum.levels[state.activeLevel];
  return levelData.classes.find(c => c.id === state.activeClassId) || levelData.classes[0];
}

function setLevel(level) {
  const firstClass = curriculum.levels[level].classes[0];
  state = window.KWAProgress.setActive(level, firstClass.id);
  activeQuiz = null;
  render();
}

function setClass(classId) {
  state = window.KWAProgress.setActive(state.activeLevel, classId);
  activeQuiz = null;
  render();
}

function markLessonComplete(classId) {
  state = window.KWAProgress.completeLesson(state.activeLevel, classId);
  render();
}

function saveHomework(classId) {
  const scoreInput = document.querySelector(`#homework-score-${classId}`);
  const notesInput = document.querySelector(`#homework-notes-${classId}`);
  const score = Number(scoreInput?.value || 0);
  const classData = getActiveClass();
  const max = classData.homework.points;

  if (Number.isNaN(score) || score < 0 || score > max) {
    alert(`Enter a homework score from 0 to ${max}.`);
    return;
  }

  state = window.KWAProgress.saveHomeworkScore(
    state.activeLevel,
    classId,
    score,
    notesInput?.value || ""
  );
  render();
}

function startClassQuiz(classId) {
  const questions = window.KWAQuiz.buildClassQuiz(curriculum, classId);
  activeQuiz = { mode: "class", classId, level: state.activeLevel, questions, answers: {}, result: null };
  render();
}

function startLevelTest(level) {
  const questions = window.KWAQuiz.buildLevelTest(curriculum, level);
  activeQuiz = { mode: "level", classId: null, level, questions, answers: {}, result: null };
  render();
}

function answerQuestion(questionId, answer) {
  if (!activeQuiz) return;
  activeQuiz.answers[questionId] = answer;
}

function submitQuiz() {
  if (!activeQuiz) return;

  const unanswered = activeQuiz.questions.filter(q => !activeQuiz.answers[q.id]);
  if (unanswered.length > 0) {
    const proceed = confirm(`${unanswered.length} question(s) are unanswered. Submit anyway?`);
    if (!proceed) return;
  }

  activeQuiz.result = window.KWAQuiz.grade(
    activeQuiz.questions,
    activeQuiz.answers,
    curriculum.passingScore
  );

  if (activeQuiz.mode === "class") {
    state = window.KWAProgress.saveQuizAttempt(
      activeQuiz.level,
      activeQuiz.classId,
      activeQuiz.result
    );
  } else {
    state = window.KWAProgress.saveLevelTest(activeQuiz.level, activeQuiz.result);
  }

  render();
}

function resetProgress() {
  const ok = confirm("Reset all Architecture + Drafting progress on this device?");
  if (!ok) return;
  state = window.KWAProgress.reset();
  activeQuiz = null;
  render();
}

function render() {
  const levelData = curriculum.levels[state.activeLevel];
  const classData = getActiveClass();

  app.innerHTML = `
    <header class="hero">
      <div>
        <p class="eyebrow">Kingswell Academy Curriculum Module</p>
        <h1>${curriculum.subject}</h1>
        <p class="hero-copy">Books become the source map. Lessons, tests, homework, rubrics, and progress tracking become original platform instruction.</p>
      </div>
      <div class="hero-card">
        <strong>40-question level test</strong>
        <span>Passing: ${curriculum.passingScore}%</span>
        <span>Mastery: ${curriculum.masteryScore}%</span>
      </div>
    </header>

    <section class="level-tabs">
      ${Object.keys(curriculum.levels).map(level => `
        <button class="tab ${state.activeLevel === level ? "active" : ""}" onclick="setLevel('${level}')">
          ${curriculum.levels[level].title}
        </button>
      `).join("")}
    </section>

    <main class="layout">
      <aside class="sidebar">
        <h2>${levelData.title}</h2>
        <p>${levelData.description}</p>
        <button class="primary wide" onclick="startLevelTest('${state.activeLevel}')">Start 40-Question Level Test</button>
        <div class="progress-card">${renderLevelSummary(state.activeLevel)}</div>
        <h3>Classes</h3>
        <div class="class-list">
          ${levelData.classes.map(c => renderClassButton(c)).join("")}
        </div>
        <button class="ghost wide" onclick="resetProgress()">Reset Local Progress</button>
      </aside>

      <section class="content">
        ${activeQuiz ? renderQuiz(activeQuiz) : renderLesson(classData)}
      </section>
    </main>
  `;
}

function renderClassButton(classData) {
  const completed = state.lessonsCompleted[classData.id] ? "✓" : "";
  const best = window.KWAProgress.bestQuizScore(classData.id);
  const quizBadge = best === null ? "" : `<span class="score-mini">${best}%</span>`;
  const active = state.activeClassId === classData.id ? "active" : "";

  return `
    <button class="class-button ${active}" onclick="setClass('${classData.id}')">
      <span>${completed} ${classData.unit}. ${classData.title}</span>
      ${quizBadge}
    </button>
  `;
}

function renderLevelSummary(level) {
  const summary = window.KWAProgress.levelSummary(level, curriculum);
  const latest = summary.latestLevelTest
    ? `<p><strong>Latest test:</strong> ${summary.latestLevelTest.percent}% — ${summary.latestLevelTest.label}</p>`
    : `<p><strong>Latest test:</strong> Not taken</p>`;
  const cert = summary.certificate
    ? `<p class="certificate">Certificate unlocked: ${summary.certificate.score}%</p>`
    : `<p>Certificate unlocks after passing the level test.</p>`;

  return `
    <p><strong>Progress:</strong> ${summary.percentComplete}%</p>
    <div class="meter"><span style="width:${summary.percentComplete}%"></span></div>
    <p>Lessons: ${summary.completedLessons}/${summary.totalClasses}</p>
    <p>Homework: ${summary.homeworkCompleted}/${summary.totalClasses}</p>
    <p>Quizzes passed: ${summary.quizzesPassed}/${summary.totalClasses}</p>
    ${latest}
    ${cert}
  `;
}

function renderLesson(classData) {
  const homeworkScore = state.homeworkScores[classData.id];
  const rubricTotal = window.KWAQuiz.rubricTotal(classData.homework.rubric);
  const bestQuiz = window.KWAProgress.bestQuizScore(classData.id);

  return `
    <article class="lesson">
      <div class="lesson-top">
        <div>
          <p class="eyebrow">Class ${classData.unit} • ${sourceLabel(classData.sourceRefs)}</p>
          <h2>${classData.title}</h2>
        </div>
        <div class="lesson-actions">
          <button class="primary" onclick="markLessonComplete('${classData.id}')">Mark Lesson Complete</button>
          <button class="secondary" onclick="startClassQuiz('${classData.id}')">Start Class Quiz</button>
        </div>
      </div>

      <section class="panel">
        <h3>Objectives</h3>
        <ul>${classData.objectives.map(o => `<li>${o}</li>`).join("")}</ul>
      </section>

      <section class="panel">
        <h3>Teacher-Written Lesson</h3>
        <p>${classData.lesson}</p>
      </section>

      <section class="panel">
        <h3>Vocabulary</h3>
        <div class="vocab-grid">
          ${classData.vocabulary.map(v => `
            <div class="vocab-card">
              <strong>${v.term}</strong>
              <p>${v.definition}</p>
            </div>
          `).join("")}
        </div>
      </section>

      <section class="panel homework">
        <h3>Homework / Studio Task</h3>
        <h4>${classData.homework.title}</h4>
        <p>${classData.homework.instructions}</p>
        <p><strong>Submission:</strong> ${classData.homework.submissionType}</p>
        <p><strong>Points:</strong> ${classData.homework.points}</p>
        <h4>Rubric</h4>
        <table>
          <thead><tr><th>Criteria</th><th>Points</th></tr></thead>
          <tbody>
            ${Object.entries(classData.homework.rubric).map(([key, value]) => `<tr><td>${key}</td><td>${value}</td></tr>`).join("")}
            <tr><td><strong>Total rubric weight</strong></td><td><strong>${rubricTotal}</strong></td></tr>
          </tbody>
        </table>

        <div class="score-box">
          <label>Homework score / ${classData.homework.points}</label>
          <input id="homework-score-${classData.id}" type="number" min="0" max="${classData.homework.points}" value="${homeworkScore?.score ?? ""}" placeholder="0-${classData.homework.points}">
          <label>Teacher/self notes</label>
          <textarea id="homework-notes-${classData.id}" placeholder="Write feedback or improvement notes.">${homeworkScore?.notes ?? ""}</textarea>
          <button class="secondary" onclick="saveHomework('${classData.id}')">Save Homework Score</button>
          ${homeworkScore ? `<p class="saved">Saved: ${homeworkScore.score}/${classData.homework.points}</p>` : ""}
        </div>
      </section>

      <section class="panel">
        <h3>Class Quiz Status</h3>
        <p>${bestQuiz === null ? "No quiz attempt yet." : `Best score: <strong>${bestQuiz}%</strong> — ${window.KWAQuiz.scoreLabel(bestQuiz)}`}</p>
      </section>
    </article>
  `;
}

function renderQuiz(quiz) {
  if (quiz.result) return renderQuizResults(quiz);

  const title = quiz.mode === "class"
    ? `Class Quiz: ${getActiveClass().title}`
    : `${curriculum.levels[quiz.level].title} — 40-Question Test`;

  return `
    <article class="quiz">
      <div class="lesson-top">
        <div>
          <p class="eyebrow">Testing System</p>
          <h2>${title}</h2>
          <p>${quiz.questions.length} questions. Choose the best answer. Explanations appear after scoring.</p>
        </div>
        <button class="ghost" onclick="activeQuiz=null; render();">Back to Lesson</button>
      </div>

      ${quiz.questions.map((q, index) => `
        <section class="question-card">
          <p class="question-source">${index + 1}. ${q.book} • ${q.sourceTopic} • ${q.skill}</p>
          <h3>${q.question}</h3>
          <div class="options">
            ${q.options.map(option => `
              <label class="option">
                <input type="radio" name="${q.id}" value="${escapeHtml(option)}" onchange="answerQuestion('${q.id}', this.value)">
                <span>${option}</span>
              </label>
            `).join("")}
          </div>
        </section>
      `).join("")}

      <div class="sticky-submit">
        <button class="primary" onclick="submitQuiz()">Submit and Score</button>
      </div>
    </article>
  `;
}

function renderQuizResults(quiz) {
  const result = quiz.result;
  const title = quiz.mode === "class" ? "Class Quiz Results" : "Level Test Results";

  return `
    <article class="results">
      <div class="result-hero ${result.passed ? "passed" : "failed"}">
        <p class="eyebrow">${title}</p>
        <h2>${result.percent}% — ${result.label}</h2>
        <p>${result.earned}/${result.possible} points earned. ${result.passed ? "Student may move forward after reviewing explanations." : "Student should review missed explanations and repeat practice before advancing."}</p>
        <button class="secondary" onclick="activeQuiz=null; render();">Return to Lessons</button>
      </div>

      <section class="panel">
        <h3>Answer Explanations</h3>
        ${result.results.map((r, index) => `
          <div class="explanation ${r.correct ? "correct" : "wrong"}">
            <p><strong>${index + 1}. ${r.correct ? "Correct" : "Incorrect"}</strong> — ${r.question}</p>
            <p><strong>Your answer:</strong> ${r.studentAnswer || "No answer selected"}</p>
            <p><strong>Correct answer:</strong> ${r.correctAnswer}</p>
            <p><strong>Explanation:</strong> ${r.explanation}</p>
            ${r.correct ? "" : `<p><strong>Remediation:</strong> ${r.remediation}</p>`}
          </div>
        `).join("")}
      </section>
    </article>
  `;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[char]);
}

window.setLevel = setLevel;
window.setClass = setClass;
window.markLessonComplete = markLessonComplete;
window.saveHomework = saveHomework;
window.startClassQuiz = startClassQuiz;
window.startLevelTest = startLevelTest;
window.answerQuestion = answerQuestion;
window.submitQuiz = submitQuiz;
window.resetProgress = resetProgress;
window.render = render;

render();

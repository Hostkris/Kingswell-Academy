import { logicResearchCourse, getLevel, getUnit } from "./data.logicResearch.js";
import { getQuestionsByLesson, getFinalTest } from "./questions.logicResearch.js";
import { getHomework } from "./homework.logicResearch.js";
import { logicResearchRubrics } from "./rubrics.logicResearch.js";
import { gradeAssessment, buildTeacherFeedback } from "./grading.logicResearch.js";
import {
  getCurrentStudent,
  setCurrentStudent,
  getProgress,
  saveLessonComplete,
  saveAssessmentResult,
  calculateLevelProgress
} from "./progress.logicResearch.js";

let state = {
  levelId: "basic",
  unitId: null,
  lessonId: null,
  tab: "lesson",
  quizAnswers: {},
  finalAnswers: {}
};

const els = {
  studentName: document.querySelector("#studentName"),
  saveStudentBtn: document.querySelector("#saveStudentBtn"),
  levelButtons: document.querySelector("#levelButtons"),
  unitList: document.querySelector("#unitList"),
  progressBox: document.querySelector("#progressBox"),
  tabs: [...document.querySelectorAll(".tab")],
  lessonView: document.querySelector("#lessonView"),
  homeworkView: document.querySelector("#homeworkView"),
  quizView: document.querySelector("#quizView"),
  finalView: document.querySelector("#finalView"),
  rubricView: document.querySelector("#rubricView")
};

init();

function init() {
  els.studentName.value = getCurrentStudent();

  const firstLevel = logicResearchCourse.levels[0];
  state.levelId = firstLevel.id;
  state.unitId = firstLevel.units[0].id;
  state.lessonId = firstLevel.units[0].lessons[0].id;

  els.saveStudentBtn.addEventListener("click", () => {
    setCurrentStudent(els.studentName.value);
    render();
  });

  els.tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      state.tab = tab.dataset.tab;
      render();
    });
  });

  render();
}

function render() {
  renderLevelButtons();
  renderUnits();
  renderProgress();
  renderTabs();
  renderLesson();
  renderHomework();
  renderQuiz();
  renderFinal();
  renderRubric();
}

function renderLevelButtons() {
  els.levelButtons.innerHTML = "";
  logicResearchCourse.levels.forEach((level) => {
    const btn = document.createElement("button");
    btn.textContent = level.title;
    btn.classList.toggle("active", level.id === state.levelId);
    btn.addEventListener("click", () => {
      state.levelId = level.id;
      state.unitId = level.units[0].id;
      state.lessonId = level.units[0].lessons[0].id;
      state.quizAnswers = {};
      state.finalAnswers = {};
      render();
    });
    els.levelButtons.appendChild(btn);
  });
}

function renderUnits() {
  const level = getLevel(state.levelId);
  els.unitList.innerHTML = "";

  level.units.forEach((unit) => {
    const unitTitle = document.createElement("div");
    unitTitle.className = "unit-title";
    unitTitle.innerHTML = `<strong>${unit.title}</strong>`;
    els.unitList.appendChild(unitTitle);

    unit.lessons.forEach((lesson) => {
      const btn = document.createElement("button");
      btn.className = "unit-btn";
      btn.classList.toggle("active", lesson.id === state.lessonId);
      btn.innerHTML = `<strong>${lesson.title}</strong><br><small>${unit.id}</small>`;
      btn.addEventListener("click", () => {
        state.unitId = unit.id;
        state.lessonId = lesson.id;
        state.quizAnswers = {};
        render();
      });
      els.unitList.appendChild(btn);
    });
  });
}

function renderProgress() {
  const level = getLevel(state.levelId);
  const levelProgress = calculateLevelProgress(level);
  const progress = getProgress();

  els.progressBox.innerHTML = `
    <p><strong>Student:</strong> ${escapeHtml(getCurrentStudent())}</p>
    <div class="progress-meter"><span style="width:${levelProgress.percentage}%"></span></div>
    <p>${levelProgress.completed}/${levelProgress.total} lessons completed (${levelProgress.percentage}%).</p>
    <p><strong>Latest final score:</strong> ${levelProgress.latestFinalScore ?? "Not taken yet"}</p>
    <p><strong>Total assessments:</strong> ${progress.assessments.length}</p>
  `;
}

function renderTabs() {
  els.tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === state.tab));
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
  document.querySelector(`#${state.tab}View`).classList.add("active");
}

function getCurrentLesson() {
  const level = getLevel(state.levelId);
  for (const unit of level.units) {
    const lesson = unit.lessons.find((item) => item.id === state.lessonId);
    if (lesson) return { level, unit, lesson };
  }
  return null;
}

function renderLesson() {
  const current = getCurrentLesson();
  const { level, unit, lesson } = current;

  els.lessonView.innerHTML = `
    <h2 class="lesson-title">${lesson.title}</h2>
    <p><strong>Level:</strong> ${level.title}</p>
    <p><strong>Unit:</strong> ${unit.title}</p>

    <div class="meta-grid">
      <div class="meta-card">
        <h4>Objectives</h4>
        <ul>${lesson.objectives.map((x) => `<li>${x}</li>`).join("")}</ul>
      </div>
      <div class="meta-card">
        <h4>Vocabulary</h4>
        <ul>${lesson.vocabulary.map(([term, def]) => `<li><strong>${term}:</strong> ${def}</li>`).join("")}</ul>
      </div>
    </div>

    <div class="reading-box">
      <h3>Lesson</h3>
      <p>${lesson.lesson}</p>
    </div>

    <div class="example-box">
      <h3>Example</h3>
      <p>${lesson.example}</p>
    </div>

    <div class="assignment-box">
      <h3>Practice</h3>
      <p>${lesson.practice}</p>
    </div>

    <div class="action-row">
      <button id="completeLessonBtn">Mark Lesson Complete</button>
    </div>
  `;

  document.querySelector("#completeLessonBtn").addEventListener("click", () => {
    saveLessonComplete(state.levelId, state.unitId, state.lessonId);
    render();
  });
}

function renderHomework() {
  const homework = getHomework(state.lessonId);

  if (!homework) {
    els.homeworkView.innerHTML = "<h2>Homework</h2><p>No homework found for this lesson.</p>";
    return;
  }

  els.homeworkView.innerHTML = `
    <h2>${homework.title}</h2>
    <p>${homework.directions}</p>
    <ol>${homework.tasks.map((task) => `<li>${task}</li>`).join("")}</ol>
    <div class="assignment-box">
      <h3>Submission</h3>
      <p>${homework.submission}</p>
    </div>
    <label for="homeworkResponse"><strong>Student Response</strong></label>
    <textarea id="homeworkResponse" placeholder="Paste or write homework response here..."></textarea>
    <div class="action-row">
      <button id="saveHomeworkBtn">Save Homework Locally</button>
    </div>
    <div id="homeworkSaved"></div>
  `;

  document.querySelector("#saveHomeworkBtn").addEventListener("click", () => {
    const key = `homework.${getCurrentStudent()}.${state.lessonId}`;
    localStorage.setItem(key, document.querySelector("#homeworkResponse").value);
    document.querySelector("#homeworkSaved").innerHTML = `<p class="result-box">Homework saved on this device.</p>`;
  });

  const saved = localStorage.getItem(`homework.${getCurrentStudent()}.${state.lessonId}`);
  if (saved) document.querySelector("#homeworkResponse").value = saved;
}

function renderQuiz() {
  const questions = getQuestionsByLesson(state.lessonId, 10);
  els.quizView.innerHTML = `
    <h2>Lesson Quiz</h2>
    <p>This quiz uses questions connected to the current lesson, skill, and source book.</p>
    <div id="quizQuestions"></div>
    <div class="action-row">
      <button id="gradeQuizBtn">Grade Quiz</button>
      <button class="secondary" id="clearQuizBtn">Clear Answers</button>
    </div>
    <div id="quizResults"></div>
  `;

  const holder = document.querySelector("#quizQuestions");
  questions.forEach((q) => holder.appendChild(renderQuestion(q, state.quizAnswers)));

  document.querySelector("#gradeQuizBtn").addEventListener("click", () => {
    const report = gradeAssessment(questions, state.quizAnswers);
    saveAssessmentResult("quiz", state.levelId, state.lessonId, report);
    showReport("#quizResults", report, questions, state.quizAnswers);
    renderProgress();
  });

  document.querySelector("#clearQuizBtn").addEventListener("click", () => {
    state.quizAnswers = {};
    renderQuiz();
  });
}

function renderFinal() {
  const questions = getFinalTest(state.levelId);
  els.finalView.innerHTML = `
    <h2>${getLevel(state.levelId).title} Final Test</h2>
    <p>40-question final. Passing score: 70%.</p>
    <div id="finalQuestions"></div>
    <div class="action-row">
      <button id="gradeFinalBtn">Grade Final Test</button>
      <button class="secondary" id="clearFinalBtn">Clear Answers</button>
    </div>
    <div id="finalResults"></div>
  `;

  const holder = document.querySelector("#finalQuestions");
  questions.forEach((q) => holder.appendChild(renderQuestion(q, state.finalAnswers)));

  document.querySelector("#gradeFinalBtn").addEventListener("click", () => {
    const report = gradeAssessment(questions, state.finalAnswers);
    saveAssessmentResult("final", state.levelId, null, report);
    showReport("#finalResults", report, questions, state.finalAnswers);
    renderProgress();
  });

  document.querySelector("#clearFinalBtn").addEventListener("click", () => {
    state.finalAnswers = {};
    renderFinal();
  });
}

function renderQuestion(question, answerStore) {
  const template = document.querySelector("#questionTemplate");
  const node = template.content.cloneNode(true);

  node.querySelector(".skill-pill").textContent = question.skill.replaceAll("-", " ");
  node.querySelector(".points").textContent = `${question.points} point`;
  node.querySelector(".prompt").textContent = question.prompt;

  const options = node.querySelector(".options");
  question.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;
    btn.classList.toggle("selected", Number(answerStore[question.id]) === index);
    btn.addEventListener("click", () => {
      answerStore[question.id] = index;
      render();
    });
    options.appendChild(btn);
  });

  return node;
}

function showReport(selector, report, questions, answers) {
  const feedback = buildTeacherFeedback(report);

  document.querySelector(selector).innerHTML = `
    <div class="result-box">
      <h3>${feedback.summary}</h3>
      <p><strong>Status:</strong> ${feedback.status}</p>
      <p><strong>Strengths:</strong> ${feedback.strengths.join(", ")}</p>
      <p><strong>Needs Work:</strong> ${feedback.needsWork.join(", ")}</p>
      <p><strong>Next Steps:</strong> ${feedback.nextSteps.join("; ")}</p>
    </div>

    <h3>Answer Explanations</h3>
    ${questions.map((q) => {
      const chosen = answers[q.id];
      const correct = Number(chosen) === q.correctAnswer;
      return `
        <article class="question-card">
          <h4>${q.prompt}</h4>
          <p><strong>Your answer:</strong> ${chosen === undefined ? "Not answered" : q.options[chosen]}</p>
          <p><strong>Correct answer:</strong> ${q.options[q.correctAnswer]}</p>
          <p><strong>Result:</strong> ${correct ? "Correct" : "Incorrect"}</p>
          <p><strong>Explanation:</strong> ${q.explanation}</p>
        </article>
      `;
    }).join("")}
  `;
}

function renderRubric() {
  const rubrics = Object.values(logicResearchRubrics);

  els.rubricView.innerHTML = `
    <h2>Rubrics</h2>
    <p>Use these to grade writing, source evaluation, and capstone projects.</p>
    ${rubrics.map((rubric) => `
      <h3>${rubric.title}</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Excellent</th>
              <th>Proficient</th>
              <th>Developing</th>
              <th>Beginning</th>
            </tr>
          </thead>
          <tbody>
            ${rubric.criteria.map((row) => `
              <tr>
                <td><strong>${row.category}</strong></td>
                <td>${row.excellent}</td>
                <td>${row.proficient}</td>
                <td>${row.developing}</td>
                <td>${row.beginning}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `).join("")}
  `;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return map[char];
  });
}

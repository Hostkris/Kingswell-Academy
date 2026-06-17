const STORE_KEY = "kwa_business_marketing_progress_v1";
let state = loadState();

function $(selector, root = document) {
  return root.querySelector(selector);
}

function $$(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function loadState() {
  try {
    return {
      level: "Basic",
      lessonId: "basic-1",
      view: "lesson",
      completed: [],
      quizzes: {},
      finals: {},
      homework: {},
      currentQuiz: null,
      currentFinal: null,
      ...JSON.parse(localStorage.getItem(STORE_KEY) || "{}")
    };
  } catch {
    return { level: "Basic", lessonId: "basic-1", view: "lesson", completed: [], quizzes: {}, finals: {}, homework: {} };
  }
}

function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function esc(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

function lessons() {
  return BUSINESS_LESSONS[state.level] || BUSINESS_LESSONS.Basic;
}

function activeLesson() {
  return lessons().find(item => item.id === state.lessonId) || lessons()[0];
}

function progressForLevel() {
  const ids = lessons().map(item => item.id);
  const done = ids.filter(id => state.completed.includes(id)).length;
  return { done, total: ids.length, percent: Math.round((done / ids.length) * 100) };
}

function setLevel(level) {
  state.level = level;
  state.lessonId = BUSINESS_LESSONS[level][0].id;
  state.currentQuiz = null;
  state.currentFinal = null;
  saveState();
  renderAll();
}

function setView(view) {
  state.view = view;
  saveState();
  $$(".tab").forEach(tab => tab.classList.toggle("active", tab.dataset.view === view));
  $$(".view").forEach(panel => panel.classList.toggle("active", panel.id === `${view}View`));
  if (view === "quiz") renderQuiz();
  if (view === "final") renderFinal();
}

function renderLevelButtons() {
  $("#levelButtons").innerHTML = Object.keys(BUSINESS_LEVELS).map(level => `
    <button class="level-btn ${state.level === level ? "active" : ""}" type="button" data-level="${level}">
      ${level}
    </button>
  `).join("");
}

function renderLessonList() {
  $("#lessonList").innerHTML = lessons().map((lesson, index) => {
    const done = state.completed.includes(lesson.id);
    return `
      <button class="lesson-link ${lesson.id === state.lessonId ? "active" : ""}" type="button" data-lesson="${lesson.id}">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${esc(lesson.title)}</strong>
        <small>${done ? "Complete" : "Open"}</small>
      </button>
    `;
  }).join("");
}

function renderProgress() {
  const p = progressForLevel();
  const final = state.finals[state.level];
  $("#progressPanel").innerHTML = `
    <div class="progress"><span style="width:${p.percent}%"></span></div>
    <p><strong>${p.done}/${p.total}</strong> lessons completed for ${esc(state.level)}.</p>
    <p><strong>Final:</strong> ${final?.passed ? `Passed (${final.percent}%)` : "Not passed yet"}</p>
  `;
}

function renderLesson() {
  const lesson = activeLesson();
  $("#lessonView").innerHTML = `
    <article class="card">
      <p class="eyebrow">${esc(state.level)} Business + Marketing</p>
      <h2>${esc(lesson.title)}</h2>
      <p class="lede">${esc(lesson.objective)}</p>
      <div class="notice"><strong>Level standard:</strong> ${esc(BUSINESS_LEVELS[state.level].tagline)}</div>
      <h3>Written Lesson</h3>
      ${lesson.notes.map(note => `<p>${esc(note)}</p>`).join("")}
      <h3>Vocabulary</h3>
      <div class="tags">${lesson.vocabulary.map(word => `<span class="tag">${esc(word)}</span>`).join("")}</div>
      <h3>Practice</h3>
      <ul>${lesson.practice.map(item => `<li>${esc(item)}</li>`).join("")}</ul>
      <h3>Mastery Rubric</h3>
      <ul>${lesson.rubric.map(item => `<li>${esc(item)}</li>`).join("")}</ul>
      <div class="actions">
        <button class="primary" type="button" data-complete="${lesson.id}">${state.completed.includes(lesson.id) ? "Completed" : "Mark Lesson Complete"}</button>
        <button class="secondary" type="button" data-view-jump="homework">Open Homework</button>
        <button class="secondary" type="button" data-view-jump="quiz">Start Quiz</button>
      </div>
    </article>
  `;
}

function renderHomework() {
  const lesson = activeLesson();
  const saved = state.homework[lesson.id] || {};
  $("#homeworkView").innerHTML = `
    <article class="card">
      <p class="eyebrow">Homework</p>
      <h2>${esc(lesson.title)}</h2>
      <p>${esc(lesson.homework)}</p>
      <label for="hw-response">Business response</label>
      <textarea id="hw-response" placeholder="Define the concept, show one example, correct one weak spot, and state the next action.">${esc(saved.response || "")}</textarea>
      <label for="hw-proof">Portfolio proof summary</label>
      <textarea id="hw-proof" placeholder="What changed between your first attempt and your final version?">${esc(saved.proof || "")}</textarea>
      <div class="actions">
        <button class="primary" type="button" id="saveHomework">Save Homework</button>
        <button class="secondary" type="button" id="printHomework">Print</button>
      </div>
    </article>
  `;
}

function makeQuestion(lesson, index, seed) {
  const template = BUSINESS_QUESTION_TEMPLATES[(index + seed) % BUSINESS_QUESTION_TEMPLATES.length];
  const vocab = lesson.vocabulary[index % lesson.vocabulary.length];
  const correct = template.correct;
  const choices = shuffle([correct, ...template.wrong], `${lesson.id}-${index}-${seed}`);
  return {
    prompt: template.prompt.replace("{topic}", lesson.objective).replace("{title}", lesson.title).replace("{vocab}", vocab),
    choices,
    answer: choices.indexOf(correct),
    reason: template.reason
  };
}

function shuffle(items, seedText) {
  let seed = 0;
  for (let i = 0; i < seedText.length; i += 1) seed = (seed * 31 + seedText.charCodeAt(i)) >>> 0;
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const j = seed % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderQuestions(questions, formId) {
  return `
    <form id="${formId}" class="assessment-form" autocomplete="off" novalidate>
      ${questions.map((question, i) => `
        <fieldset class="question question-card">
          <legend><span class="question-kicker">Question ${i + 1}</span><span class="question-prompt">${esc(question.prompt)}</span></legend>
          <div class="choices answer-grid">
            ${question.choices.map((choice, j) => `
              <label class="choice choice-card">
                <input class="choice-input" type="radio" name="q${i}" value="${j}">
                <span class="choice-letter">${String.fromCharCode(65 + j)}</span>
                <span class="choice-copy"><strong>${String.fromCharCode(65 + j)}.</strong> <span>${esc(choice)}</span></span>
              </label>
            `).join("")}
          </div>
        </fieldset>
      `).join("")}
    </form>
  `;
}

function score(questions, form) {
  let correct = 0;
  const missed = [];
  questions.forEach((question, index) => {
    const picked = Number(form.querySelector(`input[name="q${index}"]:checked`)?.value ?? -1);
    if (picked === question.answer) correct += 1;
    else missed.push({ index, question, picked });
  });
  return { correct, total: questions.length, missed, percent: Math.round((correct / questions.length) * 100) };
}

function feedback(result, pass) {
  const details = result.missed.slice(0, 8).map(item => `
    <div class="review-item">
      <strong>Question ${item.index + 1}</strong>
      <p>${esc(item.question.reason)}</p>
    </div>
  `).join("");
  return `
    <div class="notice ${result.percent >= pass ? "good" : "bad"}">
      <strong>${result.percent >= pass ? "Passed" : "Not passed"}:</strong> ${result.correct}/${result.total} (${result.percent}%). Passing score is ${pass}%.
    </div>
    ${details}
  `;
}

function renderQuiz() {
  const lesson = activeLesson();
  if (!state.currentQuiz || state.currentQuiz.lessonId !== lesson.id) {
    const seed = Date.now() % 100000;
    state.currentQuiz = { lessonId: lesson.id, questions: Array.from({ length: 5 }, (_, i) => makeQuestion(lesson, i, seed)) };
    saveState();
  }
  $("#quizView").innerHTML = `
    <article class="card">
      <p class="eyebrow">Lesson Quiz</p>
      <h2>${esc(lesson.title)}</h2>
      <p>Answer five A/B/C/D questions. Passing score is ${BUSINESS_LEVELS[state.level].pass}%.</p>
      ${renderQuestions(state.currentQuiz.questions, "quizForm")}
      <div class="actions"><button class="primary" type="button" id="submitQuiz">Submit Quiz</button><button class="secondary" type="button" id="newQuiz">Generate New Quiz</button></div>
      <div id="quizFeedback"></div>
    </article>
  `;
}

function renderFinal() {
  if (!state.currentFinal || state.currentFinal.level !== state.level) {
    const seed = Date.now() % 100000;
    const pool = lessons();
    state.currentFinal = {
      level: state.level,
      questions: Array.from({ length: 40 }, (_, i) => makeQuestion(pool[i % pool.length], i, seed))
    };
    saveState();
  }
  const passed = state.finals[state.level]?.passed;
  $("#finalView").innerHTML = `
    <article class="card">
      <p class="eyebrow">40-question mastery test</p>
      <h2>${esc(state.level)} Final Test</h2>
      <p>${passed ? "This level is already passed. Retake for review if needed." : `Passing score is ${BUSINESS_LEVELS[state.level].pass}%. Missed answers show correction guidance.`}</p>
      ${renderQuestions(state.currentFinal.questions, "finalForm")}
      <div class="actions"><button class="primary" type="button" id="submitFinal">Submit Final</button><button class="secondary" type="button" id="newFinal">Generate New Final</button></div>
      <div id="finalFeedback"></div>
    </article>
  `;
}

function renderSources() {
  $("#sourcesView").innerHTML = `
    <article class="card">
      <p class="eyebrow">Approved sources</p>
      <h2>Source Library</h2>
      <p>These links are for legal reference and alignment. Lessons, questions, homework prompts, and answer explanations in this module are original.</p>
      <div class="resource-list">
        ${BUSINESS_SOURCES.map(source => `<a class="resource-link" href="${source.url}" target="_blank" rel="noopener"><strong>${esc(source.name)}</strong><span>Open</span></a>`).join("")}
      </div>
    </article>
  `;
}

function renderAll() {
  if (!BUSINESS_LESSONS[state.level]) state.level = "Basic";
  if (!lessons().some(lesson => lesson.id === state.lessonId)) state.lessonId = lessons()[0].id;
  renderLevelButtons();
  renderLessonList();
  renderProgress();
  renderLesson();
  renderHomework();
  renderSources();
  setView(state.view || "lesson");
}

document.addEventListener("click", event => {
  const level = event.target.closest("[data-level]");
  if (level) return setLevel(level.dataset.level);

  const lesson = event.target.closest("[data-lesson]");
  if (lesson) {
    state.lessonId = lesson.dataset.lesson;
    state.currentQuiz = null;
    saveState();
    renderAll();
    return;
  }

  const tab = event.target.closest("[data-view]");
  if (tab) return setView(tab.dataset.view);

  const jump = event.target.closest("[data-view-jump]");
  if (jump) return setView(jump.dataset.viewJump);

  const complete = event.target.closest("[data-complete]");
  if (complete) {
    state.completed = Array.from(new Set([...state.completed, complete.dataset.complete]));
    saveState();
    renderAll();
    return;
  }

  if (event.target.id === "saveHomework") {
    const lessonId = activeLesson().id;
    state.homework[lessonId] = { response: $("#hw-response").value.trim(), proof: $("#hw-proof").value.trim() };
    saveState();
    renderProgress();
    alert("Homework saved in this browser.");
    return;
  }

  if (event.target.id === "printHomework") return window.print();

  if (event.target.id === "newQuiz") {
    state.currentQuiz = null;
    saveState();
    renderQuiz();
    return;
  }

  if (event.target.id === "submitQuiz") {
    const result = score(state.currentQuiz.questions, $("#quizForm"));
    const pass = BUSINESS_LEVELS[state.level].pass;
    state.quizzes[activeLesson().id] = { ...result, passed: result.percent >= pass, date: new Date().toISOString() };
    if (result.percent >= pass) state.completed = Array.from(new Set([...state.completed, activeLesson().id]));
    saveState();
    $("#quizFeedback").innerHTML = feedback(result, pass);
    renderProgress();
    renderLessonList();
    return;
  }

  if (event.target.id === "newFinal") {
    state.currentFinal = null;
    saveState();
    renderFinal();
    return;
  }

  if (event.target.id === "submitFinal") {
    const result = score(state.currentFinal.questions, $("#finalForm"));
    const pass = BUSINESS_LEVELS[state.level].pass;
    state.finals[state.level] = { ...result, passed: result.percent >= pass, date: new Date().toISOString() };
    saveState();
    $("#finalFeedback").innerHTML = feedback(result, pass);
    renderProgress();
  }
});

document.addEventListener("change", event => {
  if (!event.target.matches(".choice-input")) return;
  const form = event.target.closest("form");
  $$(`input[name="${event.target.name}"]`, form).forEach(input => {
    input.closest(".choice-card")?.classList.toggle("selected", input.checked);
  });
});

document.addEventListener("DOMContentLoaded", renderAll);

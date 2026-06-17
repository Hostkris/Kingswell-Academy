/* Kingswell Academy Premium App Build */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const TESTS_PER_COURSE = [1,2,3];
const REQUIRED_PERCENT = 100;
const STORE_KEY = 'kwa_premium_state_v1';
const defaultState = { level:'Basic', activeCourse:'KWA 101', activeView:'dashboard', notes:[], tests:{}, quests:{}, classwork:{}, worksheets:{}, completed:[], currentTest:null, currentClasswork:null, currentQuest:null };
let state = loadState();
let deferredPrompt = null;

function loadState(){
  try { return {...defaultState, ...JSON.parse(localStorage.getItem(STORE_KEY) || '{}')}; }
  catch { return {...defaultState}; }
}
function saveState(){ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
function escapeHtml(str=''){ return String(str).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch])); }
function slug(str=''){ return String(str).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }
function courseByCode(code){ return KWA_COURSES.find(c => c.code === code) || KWA_COURSES[0]; }
function activeCourse(){ return courseByCode(state.activeCourse); }
function testKey(code=state.activeCourse, level=state.level, n=1){ return `${level}|${code}|${n}`; }
function questKey(code=state.activeCourse, level=state.level){ return `${level}|${code}`; }
function worksheetKey(code=state.activeCourse, level=state.level){ return `${level}|${code}`; }
function seedHash(str){ let h=2166136261; for(let i=0;i<str.length;i++){ h^=str.charCodeAt(i); h=Math.imul(h,16777619); } return h>>>0; }
function rng(seed){ let a=seed>>>0; return function(){ a += 0x6D2B79F5; let t=a; t=Math.imul(t ^ t>>>15, t | 1); t^=t + Math.imul(t ^ t>>>7, t | 61); return ((t ^ t>>>14) >>> 0) / 4294967296; }; }
function shuffle(arr, random){ const a=[...arr]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function levelInfo(){ return KWA_LEVELS[state.level] || KWA_LEVELS.Basic; }
function videoWatchUrl(course){ return course.videoUrl || `https://www.youtube.com/playlist?list=${encodeURIComponent(course.playlistId)}`; }
function renderVideoCard(course){
  if (window.KWAYoutubeClassrooms?.renderCoursePlayer) {
    return window.KWAYoutubeClassrooms.renderCoursePlayer(course);
  }
  const url = videoWatchUrl(course);
  const title = escapeHtml(course.videoTitle);
  return `<a class="video-box faux-player" href="${url}" target="_blank" rel="noopener" aria-label="Open ${title} on YouTube">
    <div class="video-glow"></div>
    <div class="video-topline"><span>Kingswell Video Classroom</span><span>YouTube</span></div>
    <div class="play-button" aria-hidden="true"><span>▶</span></div>
    <div class="video-caption"><strong>${title}</strong><small>Click to open the assigned playlist directly on YouTube.</small></div>
    <div class="video-controls" aria-hidden="true"><i></i><b></b><em></em><strong></strong></div>
  </a>`;
}

function showView(id){
  state.activeView = id; saveState();
  $$('.view').forEach(v => v.classList.toggle('active-view', v.id === id));
  $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.view === id));
  window.scrollTo({top:0, behavior:'smooth'});
}
function setLevel(level){ state.level = level; saveState(); renderAll(); }
function selectCourse(code, jump=true){ state.activeCourse = code; saveState(); renderAll(); if(jump) showView('classroom'); }

function renderLevelPills(){
  $('#globalLevelPills').innerHTML = Object.keys(KWA_LEVELS).map(level => `<button class="pill-btn ${state.level===level?'active':''}" type="button" data-level="${level}">${level}</button>`).join('');
}
function renderDashboard(){
  const course = activeCourse();
  const passedTests = Object.keys(state.tests || {}).filter(k => k.startsWith(`${state.level}|`) && state.tests[k]?.passed).length;
  const totalTests = KWA_COURSES.length * 3;
  const doneQuests = Object.values(state.quests || {}).reduce((acc, arr) => acc + (Array.isArray(arr) ? arr.length : 0), 0);
  const progress = Math.round(((passedTests / totalTests) * 70) + ((doneQuests / (KWA_COURSES.length*15)) * 30));
  $('#dashboardStats').innerHTML = `
    <div class="stat"><strong>${state.level}</strong><span>Current placement</span></div>
    <div class="stat"><strong>${course.code}</strong><span>Active course</span></div>
    <div class="stat"><strong>${passedTests}/${totalTests}</strong><span>Tests passed</span></div>
    <div class="stat"><strong>${progress}%</strong><span>Program progress</span></div>`;
  $('#todayCard').innerHTML = `
    <p class="eyebrow">Today's classroom</p><h2>${course.icon} ${course.title}</h2><p><strong>${state.level} focus:</strong> ${levelInfo().tagline}</p><p>${course.theme}</p>
    <div class="progress" aria-label="Progress"><span style="width:${progress}%"></span></div>
    <div class="hero-actions"><button class="primary" data-jump="classroom" type="button">Continue Course</button><button class="secondary" data-jump="homework" type="button">Open Homework</button></div>`;
}
function renderCalendar(){
  $('#monthGrid').innerHTML = KWA_COURSES.map(c => `<article class="card month-card sem${c.semester}"><span class="course-code">Month ${c.month} • ${c.code}</span><h3>${c.title}</h3><p>${c.theme}</p><div class="tags"><span class="tag">${state.level}</span><span class="tag">3 tests</span><span class="tag">15 quests</span></div><button class="secondary" type="button" data-course="${c.code}">Open Classroom</button></article>`).join('');
}
function renderCampus(){
  $('#campusGrid').innerHTML = KWA_COURSES.map(c => {
    const qDone = (state.quests[questKey(c.code)] || []).length;
    const tPassed = TESTS_PER_COURSE.filter(n => state.tests[testKey(c.code,state.level,n)]?.passed).length;
    return `<article class="card campus-card" data-course="${c.code}" tabindex="0"><div class="room-line"><div><p class="course-code">${c.room} • Month ${c.month}</p><h2>${c.title}</h2></div><div class="icon-badge">${c.icon}</div></div><p>${c.theme}</p><p><strong>${state.level} placement:</strong> ${levelInfo().tagline}</p><div class="tags"><span class="tag">Quests ${qDone}/15</span><span class="tag">Tests ${tPassed}/3</span><span class="tag">Homework baked in</span></div><button class="primary" type="button" data-course="${c.code}">Enter Room</button></article>`;
  }).join('');
}
function renderPickers(){
  const opts = KWA_COURSES.map(c => `<option value="${c.code}" ${c.code===state.activeCourse?'selected':''}>${c.code} — ${c.title}</option>`).join('');
  $('#coursePicker').innerHTML = opts;
  $('#testCoursePicker').innerHTML = opts;
}
function sourceLinks(course){
  const sources = [...(course.sources || [])];
  const channel = window.KWAYoutubeClassrooms?.inferChannel?.(course);
  if (channel && !sources.some(s => s.url === channel.url)) {
    sources.push({ label: `${channel.name} YouTube channel`, url: channel.url, type: "YouTube channel" });
  }
  return sources.map(s => `<a class="resource-link" href="${s.url}" target="_blank" rel="noopener"><span><small>${escapeHtml(s.type || 'Approved source')}</small><b>${escapeHtml(s.label)}</b></span><span class="open-badge">Open</span></a>`).join('');
}

function htmlList(items, tag='ul'){
  const safe = (items || []).map(item => `<li>${escapeHtml(item)}</li>`).join('');
  return `<${tag}>${safe}</${tag}>`;
}
function getLesson(c){
  if(c.lesson) return c.lesson;
  return {
    bigIdea:`${c.title} develops ${c.theme.toLowerCase()} through explanation, practice, correction, and portfolio proof.`,
    writtenLesson:[`Study the core topics, define the vocabulary, complete a guided example, correct one mistake, and explain the result in your own words.`],
    workedExamples:[{title:'Guided example',steps:[`Choose one topic from ${c.title}.`,`Define it, apply it, correct it, and save proof.`],teacherNote:'Mastery means explaining the reason, not just naming the answer.'}],
    practiceDrills:[{prompt:`Explain ${c.topics?.[0] || c.title}.`,answer:'A strong answer gives a definition, an example, and a correction.',explanation:'This checks understanding, application, and proof.'}],
    answerExplanations:['The strongest answer connects concept, example, correction, and proof.'],
    rubric:[{category:'Understanding',mastery:'Clear explanation with an example.',developing:'Names the idea without explaining it.'}],
    project:{title:`${c.title} proof project`,directions:['Create an example.','Correct one mistake.','Submit portfolio proof.'],deliverable:'Completed project proof.'},
    teacherFeedback:['Add an example, explain the correction, and save proof.']
  };
}
function renderWorkedExamples(examples=[]){
  return examples.map(ex => `<article class="lesson-card"><h3>${escapeHtml(ex.title)}</h3>${htmlList(ex.steps || [])}<p class="teacher-note"><strong>Teacher note:</strong> ${escapeHtml(ex.teacherNote || '')}</p></article>`).join('');
}
function renderPracticeDrills(drills=[]){
  return drills.map((d,i) => `<details class="drill-card"><summary>Practice Drill ${i+1}: ${escapeHtml(d.prompt)}</summary><p><strong>Answer guide:</strong> ${escapeHtml(d.answer || '')}</p><p class="small"><strong>Why:</strong> ${escapeHtml(d.explanation || '')}</p></details>`).join('');
}
function renderRubric(rubric=[]){
  return `<div class="rubric-grid">${rubric.map(r => `<article class="rubric-card"><h3>${escapeHtml(r.category)}</h3><p><strong>Mastery:</strong> ${escapeHtml(r.mastery)}</p><p class="small"><strong>Still developing:</strong> ${escapeHtml(r.developing)}</p></article>`).join('')}</div>`;
}

function renderClassroom(){
  const c = activeCourse();
  const ws = state.worksheets[worksheetKey()] || {};
  const classwork = state.classwork[worksheetKey()] || {};
  const tPassed = TESTS_PER_COURSE.filter(n => state.tests[testKey(c.code,state.level,n)]?.passed).length;
  const qDone = (state.quests[questKey(c.code)] || []).length;
  $('#classroomPanel').innerHTML = `<div class="classroom-wrap"><article class="card"><p class="course-code">${c.room} • ${c.code} • ${state.level}</p><h2>${c.icon} ${c.title}</h2><p>${c.theme}</p>${renderVideoCard(c)}<p class="small"><strong>Video classroom:</strong> ${escapeHtml(c.videoTitle)} opens directly on YouTube through a polished player-style classroom card. This avoids embedded player configuration errors while keeping playlist and channel access clear.</p><div class="mini-actions"><button class="primary" type="button" id="startClasswork">Start Video Classwork</button><a class="secondary link-button" href="${videoWatchUrl(c)}" target="_blank" rel="noopener">Open Video Playlist</a><a class="secondary link-button" href="${c.homework[state.level]}" target="_blank" rel="noopener">Open Printable Homework</a></div></article><article class="card"><h2>Course Control Panel</h2><div class="stats"><div class="stat"><strong>${qDone}/15</strong><span>Quest checks</span></div><div class="stat"><strong>${tPassed}/3</strong><span>Mastery tests</span></div></div><p><strong>${state.level} standard:</strong> ${levelInfo().tagline}</p><div class="resource-list">${sourceLinks(c)}</div></article></div>
  <div class="tabs-mini" role="tablist" aria-label="Classroom panels"><button class="mini-tab active" data-panel="notes" type="button">Lesson Notes</button><button class="mini-tab" data-panel="classwork" type="button">Video Classwork</button><button class="mini-tab" data-panel="worksheet" type="button">Online Homework</button><button class="mini-tab" data-panel="quests" type="button">Quest Deck</button><button class="mini-tab" data-panel="testsMini" type="button">Tests</button></div>
  <section id="panel-notes" class="panel active card">${renderLessonNotes(c)}</section>
  <section id="panel-classwork" class="panel card"><div id="classworkPanel">${renderClassworkIntro(classwork)}</div></section>
  <section id="panel-worksheet" class="panel card">${renderWorksheet(c, ws)}</section>
  <section id="panel-quests" class="panel card">${renderQuestDeck(c)}</section>
  <section id="panel-testsMini" class="panel card">${renderMiniTests(c)}</section>`;
}
function renderLessonNotes(c){
  const lesson = getLesson(c);
  return `<div class="lesson-shell">
    <p class="eyebrow">Full written lesson</p>
    <h2>Lesson Notes</h2>
    <p><strong>Objective:</strong> Learn ${escapeHtml(c.theme.toLowerCase())} at the ${state.level} level.</p>
    <div class="notice"><strong>Big idea:</strong> ${escapeHtml(lesson.bigIdea)}</div>
    <div class="lesson-section"><h3>Written Lesson</h3>${(lesson.writtenLesson || []).map(p => `<p>${escapeHtml(p)}</p>`).join('')}</div>
    <div class="grid two"><div><h3>Core topics</h3><div class="tags">${c.topics.map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join('')}</div></div><div><h3>Vocabulary</h3><div class="tags">${c.vocab.map(v=>`<span class="tag">${escapeHtml(v)}</span>`).join('')}</div></div></div>
    <div class="lesson-section"><h3>Worked Examples</h3><div class="lesson-card-grid">${renderWorkedExamples(lesson.workedExamples)}</div></div>
    <div class="lesson-section"><h3>Practice Drills + Answer Guides</h3>${renderPracticeDrills(lesson.practiceDrills)}</div>
    <div class="lesson-section"><h3>Answer Explanation Rules</h3>${htmlList(lesson.answerExplanations || [])}</div>
    <div class="lesson-section"><h3>Mastery Rubric</h3>${renderRubric(lesson.rubric)}</div>
    <div class="lesson-section"><h3>Project</h3><article class="lesson-card"><h3>${escapeHtml(lesson.project?.title || `${c.title} project`)}</h3>${htmlList(lesson.project?.directions || [])}<p><strong>Deliverable:</strong> ${escapeHtml(lesson.project?.deliverable || 'Submit portfolio proof.')}</p></article></div>
    <div class="lesson-section"><h3>Teacher-Style Feedback Bank</h3>${htmlList(lesson.teacherFeedback || [])}</div>
    <div class="notice"><strong>Class rule:</strong> do not just watch the video. Pause, write notes, answer the A/B/C/D classwork, complete homework, and save proof.</div>
  </div>`;
}
function renderClassworkIntro(record){
  if(record.passed) return `<div class="notice good"><strong>Video classwork passed.</strong> Score: ${record.score}/${record.total}. You can retake for review.</div><button class="secondary" type="button" id="startClasswork">Generate New Classwork</button>`;
  return `<h2>Video Classwork</h2><p>Answer 10 A/B/C/D questions while watching the assigned YouTube classroom playlist in a new YouTube tab. This is the quick classroom check before homework.</p><button class="primary" type="button" id="startClasswork">Generate Classwork</button>`;
}
function renderWorksheet(c, ws){
  const fields = [
    ['core','1. Core concept / main idea'], ['example','2. My example or worked problem'], ['mistake','3. What I got wrong and how I corrected it'], ['proof','4. Portfolio proof summary']
  ];
  return `<h2>Online + Offline Homework</h2><p>This form saves in the browser. Use the printable file for offline work, or export this worksheet as an HTML file.</p><div class="worksheet-grid">${fields.map(([key,label])=>`<div><label for="ws-${key}">${label}</label><textarea id="ws-${key}" data-ws="${key}">${escapeHtml(ws[key]||'')}</textarea></div>`).join('')}</div><div class="mini-actions"><button class="primary" type="button" id="saveWorksheet">Save Online Homework</button><button class="secondary" type="button" id="downloadWorksheet">Download Filled Worksheet</button><a class="secondary link-button" href="${c.homework[state.level]}" target="_blank" rel="noopener">Open Printable Homework</a><button class="secondary" type="button" id="printWorksheet">Print</button></div>`;
}
function renderQuestDeck(c){
  const done = state.quests[questKey(c.code)] || [];
  return `<h2>15-Level Quest Deck</h2><p>Each quest has a 5-question A/B/C/D check. Miss one, and it regenerates.</p><div class="quest-grid">${KWA_QUESTS.map((q,i)=>{ const id=i+1; const locked = id>1 && !done.includes(id-1); const isDone=done.includes(id); return `<button class="quest-btn ${locked?'locked':''} ${isDone?'done':''}" type="button" data-quest="${id}" ${locked?'disabled':''}>${String(id).padStart(2,'0')}<br>${escapeHtml(q)}</button>`; }).join('')}</div><div id="questPanel"></div>`;
}
function renderMiniTests(c){
  return `<h2>Mastery Tests</h2><p>Completion unlocks only after all three 40-question mastery tests are passed for this course and level.</p><div class="mini-actions">${TESTS_PER_COURSE.map(n => `<button class="${state.tests[testKey(c.code,state.level,n)]?.passed?'secondary':'primary'}" type="button" data-start-test="${n}">Test ${n} ${state.tests[testKey(c.code,state.level,n)]?.passed?'✓':''}</button>`).join('')}</div>`;
}
function renderHomeworkLibrary(){
  $('#homeworkGrid').innerHTML = KWA_COURSES.map(c => `<article class="card"><p class="course-code">${c.code}</p><h3>${c.icon} ${c.title}</h3><p>${c.theme}</p><div class="resource-list">${Object.keys(KWA_LEVELS).map(l => `<a class="resource-link" href="${c.homework[l]}" target="_blank" rel="noopener"><span><small>${l} printable homework</small><b>${c.title}</b></span><span class="open-badge">Open</span></a>`).join('')}</div></article>`).join('');
}
function renderSources(){
  $('#sourceGrid').innerHTML = KWA_SOURCE_LIBRARY.map(s => `<article class="card"><p class="course-code">${escapeHtml(s.type)}</p><h3>${escapeHtml(s.name)}</h3><a class="secondary link-button" href="${s.url}" target="_blank" rel="noopener">Open Source</a></article>`).join('');
}
function renderPortfolio(){
  const list = state.notes.length ? state.notes.slice().reverse().map(n => `<div class="note-item"><p class="small">${escapeHtml(n.date)} • ${escapeHtml(n.level)} • ${escapeHtml(n.course)}</p><p>${escapeHtml(n.text).replace(/\n/g,'<br>')}</p></div>`).join('') : '<p class="muted">No proof saved yet.</p>';
  $('#portfolioList').innerHTML = `<div class="notes-list">${list}</div>`;
}

function makeQuestion(course, kind, idx, seed, level=state.level){
  const random = rng(seedHash(`${course.code}|${kind}|${idx}|${seed}|${level}`));
  const topic = course.topics[Math.floor(random()*course.topics.length)];
  const vocab = course.vocab[Math.floor(random()*course.vocab.length)];
  const verb = KWA_LEVELS[level].verbs[Math.floor(random()*KWA_LEVELS[level].verbs.length)];
  const lesson = getLesson(course);
  const drills = lesson.practiceDrills || [];
  const drill = drills.length ? drills[Math.floor(random()*drills.length)] : null;
  const explanation = (lesson.answerExplanations || [])[Math.floor(random()*((lesson.answerExplanations || []).length || 1))] || `Review ${topic} and connect it to an example, correction, and proof.`;
  const projectTitle = lesson.project?.title || `${course.title} project`;
  const templates = [
    { prompt:`Which answer best shows ${level} understanding of ${topic}?`, correct:`${verb} ${topic} clearly, use one course example, and explain the reason.`, wrong:[`Repeat a vague opinion about ${topic} without evidence.`,`Skip the example and only say the topic is important.`,`Choose a random definition of ${vocab} without connecting it to the task.`], reason:explanation },
    { prompt:`A student is working on ${course.title}. What is the strongest next step for ${topic}?`, correct:`Use the lesson note, complete a practice example, correct one weak spot, then save portfolio proof.`, wrong:[`Watch the video without taking notes or answering classwork.`,`Guess until one option looks familiar.`,`Ignore the vocabulary because the worksheet will somehow explain itself.`], reason:`The strongest workflow is lesson → example → correction → proof.` },
    { prompt:`Which choice is the best definition-in-use for ${vocab}?`, correct:`${vocab} is used as a course tool for understanding ${topic} and explaining it in plain language.`, wrong:[`${vocab} is only a decoration in the notes.`,`${vocab} means the same thing in every subject with no context.`,`${vocab} should be memorized without practice.`], reason:`Vocabulary counts only when the student can use it inside a real course task.` },
    { prompt:`What should be included in portfolio proof for ${topic}?`, correct:`A short explanation, one worked example, one correction, and the next action.`, wrong:[`Only a screenshot with no explanation.`,`A sentence saying “I watched it.”`,`A copied answer with no thinking shown.`], reason:`Portfolio proof must show thinking, not just completion.` },
    { prompt: drill ? `Practice drill from the lesson: ${drill.prompt}` : `Which action best prepares the student for ${projectTitle}?`, correct: drill ? drill.answer : `Use course vocabulary, create an example, revise it, and submit proof.`, wrong:[`Copy a source answer without explaining it.`,`Skip correction because the first attempt is enough.`,`Submit only a link with no summary or reflection.`], reason: drill ? drill.explanation : `The project requires application, revision, and proof.` }
  ];
  const t = templates[Math.floor(random()*templates.length)];
  const choices = shuffle([t.correct, ...t.wrong], random);
  const answer = choices.indexOf(t.correct);
  return { id:`${kind}-${idx}`, prompt:t.prompt, choices, answer, reason:t.reason || explanation };
}
function renderQuestions(questions, formId) {
  const feedbackId =
    formId === "classworkForm" ? "classworkFeedback" :
    formId === "questForm" ? "questFeedback" :
    formId === "testForm" ? "testFeedback" :
    `${formId}Feedback`;

  return `
    <form id="${escapeHtml(formId)}" class="assessment-form kwa-assessment-form" autocomplete="off" novalidate>
      ${questions.map((q, i) => {
        const choices = Array.isArray(q.choices) ? q.choices : [];

        return `
          <fieldset class="question question-card kwa-question-card">
            <legend>
              <span class="question-kicker">Question ${i + 1}</span>
              <span class="question-prompt">${escapeHtml(q.prompt)}</span>
            </legend>

            <div class="choices answer-grid kwa-answer-grid" role="radiogroup" aria-label="Question ${i + 1} choices">
              ${choices.map((choice, j) => {
                const letter = String.fromCharCode(65 + j);
                const inputId = `${formId}-q${i}-choice${j}`;

                return `
                  <label class="choice choice-card kwa-choice-card" for="${escapeHtml(inputId)}">
                    <input
                      class="choice-input kwa-choice-input"
                      id="${escapeHtml(inputId)}"
                      type="radio"
                      name="q${i}"
                      value="${j}"
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
          </fieldset>
        `;
      }).join("")}
    </form>

    <div id="${feedbackId}" class="feedback-zone" aria-live="polite"></div>
  `;
}
function scoreQuestions(questions, form){
  let correct=0; const wrong=[];
  questions.forEach((q,i) => { const val = form.querySelector(`input[name="q${i}"]:checked`)?.value; const picked = val==null ? -1 : Number(val); if(picked===q.answer) correct++; else wrong.push({i, q, picked}); });
  return {correct, total:questions.length, wrong};
}
function feedbackHtml(result){
  if(result.wrong.length === 0) return `<div class="notice good"><strong>Perfect.</strong> ${result.correct}/${result.total}. That is mastery.</div>`;
  return `<div class="notice bad"><strong>Not passed.</strong> Score: ${result.correct}/${result.total}. Missed ${result.wrong.length}. A new retake will scramble questions and choices.</div><div class="wrong-list">${result.wrong.slice(0,20).map(w => {
    const pickedText = w.picked>=0 && w.q.choices?.[w.picked] ? `${String.fromCharCode(65+w.picked)}. ${w.q.choices[w.picked]}` : 'Blank';
    return `<div class="question question-review"><strong>Question ${w.i+1}</strong><p>${escapeHtml(w.q.prompt)}</p><p><strong>Correction overview:</strong> ${escapeHtml(w.q.reason)}</p><p class="small"><strong>Your picked choice:</strong> ${escapeHtml(pickedText)}</p></div>`;
  }).join('')}${result.wrong.length>20?`<p class="small">Showing first 20 missed questions. Retake generated from the full test.</p>`:''}</div>`;
}

function startClasswork(){
  const c = activeCourse();
  const seed = Date.now();
  const questions = Array.from({length:10}, (_,i) => makeQuestion(c,'classwork',i,seed));
  state.currentClasswork = {course:c.code, level:state.level, seed, questions}; saveState();
  $('#classworkPanel').innerHTML = `<h2>Video Classwork</h2><p>Answer while watching. Passing score: 8/10.</p>${renderQuestions(questions,'classworkForm')}<button class="primary" id="submitClasswork" type="button">Submit Classwork</button><div id="classworkFeedback"></div>`;
}
function submitClasswork(){
  const form = $('#classworkForm'); if(!form || !state.currentClasswork) return;
  const result = scoreQuestions(state.currentClasswork.questions, form);
  const passed = result.correct >= 8;
  state.classwork[worksheetKey(state.currentClasswork.course,state.currentClasswork.level)] = {passed, score:result.correct, total:result.total, date:new Date().toLocaleString()};
  saveState();
  $('#classworkFeedback').innerHTML = feedbackHtml(result) + `<div class="mini-actions"><button class="secondary" type="button" id="startClasswork">${passed?'Generate New Review':'Generate Retake'}</button></div>`;
}
function worksheetKey(course=state.activeCourse, level=state.level){ return `${level}|${course}`; }
function saveWorksheet(){
  const data = {}; $$('[data-ws]').forEach(el => data[el.dataset.ws] = el.value.trim());
  state.worksheets[worksheetKey()] = data; saveState();
  alert('Homework saved inside this browser.');
}
function downloadWorksheet(){
  const c=activeCourse(); const ws=state.worksheets[worksheetKey()] || {}; const fields=['core','example','mistake','proof'];
  const htmlDoc = `<!doctype html><html><head><meta charset="utf-8"><title>${state.level} ${c.code} Filled Worksheet</title><style>body{font-family:Georgia,serif;padding:32px;line-height:1.5}h1{color:#13223a}.box{border:1px solid #ccc;padding:16px;margin:14px 0;min-height:80px}</style></head><body><h1>${state.level} ${c.code}: ${escapeHtml(c.title)}</h1>${fields.map(f=>`<div class="box"><h3>${f}</h3><p>${escapeHtml(ws[f]||'').replace(/\n/g,'<br>')}</p></div>`).join('')}</body></html>`;
  const blob = new Blob([htmlDoc], {type:'text/html'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`${slug(state.level)}-${slug(c.code)}-filled-worksheet.html`; a.click(); URL.revokeObjectURL(a.href);
}

function startQuest(id){
  const c=activeCourse(); const done = state.quests[questKey(c.code)] || [];
  if(id>1 && !done.includes(id-1)) return;
  const seed = Date.now(); const questions=Array.from({length:5},(_,i)=>makeQuestion(c,`quest-${id}`,i,seed));
  state.currentQuest = {course:c.code, level:state.level, id, seed, questions}; saveState();
  $('#questPanel').innerHTML = `<div class="card"><h3>Quest ${id}: ${escapeHtml(KWA_QUESTS[id-1])}</h3>${renderQuestions(questions,'questForm')}<button class="primary" id="submitQuest" type="button">Submit Quest Check</button><div id="questFeedback"></div></div>`;
}
function submitQuest(){
  const form=$('#questForm'); if(!form || !state.currentQuest) return;
  const result=scoreQuestions(state.currentQuest.questions, form); const passed=result.correct===result.total;
  const key=questKey(state.currentQuest.course,state.currentQuest.level);
  if(passed){ state.quests[key] = Array.from(new Set([...(state.quests[key]||[]), state.currentQuest.id])).sort((a,b)=>a-b); }
  saveState();
  $('#questFeedback').innerHTML = feedbackHtml(result) + `<div class="mini-actions"><button class="secondary" type="button" data-quest="${state.currentQuest.id}">${passed?'Review Quest':'Generate New Quest Retake'}</button></div>`;
  if(passed) renderClassroom();
}

function startTest(testNumber=Number($('#testNumberPicker')?.value || 1)){
  const c = courseByCode($('#testCoursePicker')?.value || state.activeCourse);
  state.activeCourse = c.code;
  const seed = Date.now(); const count = levelInfo().testCount;
  const questions = Array.from({length:count}, (_,i) => makeQuestion(c,`test-${testNumber}`,i,seed));
  state.currentTest = {course:c.code, level:state.level, testNumber, seed, questions}; saveState();
  showView('tests'); renderTestPanel();
}
function renderTestPanel(){
  const c = activeCourse();
  if(!state.currentTest || state.currentTest.course !== c.code || state.currentTest.level !== state.level){
    const statuses = TESTS_PER_COURSE.map(n => state.tests[testKey(c.code,state.level,n)]?.passed ? `Test ${n}: Passed` : `Test ${n}: Not passed`).join(' • ');
    $('#testPanel').innerHTML = `<h2>${c.code} Mastery Tests</h2><p><strong>${state.level}:</strong> ${levelInfo().tagline}</p><p>${statuses}</p><p>Each test generates ${levelInfo().testCount} clickable A/B/C/D questions. Pass standard is ${REQUIRED_PERCENT}%, so every missed answer triggers review and a new scrambled retake.</p><div class="mini-actions">${TESTS_PER_COURSE.map(n => `<button class="primary" type="button" data-start-test="${n}">Start Test ${n}</button>`).join('')}</div>`;
    return;
  }
  const t=state.currentTest;
  $('#testPanel').innerHTML = `<div class="test-toolbar"><h2>${t.course} • ${state.level} • Test ${t.testNumber}</h2><p>${t.questions.length} A/B/C/D questions. Answer all, submit, review missed topics, then retake if needed.</p><div class="mini-actions"><button class="primary" type="button" id="submitTest">Submit Test</button><button class="secondary" type="button" data-start-test="${t.testNumber}">Regenerate Test</button></div></div>${renderQuestions(t.questions,'testForm')}<div class="mini-actions"><button class="primary" type="button" id="submitTestBottom">Submit Test</button></div><div id="testFeedback"></div>`;
}
function submitTest(){
  const form=$('#testForm'); if(!form || !state.currentTest) return;
  const result=scoreQuestions(state.currentTest.questions, form); const percent=Math.round(result.correct/result.total*100); const passed=percent>=REQUIRED_PERCENT;
  const k=testKey(state.currentTest.course,state.currentTest.level,state.currentTest.testNumber);
  state.tests[k] = {passed, score:result.correct, total:result.total, percent, date:new Date().toLocaleString()};
  if(passed){ state.completed = Array.from(new Set([...(state.completed||[]), `${state.currentTest.level}|${state.currentTest.course}|test${state.currentTest.testNumber}`])); }
  saveState();
  $('#testFeedback').innerHTML = feedbackHtml(result) + `<div class="mini-actions"><button class="secondary" type="button" data-start-test="${state.currentTest.testNumber}">${passed?'Generate Review Test':'Generate Scrambled Retake'}</button><button class="secondary" type="button" data-jump="classroom">Back to Classroom</button></div>`;
  renderDashboard(); renderClassroom();
}

function askTutor(){
  const q = ($('#tutorQuestion').value || '').toLowerCase().trim();
  if(!q){ $('#tutorAnswer').innerHTML = '<h3>Tutor answer</h3><p>Type a course, vocabulary word, or homework problem first.</p>'; return; }
  const bag = KWA_COURSES.map(c => ({c, score: [c.code,c.title,c.theme,...c.topics,...c.vocab, c.lesson?.bigIdea || ''].join(' ').toLowerCase().split(/\s+/).filter(w => q.includes(w)).length})).sort((a,b)=>b.score-a.score);
  const hit = bag[0].score > 0 ? bag[0].c : activeCourse();
  const lesson = getLesson(hit);
  const topic = hit.topics.find(t => q.includes(t.split(' ')[0].toLowerCase())) || hit.topics[0];
  const drill = (lesson.practiceDrills || [])[0];
  const feedback = (lesson.teacherFeedback || [])[0] || 'Add an example, explain the correction, and save proof.';
  $('#tutorAnswer').innerHTML = `<h3>${hit.code}: ${escapeHtml(hit.title)}</h3><p><strong>Plain explanation:</strong> ${escapeHtml(lesson.bigIdea)}</p><p><strong>Topic focus:</strong> ${escapeHtml(topic)} should be defined, applied, corrected, and saved as portfolio proof.</p><p><strong>Practice:</strong> ${escapeHtml(drill?.prompt || 'Create one example and explain it in your own words.')}</p><p><strong>Answer guide:</strong> ${escapeHtml(drill?.answer || 'Give a definition, an example, and a correction.')}</p><p><strong>Teacher feedback:</strong> ${escapeHtml(feedback)}</p><div class="mini-actions"><button class="secondary" type="button" data-course="${hit.code}">Open ${hit.code}</button></div>`;
}
function exportPortfolio(){
  const payload = {exported:new Date().toISOString(), level:state.level, notes:state.notes, worksheets:state.worksheets, tests:state.tests, quests:state.quests};
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='kingswell-portfolio-export.json'; a.click(); URL.revokeObjectURL(a.href);
}

function bindEvents(){
  document.addEventListener('change', e => {
    if(e.target.matches('.choice-input')){
      const form = e.target.closest('form');
      const groupName = e.target.name;
      $$(`input[name="${groupName}"]`, form).forEach(input => input.closest('.choice-card')?.classList.toggle('selected', input.checked));
    }
  });
  document.addEventListener('click', e => {
    const tab=e.target.closest('.tab'); if(tab){ showView(tab.dataset.view); return; }
    const jump=e.target.closest('[data-jump]'); if(jump){ showView(jump.dataset.jump); return; }
    const level=e.target.closest('[data-level]'); if(level){ setLevel(level.dataset.level); return; }
    const course=e.target.closest('[data-course]'); if(course){ selectCourse(course.dataset.course); return; }
    const mini=e.target.closest('.mini-tab'); if(mini){ $$('.mini-tab').forEach(b=>b.classList.toggle('active', b===mini)); $$('.panel').forEach(p=>p.classList.toggle('active', p.id===`panel-${mini.dataset.panel}`)); return; }
    if(e.target.id==='startClasswork'){ startClasswork(); return; }
    if(e.target.id==='submitClasswork'){ submitClasswork(); return; }
    if(e.target.id==='saveWorksheet'){ saveWorksheet(); return; }
    if(e.target.id==='downloadWorksheet'){ saveWorksheet(); downloadWorksheet(); return; }
    if(e.target.id==='printWorksheet'){ window.print(); return; }
    const quest=e.target.closest('[data-quest]'); if(quest){ startQuest(Number(quest.dataset.quest)); return; }
    if(e.target.id==='submitQuest'){ submitQuest(); return; }
    const start=e.target.closest('[data-start-test]'); if(start){ startTest(Number(start.dataset.startTest)); return; }
    if(e.target.id==='submitTest' || e.target.id==='submitTestBottom'){ submitTest(); return; }
  });
  $('#coursePicker').addEventListener('change', e => selectCourse(e.target.value, false));
  $('#testCoursePicker').addEventListener('change', e => { state.activeCourse=e.target.value; state.currentTest=null; saveState(); renderAll(); });
  $('#testNumberPicker').addEventListener('change', () => { state.currentTest=null; saveState(); renderTestPanel(); });
  $('#askTutor').addEventListener('click', askTutor);
  $('#clearTutor').addEventListener('click', () => { $('#tutorQuestion').value=''; $('#tutorAnswer').innerHTML='<h3>Tutor answer</h3><p>Ask about a course, vocabulary word, homework task, or test topic.</p>'; });
  $('#savePortfolio').addEventListener('click', () => { const txt=$('#portfolioNote').value.trim(); if(!txt) return; state.notes.push({date:new Date().toLocaleString(), level:state.level, course:state.activeCourse, text:txt}); $('#portfolioNote').value=''; saveState(); renderPortfolio(); renderDashboard(); });
  $('#exportPortfolio').addEventListener('click', exportPortfolio);
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredPrompt=e; $('#installButton').classList.remove('hidden'); });
  $('#installButton').addEventListener('click', async () => { if(!deferredPrompt) return; deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt=null; $('#installButton').classList.add('hidden'); });
}
function renderAll(){
  renderLevelPills(); renderDashboard(); renderCalendar(); renderCampus(); renderPickers(); renderClassroom(); renderHomeworkLibrary(); renderSources(); renderPortfolio(); renderTestPanel(); showView(state.activeView || 'dashboard');
}

document.addEventListener('DOMContentLoaded', () => { bindEvents(); renderAll(); if('serviceWorker' in navigator){ navigator.serviceWorker.register('service-worker.js').catch(()=>{}); } });

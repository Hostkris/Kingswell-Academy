# Math + Algebra Curriculum System

This is a GitHub Pages-ready curriculum engine for a Math + Algebra course with:

- Basic, Intermediate, and Advanced levels
- 40-question placement test
- Lesson rendering
- Homework grading
- Quiz grading
- Answer explanations
- Teacher-style feedback
- Weak-skill tracking
- Mastered-skill tracking
- Local progress storage using `localStorage`

## File Map

```txt
index.html
styles.css
app.js
/data
  curriculum.js
  questions.js
  homework.js
  sources.js
/engine
  scoring.js
  feedback.js
  progress.js
SOURCES.md
README.md
```

## How to Use

1. Upload the whole folder to your GitHub repository.
2. Open `index.html` through GitHub Pages.
3. Students begin with the placement test.
4. The system places students into Basic, Intermediate, Advanced, or Advanced Honors.
5. Students complete lessons, homework, and quizzes.
6. Scores, weak skills, and mastered skills save locally in the browser.

## How to Add More Questions

Open `data/questions.js` and add a new object to `questionBank`:

```js
{
  id: "q-new-001",
  quizId: "quiz-basic-fractions",
  level: "basic",
  unit: "Fractions",
  lesson: "Common Denominators",
  skill: "fraction-addition",
  difficulty: "medium",
  type: "mcq",
  question: "Add: 1/8 + 3/8",
  choices: ["4/8", "3/16", "1/2", "Both 4/8 and 1/2"],
  answer: "Both 4/8 and 1/2",
  explanation: "1/8 + 3/8 = 4/8, and 4/8 simplifies to 1/2.",
  points: 1,
  sourceAlignment: "OpenStax Prealgebra 2e Ch. 4"
}
```

Then add its ID to the correct quiz blueprint in `testBlueprints`.

## How to Add Homework

Open `data/homework.js` and add problems to the matching homework set.

## Important Legal Note

Use OpenStax as the main remixable source because it is openly licensed with attribution. Use Workman and Alan Graham books as references unless you have permission to reproduce their content publicly.

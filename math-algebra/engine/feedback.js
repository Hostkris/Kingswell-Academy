const skillReviewMap = {
  "place-value": "Review place value: each digit gets its value from its position.",
  "compare-whole-numbers": "Practice comparing numbers from left to right: thousands, hundreds, tens, ones.",
  "whole-number-operations": "Review multiplication and division facts before moving forward.",
  "word-problem-operation-choice": "Slow down and identify what the word problem is asking: combine, compare, repeat groups, or split groups.",
  "fraction-addition": "Review adding fractions with common denominators before mixed denominator problems.",
  "common-denominators": "Practice finding least common denominators. Fractions need matching denominators before adding or subtracting.",
  "percent-of-number": "Review percent-to-decimal conversion: percent divided by 100.",
  "discount-tax-interest": "Review real-world percent problems: discount, tax, tip, and interest.",
  "evaluate-expressions": "Review substitution: replace the variable with the given number, then use order of operations.",
  "translate-expressions": "Review algebra language: more than means add, less than means subtract from the first quantity, twice means multiply by 2.",
  "integer-addition": "Review integer addition rules. Different signs subtract; same signs add.",
  "integer-subtraction": "Review subtracting negatives: subtracting a negative becomes addition.",
  "solve-two-step-equations": "Review inverse operations: undo addition/subtraction first, then multiplication/division.",
  "check-equation-solutions": "Practice checking by substituting the answer back into the original equation.",
  "solve-multistep-equations": "Review equation solving order: distribute, combine like terms, move variables, move constants, divide.",
  "distributive-property": "Practice distributing to every term inside parentheses. Do not leave anybody behind.",
  "identify-slope-intercept": "Review y = mx + b. m is slope, b is y-intercept.",
  "graph-linear-equations": "Review slope-intercept graphing: start at b, then use rise/run from the slope.",
  "combine-like-terms": "Review like terms. Same variable and same exponent can combine.",
  "polynomial-addition": "Line up like terms by degree before adding polynomials.",
  "factor-trinomials": "Practice finding two numbers that multiply to c and add to b.",
  "solve-quadratics-by-factoring": "Review zero-product property: if two factors multiply to zero, at least one factor is zero."
};

export function buildTeacherFeedback(scoreReport) {
  const missed = Object.entries(scoreReport.missedSkills || {}).sort((a, b) => b[1] - a[1]);
  const strongest = Object.entries(scoreReport.masteredSkills || {}).sort((a, b) => b[1] - a[1]);

  let summary = "";
  if (scoreReport.percent >= 90) {
    summary = "Excellent work. The student is showing strong command and should move forward with challenge problems.";
  } else if (scoreReport.percent >= 80) {
    summary = "Good work. The student is ready to continue, but should clean up the missed skills before the next unit test.";
  } else if (scoreReport.percent >= 70) {
    summary = "Developing. The student understands part of the lesson, but needs guided practice before moving ahead.";
  } else if (scoreReport.percent >= 60) {
    summary = "Needs practice. The student should repeat the lesson examples and redo homework before retesting.";
  } else {
    summary = "Restart the lesson. The foundation is not steady yet, and moving ahead will create bigger gaps later.";
  }

  const nextSteps = missed.slice(0, 3).map(([skill]) => skillReviewMap[skill] || `Review ${skill}.`);
  const strengths = strongest.slice(0, 3).map(([skill]) => skill);

  return {
    summary,
    strengths,
    nextSteps,
    teacherNote: nextSteps.length
      ? `${summary} Next focus: ${nextSteps.join(" ")}`
      : `${summary} No major weak skill was detected on this assessment.`
  };
}

export function getRecommendedLesson(scoreReport, curriculum) {
  const missed = Object.keys(scoreReport.missedSkills || {});
  if (!missed.length) return null;

  for (const level of curriculum.levels) {
    for (const unit of level.units) {
      for (const lesson of unit.lessons) {
        if ((lesson.practiceSkills || []).some(skill => missed.includes(skill))) {
          return {
            levelId: level.id,
            unitId: unit.id,
            lessonId: lesson.id,
            title: lesson.title,
            reason: `Recommended because the student missed: ${missed.join(", ")}`
          };
        }
      }
    }
  }

  return null;
}

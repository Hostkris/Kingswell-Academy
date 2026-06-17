export const homeworkSets = {
  "hw-basic-place-value": {
    id: "hw-basic-place-value",
    title: "Homework: Whole Numbers and Place Value",
    instructions: "Answer each problem. Show place-value reasoning when needed.",
    problems: [
      { id: "hbpv-01", skill: "place-value", prompt: "In 8,642, what is the value of the digit 6?", answer: "600", solution: "The 6 is in the hundreds place, so its value is 600." },
      { id: "hbpv-02", skill: "place-value", prompt: "In 3,915, what is the value of the digit 9?", answer: "900", solution: "The 9 is in the hundreds place." },
      { id: "hbpv-03", skill: "compare-whole-numbers", prompt: "Which is greater: 4,809 or 4,890?", answer: "4,890", solution: "Compare hundreds, then tens. 9 tens is greater than 0 tens." },
      { id: "hbpv-04", skill: "rounding", prompt: "Round 7,368 to the nearest hundred.", answer: "7,400", solution: "The tens digit is 6, so round the hundreds digit up." },
      { id: "hbpv-05", skill: "expanded-form", prompt: "Write 5,203 in expanded form.", answer: "5,000 + 200 + 3", solution: "There are 5 thousands, 2 hundreds, 0 tens, and 3 ones." }
    ]
  },
  "hw-basic-operations": {
    id: "hw-basic-operations",
    title: "Homework: Four Operations",
    instructions: "Solve each problem. For word problems, identify the operation.",
    problems: [
      { id: "hbop-01", skill: "addition", prompt: "Add: 486 + 239", answer: "725", solution: "486 + 239 = 725." },
      { id: "hbop-02", skill: "subtraction", prompt: "Subtract: 1,002 - 378", answer: "624", solution: "1,002 - 378 = 624." },
      { id: "hbop-03", skill: "multiplication", prompt: "Multiply: 37 × 6", answer: "222", solution: "30 × 6 = 180 and 7 × 6 = 42; 180 + 42 = 222." },
      { id: "hbop-04", skill: "division", prompt: "Divide: 96 ÷ 8", answer: "12", solution: "8 × 12 = 96." },
      { id: "hbop-05", skill: "word-problem-operation-choice", prompt: "A teacher has 6 boxes with 14 pencils in each box. How many pencils are there?", answer: "84", solution: "Use multiplication: 6 × 14 = 84." }
    ]
  },
  "hw-basic-fractions": {
    id: "hw-basic-fractions",
    title: "Homework: Fractions and Common Denominators",
    instructions: "Simplify answers when possible.",
    problems: [
      { id: "hbfr-01", skill: "fraction-addition", prompt: "Add: 1/6 + 4/6", answer: "5/6", solution: "Same denominator. Add numerators: 1 + 4 = 5." },
      { id: "hbfr-02", skill: "fraction-subtraction", prompt: "Subtract: 7/8 - 3/8", answer: "4/8 or 1/2", solution: "Same denominator. 7 - 3 = 4, so 4/8 = 1/2." },
      { id: "hbfr-03", skill: "common-denominators", prompt: "Find the least common denominator for 1/4 and 1/6.", answer: "12", solution: "The least common multiple of 4 and 6 is 12." },
      { id: "hbfr-04", skill: "fraction-addition", prompt: "Add: 1/3 + 1/6", answer: "1/2", solution: "1/3 = 2/6, so 2/6 + 1/6 = 3/6 = 1/2." },
      { id: "hbfr-05", skill: "equivalent-fractions", prompt: "Write an equivalent fraction for 2/5 with denominator 20.", answer: "8/20", solution: "Multiply numerator and denominator by 4." }
    ]
  },
  "hw-basic-percents": {
    id: "hw-basic-percents",
    title: "Homework: Percents in Real Life",
    instructions: "Convert percent to decimal or fraction first.",
    problems: [
      { id: "hbpc-01", skill: "percent-of-number", prompt: "Find 10% of 90.", answer: "9", solution: "10% is one tenth, so 90 ÷ 10 = 9." },
      { id: "hbpc-02", skill: "percent-of-number", prompt: "Find 20% of 50.", answer: "10", solution: "20% = 0.20. 0.20 × 50 = 10." },
      { id: "hbpc-03", skill: "discount-tax-interest", prompt: "A $30 shirt is 10% off. What is the discount?", answer: "$3", solution: "10% of 30 is 3." },
      { id: "hbpc-04", skill: "discount-tax-interest", prompt: "A $100 item has 7% tax. What is the tax?", answer: "$7", solution: "7% of 100 is 7." },
      { id: "hbpc-05", skill: "percent-decimal-conversion", prompt: "Write 35% as a decimal.", answer: "0.35", solution: "Divide by 100: 35% = 0.35." }
    ]
  },
  "hw-prealg-expressions": {
    id: "hw-prealg-expressions",
    title: "Homework: Expressions and Equations",
    instructions: "Translate or evaluate each expression.",
    problems: [
      { id: "hpex-01", skill: "evaluate-expressions", prompt: "Evaluate 4x + 1 when x = 6.", answer: "25", solution: "4(6) + 1 = 24 + 1 = 25." },
      { id: "hpex-02", skill: "evaluate-expressions", prompt: "Evaluate 10 - 2a when a = 3.", answer: "4", solution: "10 - 2(3) = 10 - 6 = 4." },
      { id: "hpex-03", skill: "translate-expressions", prompt: "Write '7 more than n' as an expression.", answer: "n + 7", solution: "More than means add." },
      { id: "hpex-04", skill: "translate-expressions", prompt: "Write 'five times a number' as an expression.", answer: "5n", solution: "Five times a number means multiply the number by 5." },
      { id: "hpex-05", skill: "expression-vs-equation", prompt: "Is 3x + 4 = 19 an expression or equation?", answer: "equation", solution: "It has an equals sign, so it is an equation." }
    ]
  },
  "hw-prealg-integers": {
    id: "hw-prealg-integers",
    title: "Homework: Integer Operations",
    instructions: "Use integer sign rules.",
    problems: [
      { id: "hpint-01", skill: "integer-addition", prompt: "Simplify: -7 + 2", answer: "-5", solution: "Different signs: subtract 7 - 2 = 5; keep negative sign." },
      { id: "hpint-02", skill: "integer-subtraction", prompt: "Simplify: 6 - (-4)", answer: "10", solution: "Subtracting a negative becomes adding: 6 + 4 = 10." },
      { id: "hpint-03", skill: "integer-multiplication", prompt: "Simplify: -5 × 8", answer: "-40", solution: "Negative times positive is negative." },
      { id: "hpint-04", skill: "integer-division", prompt: "Simplify: -24 ÷ -6", answer: "4", solution: "Negative divided by negative is positive." },
      { id: "hpint-05", skill: "absolute-value", prompt: "Find |-13|.", answer: "13", solution: "Absolute value is distance from zero, so it is positive 13." }
    ]
  },
  "hw-prealg-equations": {
    id: "hw-prealg-equations",
    title: "Homework: One-Step and Two-Step Equations",
    instructions: "Solve and check each equation.",
    problems: [
      { id: "hpeq-01", skill: "solve-one-step-equations", prompt: "Solve: x + 9 = 20", answer: "x = 11", solution: "Subtract 9 from both sides." },
      { id: "hpeq-02", skill: "solve-one-step-equations", prompt: "Solve: x/4 = 7", answer: "x = 28", solution: "Multiply both sides by 4." },
      { id: "hpeq-03", skill: "solve-two-step-equations", prompt: "Solve: 2x + 5 = 17", answer: "x = 6", solution: "Subtract 5: 2x = 12. Divide by 2: x = 6." },
      { id: "hpeq-04", skill: "solve-two-step-equations", prompt: "Solve: 3x - 2 = 13", answer: "x = 5", solution: "Add 2: 3x = 15. Divide by 3: x = 5." },
      { id: "hpeq-05", skill: "check-equation-solutions", prompt: "Check x = 4 in 5x + 1 = 21. Is it true?", answer: "yes", solution: "5(4) + 1 = 20 + 1 = 21." }
    ]
  },
  "hw-alg1-multistep": {
    id: "hw-alg1-multistep",
    title: "Homework: Multi-Step Linear Equations",
    instructions: "Show each inverse operation.",
    problems: [
      { id: "haml-01", skill: "solve-multistep-equations", prompt: "Solve: 5x + 2 = 3x + 18", answer: "x = 8", solution: "Subtract 3x: 2x + 2 = 18. Subtract 2: 2x = 16. Divide by 2: x = 8." },
      { id: "haml-02", skill: "distributive-property", prompt: "Solve: 3(x - 2) = 15", answer: "x = 7", solution: "Distribute: 3x - 6 = 15. Add 6: 3x = 21. Divide by 3: x = 7." },
      { id: "haml-03", skill: "solve-multistep-equations", prompt: "Solve: 4x - 9 = x + 12", answer: "x = 7", solution: "Subtract x: 3x - 9 = 12. Add 9: 3x = 21. Divide by 3: x = 7." },
      { id: "haml-04", skill: "literal-equations", prompt: "Solve P = 2l + 2w for l.", answer: "l = (P - 2w)/2", solution: "Subtract 2w from both sides, then divide by 2." },
      { id: "haml-05", skill: "equation-checking", prompt: "Check x = 3 in 2(x + 4) = 14.", answer: "true", solution: "2(3 + 4) = 2(7) = 14." }
    ]
  },
  "hw-alg1-slope": {
    id: "hw-alg1-slope",
    title: "Homework: Slope and Slope-Intercept Form",
    instructions: "Identify slope and y-intercept or write the equation.",
    problems: [
      { id: "hasl-01", skill: "identify-slope-intercept", prompt: "In y = 5x + 2, identify the slope.", answer: "5", solution: "In y = mx + b, m is slope." },
      { id: "hasl-02", skill: "identify-slope-intercept", prompt: "In y = -2x + 7, identify the y-intercept.", answer: "7", solution: "In y = mx + b, b is y-intercept." },
      { id: "hasl-03", skill: "slope", prompt: "Find the slope between (1, 3) and (4, 9).", answer: "2", solution: "(9 - 3)/(4 - 1) = 6/3 = 2." },
      { id: "hasl-04", skill: "write-linear-equation", prompt: "Write the equation with slope 4 and y-intercept -1.", answer: "y = 4x - 1", solution: "Use y = mx + b." },
      { id: "hasl-05", skill: "interpret-slope", prompt: "If slope = 3, what happens to y when x increases by 1?", answer: "y increases by 3", solution: "Slope is change in y for each 1-unit change in x." }
    ]
  },
  "hw-alg1-polynomials": {
    id: "hw-alg1-polynomials",
    title: "Homework: Polynomial Operations",
    instructions: "Combine like terms and use exponent rules.",
    problems: [
      { id: "hapl-01", skill: "combine-like-terms", prompt: "Simplify: 8x - 3x + 2", answer: "5x + 2", solution: "8x - 3x = 5x." },
      { id: "hapl-02", skill: "polynomial-addition", prompt: "Add: (x² + 2x) + (3x² - x + 4)", answer: "4x² + x + 4", solution: "Combine x² terms and x terms." },
      { id: "hapl-03", skill: "exponent-rules", prompt: "Simplify: a² · a⁵", answer: "a⁷", solution: "Same base: add exponents 2 + 5 = 7." },
      { id: "hapl-04", skill: "monomial-multiplication", prompt: "Multiply: 3x(4x + 2)", answer: "12x² + 6x", solution: "Distribute 3x to each term." },
      { id: "hapl-05", skill: "polynomial-vocabulary", prompt: "How many terms are in 2x² + 3x - 1?", answer: "3", solution: "The terms are 2x², 3x, and -1." }
    ]
  },
  "hw-alg1-quadratics": {
    id: "hw-alg1-quadratics",
    title: "Homework: Solving Quadratics",
    instructions: "Factor, then use the zero-product property.",
    problems: [
      { id: "haqu-01", skill: "factor-trinomials", prompt: "Factor: x² + 5x + 6", answer: "(x + 2)(x + 3)", solution: "2 and 3 multiply to 6 and add to 5." },
      { id: "haqu-02", skill: "factor-trinomials", prompt: "Factor: x² + 7x + 10", answer: "(x + 5)(x + 2)", solution: "5 and 2 multiply to 10 and add to 7." },
      { id: "haqu-03", skill: "solve-quadratics-by-factoring", prompt: "Solve: x² + 5x + 6 = 0", answer: "x = -2, -3", solution: "(x + 2)(x + 3) = 0, so x = -2 or x = -3." },
      { id: "haqu-04", skill: "solve-quadratics-by-factoring", prompt: "Solve: x² - 9 = 0", answer: "x = -3, 3", solution: "x² - 9 = (x - 3)(x + 3)." },
      { id: "haqu-05", skill: "quadratic-vocabulary", prompt: "What is the highest exponent in a quadratic equation?", answer: "2", solution: "Quadratic equations have degree 2." }
    ]
  }
};

export function getHomeworkById(homeworkId) {
  return homeworkSets[homeworkId] || null;
}

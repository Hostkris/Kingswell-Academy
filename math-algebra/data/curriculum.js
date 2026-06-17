export const mathAlgebraCurriculum = {
  subject: "Math + Algebra",
  version: "1.0.0",
  maxTestQuestions: 40,
  levels: [
    {
      id: "basic",
      title: "Basic Math Foundations",
      placementRange: "0-17",
      description: "Arithmetic, fractions, decimals, percents, ratios, measurement, graphs, and confidence with numbers.",
      masteryTarget: 80,
      sourceSpine: ["openstax-prealgebra-2e", "workman-math-notebook", "alan-graham-basic-mathematics"],
      units: [
        {
          id: "basic-number-system",
          title: "Unit 1: Whole Numbers and Number Sense",
          sourceAlignment: "OpenStax Prealgebra 2e Ch. 1; Big Fat Notebook Math Unit 1",
          lessons: [
            {
              id: "basic-place-value",
              title: "Whole Numbers and Place Value",
              objective: "Read, write, compare, and order whole numbers using place value.",
              vocabulary: ["whole number", "digit", "place value", "greater than", "less than"],
              directLesson: "A digit changes value based on its position. In 4,582, the 4 means 4 thousands, the 5 means 5 hundreds, the 8 means 8 tens, and the 2 means 2 ones.",
              workedExample: {
                problem: "Which number is greater: 6,407 or 6,470?",
                steps: ["Compare thousands: both have 6 thousands.", "Compare hundreds: both have 4 hundreds.", "Compare tens: 0 tens is less than 7 tens.", "So 6,470 is greater."],
                answer: "6,470"
              },
              practiceSkills: ["place-value", "compare-whole-numbers"],
              homeworkId: "hw-basic-place-value",
              quizId: "quiz-basic-place-value"
            },
            {
              id: "basic-operations",
              title: "Four Operations with Whole Numbers",
              objective: "Add, subtract, multiply, and divide whole numbers accurately.",
              vocabulary: ["sum", "difference", "product", "quotient", "remainder"],
              directLesson: "The four operations answer four different questions: addition combines, subtraction compares or removes, multiplication groups equally, and division splits into equal groups.",
              workedExample: {
                problem: "A class has 24 students. Each student gets 3 notebooks. How many notebooks are needed?",
                steps: ["This is equal groups: 24 groups of 3.", "Multiply 24 × 3.", "24 × 3 = 72."],
                answer: "72 notebooks"
              },
              practiceSkills: ["whole-number-operations", "word-problem-operation-choice"],
              homeworkId: "hw-basic-operations",
              quizId: "quiz-basic-operations"
            }
          ]
        },
        {
          id: "basic-fractions-decimals-percents",
          title: "Unit 2: Fractions, Decimals, and Percents",
          sourceAlignment: "OpenStax Prealgebra 2e Ch. 4-6; Alan Graham Basic Mathematics fractions/decimals/percentages",
          lessons: [
            {
              id: "basic-fractions",
              title: "Fractions and Common Denominators",
              objective: "Add and subtract fractions by finding a common denominator.",
              vocabulary: ["numerator", "denominator", "equivalent fraction", "least common denominator"],
              directLesson: "Fractions can only be added or subtracted directly when the denominators match. The denominator names the size of the parts.",
              workedExample: {
                problem: "Find 1/3 + 1/6.",
                steps: ["The denominators are 3 and 6.", "Use 6 as the common denominator.", "1/3 = 2/6.", "2/6 + 1/6 = 3/6 = 1/2."],
                answer: "1/2"
              },
              practiceSkills: ["common-denominators", "fraction-addition"],
              homeworkId: "hw-basic-fractions",
              quizId: "quiz-basic-fractions"
            },
            {
              id: "basic-percents",
              title: "Percents in Real Life",
              objective: "Calculate percent of a number and solve discount, tax, and interest problems.",
              vocabulary: ["percent", "rate", "discount", "tax", "interest"],
              directLesson: "Percent means per 100. To find a percent of a number, convert the percent to a decimal and multiply.",
              workedExample: {
                problem: "What is 15% of 80?",
                steps: ["15% = 0.15.", "0.15 × 80 = 12."],
                answer: "12"
              },
              practiceSkills: ["percent-of-number", "discount-tax-interest"],
              homeworkId: "hw-basic-percents",
              quizId: "quiz-basic-percents"
            }
          ]
        }
      ]
    },
    {
      id: "intermediate",
      title: "Intermediate Pre-Algebra",
      placementRange: "18-27",
      description: "Variables, expressions, integers, equations, inequalities, ratios, proportions, coordinate plane, slope, and simple polynomials.",
      masteryTarget: 80,
      sourceSpine: ["openstax-prealgebra-2e", "workman-prealgebra-algebra-notebook"],
      units: [
        {
          id: "prealg-language",
          title: "Unit 1: The Language of Algebra",
          sourceAlignment: "OpenStax Prealgebra 2e Ch. 2; Big Fat Notebook Pre-Algebra & Algebra 1 Unit 4",
          lessons: [
            {
              id: "prealg-expressions-equations",
              title: "Expressions, Equations, and Variables",
              objective: "Translate word phrases into algebraic expressions and evaluate them.",
              vocabulary: ["variable", "constant", "coefficient", "expression", "equation"],
              directLesson: "An expression does not have an equals sign. An equation does. Variables stand for unknown or changing numbers.",
              workedExample: {
                problem: "Evaluate 3x + 4 when x = 5.",
                steps: ["Replace x with 5.", "3(5) + 4 = 15 + 4.", "15 + 4 = 19."],
                answer: "19"
              },
              practiceSkills: ["evaluate-expressions", "translate-expressions"],
              homeworkId: "hw-prealg-expressions",
              quizId: "quiz-prealg-expressions"
            },
            {
              id: "prealg-integers",
              title: "Integer Operations",
              objective: "Add, subtract, multiply, and divide positive and negative numbers.",
              vocabulary: ["integer", "positive", "negative", "absolute value", "opposite"],
              directLesson: "Integer rules are non-negotiable. Same signs add and keep the sign. Different signs subtract and keep the sign of the number with greater absolute value.",
              workedExample: {
                problem: "Simplify -8 + 3.",
                steps: ["The signs are different.", "Subtract absolute values: 8 - 3 = 5.", "Keep the sign of the number with greater absolute value: -8.", "Answer is -5."],
                answer: "-5"
              },
              practiceSkills: ["integer-addition", "integer-subtraction"],
              homeworkId: "hw-prealg-integers",
              quizId: "quiz-prealg-integers"
            }
          ]
        },
        {
          id: "prealg-linear",
          title: "Unit 2: Solving Linear Equations",
          sourceAlignment: "OpenStax Prealgebra 2e Ch. 8; Big Fat Notebook Pre-Algebra & Algebra 1 Unit 5",
          lessons: [
            {
              id: "prealg-one-two-step-equations",
              title: "One-Step and Two-Step Equations",
              objective: "Solve equations using inverse operations and check the answer.",
              vocabulary: ["solution", "inverse operation", "balance", "isolate"],
              directLesson: "Solving an equation means isolating the variable while keeping both sides balanced.",
              workedExample: {
                problem: "Solve 2x + 5 = 17.",
                steps: ["Subtract 5 from both sides: 2x = 12.", "Divide both sides by 2: x = 6.", "Check: 2(6) + 5 = 17."],
                answer: "x = 6"
              },
              practiceSkills: ["solve-two-step-equations", "check-equation-solutions"],
              homeworkId: "hw-prealg-equations",
              quizId: "quiz-prealg-equations"
            }
          ]
        }
      ]
    },
    {
      id: "advanced",
      title: "Advanced Algebra I",
      placementRange: "28-40",
      description: "Multi-step equations, inequalities, functions, graphing lines, systems, polynomials, factoring, radicals, and quadratics.",
      masteryTarget: 85,
      sourceSpine: ["openstax-elementary-algebra-2e", "workman-prealgebra-algebra-notebook"],
      units: [
        {
          id: "alg1-linear-systems",
          title: "Unit 1: Linear Equations, Graphs, and Systems",
          sourceAlignment: "OpenStax Elementary Algebra 2e Ch. 2, 4, 5",
          lessons: [
            {
              id: "alg1-multistep-equations",
              title: "Multi-Step Linear Equations",
              objective: "Solve equations with variables and constants on both sides.",
              vocabulary: ["linear equation", "constant", "coefficient", "distributive property"],
              directLesson: "Clear parentheses, combine like terms, move variables to one side, move constants to the other side, then divide by the coefficient.",
              workedExample: {
                problem: "Solve 3(x + 2) = 2x + 11.",
                steps: ["Distribute: 3x + 6 = 2x + 11.", "Subtract 2x: x + 6 = 11.", "Subtract 6: x = 5."],
                answer: "x = 5"
              },
              practiceSkills: ["solve-multistep-equations", "distributive-property"],
              homeworkId: "hw-alg1-multistep",
              quizId: "quiz-alg1-multistep"
            },
            {
              id: "alg1-slope-lines",
              title: "Slope and Slope-Intercept Form",
              objective: "Interpret and graph y = mx + b using slope and y-intercept.",
              vocabulary: ["slope", "y-intercept", "linear function", "rate of change"],
              directLesson: "In y = mx + b, m is the slope and b is the y-intercept. Slope tells how much y changes when x increases by 1.",
              workedExample: {
                problem: "Identify slope and y-intercept in y = 2x - 3.",
                steps: ["Compare to y = mx + b.", "m = 2, so slope is 2.", "b = -3, so y-intercept is -3."],
                answer: "slope = 2; y-intercept = -3"
              },
              practiceSkills: ["identify-slope-intercept", "graph-linear-equations"],
              homeworkId: "hw-alg1-slope",
              quizId: "quiz-alg1-slope"
            }
          ]
        },
        {
          id: "alg1-polynomials-quadratics",
          title: "Unit 2: Polynomials, Factoring, and Quadratics",
          sourceAlignment: "OpenStax Elementary Algebra 2e Ch. 6, 7, 10",
          lessons: [
            {
              id: "alg1-polynomials",
              title: "Polynomial Operations",
              objective: "Add, subtract, and multiply polynomials using like terms and exponent rules.",
              vocabulary: ["polynomial", "monomial", "binomial", "trinomial", "degree"],
              directLesson: "Only like terms can be combined. When multiplying powers with the same base, add the exponents.",
              workedExample: {
                problem: "Simplify (3x + 2) + (5x - 7).",
                steps: ["Combine x-terms: 3x + 5x = 8x.", "Combine constants: 2 - 7 = -5.", "Answer: 8x - 5."],
                answer: "8x - 5"
              },
              practiceSkills: ["combine-like-terms", "polynomial-addition"],
              homeworkId: "hw-alg1-polynomials",
              quizId: "quiz-alg1-polynomials"
            },
            {
              id: "alg1-quadratics",
              title: "Solving Quadratic Equations",
              objective: "Solve simple quadratic equations by factoring and the zero-product property.",
              vocabulary: ["quadratic", "factor", "zero-product property", "root", "solution"],
              directLesson: "To solve a factored quadratic, set each factor equal to zero. If ab = 0, then a = 0 or b = 0.",
              workedExample: {
                problem: "Solve x² + 5x + 6 = 0.",
                steps: ["Factor: (x + 2)(x + 3) = 0.", "Set each factor equal to zero.", "x + 2 = 0 gives x = -2.", "x + 3 = 0 gives x = -3."],
                answer: "x = -2, -3"
              },
              practiceSkills: ["factor-trinomials", "solve-quadratics-by-factoring"],
              homeworkId: "hw-alg1-quadratics",
              quizId: "quiz-alg1-quadratics"
            }
          ]
        }
      ]
    }
  ]
};

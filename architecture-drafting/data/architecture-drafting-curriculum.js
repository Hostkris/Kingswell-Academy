// Kingswell Academy — Architecture + Drafting Curriculum Data
// Original lesson/test content built from architecture + drafting concepts. Do not copy book text into lessons.
window.KWA_ARCHITECTURE_DRAFTING = {
  "subject": "Architecture + Drafting",
  "version": "1.0.0",
  "passingScore": 70,
  "masteryScore": 85,
  "testQuestionCount": 40,
  "gradeScale": [
    {
      "min": 90,
      "label": "Mastered",
      "message": "Excellent work. Student is ready for the next challenge."
    },
    {
      "min": 80,
      "label": "Strong",
      "message": "Good performance. Minor review recommended."
    },
    {
      "min": 70,
      "label": "Passed",
      "message": "Passed. Student may advance but should review missed explanations."
    },
    {
      "min": 60,
      "label": "Needs Review",
      "message": "Student should repeat lesson practice before advancing."
    },
    {
      "min": 0,
      "label": "Repeat Lesson",
      "message": "Student needs reteaching, examples, and another practice attempt."
    }
  ],
  "sources": {
    "architecturalGraphics": {
      "title": "Architectural Graphics",
      "author": "Francis D.K. Ching",
      "use": "drawing tools, linework, drafting conventions, plans, sections, elevations, paraline, perspective, rendering, presentation, freehand drawing"
    },
    "formSpaceOrder": {
      "title": "Architecture: Form, Space, and Order",
      "author": "Francis D.K. Ching",
      "use": "primary elements, form, space, organization, circulation, proportion, scale, ordering principles"
    },
    "buildingConstruction": {
      "title": "Building Construction Illustrated",
      "author": "Francis D.K. Ching",
      "use": "site analysis, foundations, floors, walls, roofs, moisture/thermal protection, doors/windows, finishes, MEP, materials"
    },
    "autocadResidential": {
      "title": "Residential Design Using AutoCAD 2026",
      "author": "Daniel John Stine",
      "use": "AutoCAD setup, floor plans, exterior elevations, sections, site plan, schedules, sheet setup, plotting"
    }
  },
  "levels": {
    "basic": {
      "title": "Basic Architecture + Drafting",
      "description": "Learn architectural drawing language, linework, scale, spatial vocabulary, sketching, and basic presentation.",
      "classes": [
        {
          "id": "ad-basic-01",
          "unit": 1,
          "title": "Drawing Tools and Drafting Setup",
          "sourceRefs": [
            "architecturalGraphics"
          ],
          "objectives": [
            "Identify drafting tools and drawing surfaces.",
            "Set up a clean sheet with border and title block.",
            "Explain why neat setup controls drawing quality."
          ],
          "lesson": "Students begin with traditional drafting order: sheet setup, border, title block, scale note, clean work habits, and tool control. Digital drafting is powerful, but students still need the old-school discipline of clear lines and organized sheets.",
          "vocabulary": [
            {
              "term": "drafting scale",
              "definition": "A measuring tool used to draw objects smaller than full size."
            },
            {
              "term": "title block",
              "definition": "The information area showing project name, sheet name, scale, date, and author."
            },
            {
              "term": "border",
              "definition": "A clean frame line around the drawing area."
            },
            {
              "term": "drawing surface",
              "definition": "The paper, board, or digital workspace where the drawing is produced."
            },
            {
              "term": "sheet number",
              "definition": "A code identifying a drawing in a set."
            }
          ],
          "homework": {
            "title": "Create a drafting setup plate with border, title block, name, date, scale note, and sheet number",
            "instructions": "Create a drafting setup plate with border, title block, name, date, scale note, and sheet number.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "sheet setup": 5,
              "title block accuracy": 5,
              "line cleanliness": 5,
              "professional presentation": 5
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-basic-02",
          "unit": 2,
          "title": "Line Types and Line Weights",
          "sourceRefs": [
            "architecturalGraphics"
          ],
          "objectives": [
            "Identify common architectural line types.",
            "Use heavier lines for cut elements.",
            "Create visual hierarchy in a drawing."
          ],
          "lesson": "Architectural drawings are read through line hierarchy. Cut walls read heavier, visible edges read medium, hidden or overhead items read lighter/dashed, and dimensions stay light and clear.",
          "vocabulary": [
            {
              "term": "line weight",
              "definition": "The darkness or thickness of a line."
            },
            {
              "term": "object line",
              "definition": "A visible edge line."
            },
            {
              "term": "hidden line",
              "definition": "A dashed line showing something not directly visible."
            },
            {
              "term": "centerline",
              "definition": "A line marking the center of an object or opening."
            },
            {
              "term": "dimension line",
              "definition": "A light line showing measured distance."
            }
          ],
          "homework": {
            "title": "Draw a one-room plan using at least three line weights and four line types",
            "instructions": "Draw a one-room plan using at least three line weights and four line types.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "correct line types": 5,
              "line hierarchy": 5,
              "neatness": 5,
              "labels/dimensions": 5
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-basic-03",
          "unit": 3,
          "title": "Architectural Scale and Measurement",
          "sourceRefs": [
            "architecturalGraphics"
          ],
          "objectives": [
            "Read common architectural scales.",
            "Convert real dimensions into scaled drawings.",
            "Apply scale notes correctly."
          ],
          "lesson": "Scale allows a real building to fit on a sheet. Students practice reading and drawing at common architectural scales, then label the scale so another person can understand the drawing without guessing.",
          "vocabulary": [
            {
              "term": "scale",
              "definition": "The relationship between drawing size and real size."
            },
            {
              "term": "quarter-inch scale",
              "definition": "A common scale where 1/4 inch represents 1 foot."
            },
            {
              "term": "dimension",
              "definition": "A measured distance shown on a drawing."
            },
            {
              "term": "extension line",
              "definition": "A light line extending from an object to a dimension line."
            },
            {
              "term": "measurement accuracy",
              "definition": "The degree to which a drawn size matches the intended size."
            }
          ],
          "homework": {
            "title": "Draw a 12' x 16' room at 1/4\" = 1'-0\" and add correct dimensions",
            "instructions": "Draw a 12' x 16' room at 1/4\" = 1'-0\" and add correct dimensions.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "scale accuracy": 8,
              "dimension placement": 4,
              "line quality": 4,
              "title/scale note": 4
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-basic-04",
          "unit": 4,
          "title": "Plans, Sections, and Elevations",
          "sourceRefs": [
            "architecturalGraphics"
          ],
          "objectives": [
            "Explain the difference between plan, section, and elevation.",
            "Identify what each drawing view reveals.",
            "Read a simple architectural drawing set."
          ],
          "lesson": "Plans show layout from above, sections cut through the building, and elevations show vertical faces. Students learn that no single drawing tells the whole story; the drawing set works together.",
          "vocabulary": [
            {
              "term": "plan",
              "definition": "A horizontal cut view looking down."
            },
            {
              "term": "section",
              "definition": "A vertical cut view through a building or space."
            },
            {
              "term": "elevation",
              "definition": "A flat vertical view of one side."
            },
            {
              "term": "cut plane",
              "definition": "The imagined slice through the building."
            },
            {
              "term": "drawing set",
              "definition": "A group of related drawings that explain a project."
            }
          ],
          "homework": {
            "title": "Create a simple plan, one section, and one elevation of a small rectangular room",
            "instructions": "Create a simple plan, one section, and one elevation of a small rectangular room.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "plan clarity": 5,
              "section clarity": 5,
              "elevation clarity": 5,
              "labels": 5
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-basic-05",
          "unit": 5,
          "title": "Freehand Sketching and Observation",
          "sourceRefs": [
            "architecturalGraphics"
          ],
          "objectives": [
            "Sketch from observation.",
            "Use contour, proportion, and simple shading.",
            "Record design ideas quickly."
          ],
          "lesson": "Freehand drawing trains the eye. Students sketch objects, rooms, and simple buildings to develop spatial judgment before relying on software.",
          "vocabulary": [
            {
              "term": "contour drawing",
              "definition": "A drawing focused on visible edges and outlines."
            },
            {
              "term": "proportion",
              "definition": "The size relationship between parts."
            },
            {
              "term": "observation",
              "definition": "Careful visual study before drawing."
            },
            {
              "term": "thumbnail sketch",
              "definition": "A small quick idea sketch."
            },
            {
              "term": "diagram",
              "definition": "A simplified drawing explaining an idea."
            }
          ],
          "homework": {
            "title": "Sketch a room corner from observation and label at least five architectural features",
            "instructions": "Sketch a room corner from observation and label at least five architectural features.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "observation accuracy": 5,
              "proportion": 5,
              "line confidence": 5,
              "labels": 5
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-basic-06",
          "unit": 6,
          "title": "Point, Line, Plane, and Volume",
          "sourceRefs": [
            "formSpaceOrder"
          ],
          "objectives": [
            "Define primary design elements.",
            "Show how elements become form.",
            "Create a simple form-composition diagram."
          ],
          "lesson": "Architectural form begins with basic elements: point, line, plane, and volume. Students use these as design vocabulary rather than decoration.",
          "vocabulary": [
            {
              "term": "point",
              "definition": "A position in space."
            },
            {
              "term": "line",
              "definition": "A point extended in direction."
            },
            {
              "term": "plane",
              "definition": "A flat surface defining space."
            },
            {
              "term": "volume",
              "definition": "A three-dimensional form."
            },
            {
              "term": "composition",
              "definition": "An organized arrangement of elements."
            }
          ],
          "homework": {
            "title": "Make a four-panel diagram showing point, line, plane, and volume as architectural elements",
            "instructions": "Make a four-panel diagram showing point, line, plane, and volume as architectural elements.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "concept accuracy": 6,
              "composition": 5,
              "labels": 4,
              "neatness": 5
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-basic-07",
          "unit": 7,
          "title": "Shape, Form, and Spatial Vocabulary",
          "sourceRefs": [
            "formSpaceOrder"
          ],
          "objectives": [
            "Identify primary shapes and forms.",
            "Explain additive and subtractive form.",
            "Use vocabulary to describe simple buildings."
          ],
          "lesson": "Students learn the difference between a flat shape and three-dimensional form. They analyze circles, triangles, squares, cubes, cylinders, and transformed forms.",
          "vocabulary": [
            {
              "term": "shape",
              "definition": "A flat outline or figure."
            },
            {
              "term": "form",
              "definition": "A three-dimensional object or mass."
            },
            {
              "term": "additive form",
              "definition": "A form made by joining parts."
            },
            {
              "term": "subtractive form",
              "definition": "A form changed by removing parts."
            },
            {
              "term": "primary solid",
              "definition": "A simple 3D form such as cube, cylinder, sphere, cone, or pyramid."
            }
          ],
          "homework": {
            "title": "Build or sketch three simple forms: one additive, one subtractive, and one transformed",
            "instructions": "Build or sketch three simple forms: one additive, one subtractive, and one transformed.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "correct form types": 8,
              "spatial clarity": 4,
              "labels": 4,
              "presentation": 4
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-basic-08",
          "unit": 8,
          "title": "Room Planning and Human Scale",
          "sourceRefs": [
            "formSpaceOrder",
            "architecturalGraphics"
          ],
          "objectives": [
            "Apply human scale to room planning.",
            "Place basic furniture with circulation space.",
            "Explain why scale affects comfort."
          ],
          "lesson": "A room plan must fit human movement, furniture, door swings, and comfort. Students create small layouts that work in real life instead of just looking nice on paper.",
          "vocabulary": [
            {
              "term": "human scale",
              "definition": "Design sized around the human body and movement."
            },
            {
              "term": "clearance",
              "definition": "Open space needed for use or movement."
            },
            {
              "term": "circulation",
              "definition": "The path people use to move through a space."
            },
            {
              "term": "furniture plan",
              "definition": "A drawing showing furniture arrangement."
            },
            {
              "term": "room label",
              "definition": "Text identifying a room or space."
            }
          ],
          "homework": {
            "title": "Design a bedroom plan with bed, closet, door swing, window, circulation path, and dimensions",
            "instructions": "Design a bedroom plan with bed, closet, door swing, window, circulation path, and dimensions.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "space planning": 6,
              "clearances": 5,
              "dimensions": 4,
              "drawing quality": 5
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-basic-09",
          "unit": 9,
          "title": "One-Point Perspective",
          "sourceRefs": [
            "architecturalGraphics"
          ],
          "objectives": [
            "Identify horizon line and vanishing point.",
            "Draw a simple interior in one-point perspective.",
            "Use perspective to communicate depth."
          ],
          "lesson": "One-point perspective helps students show depth when the viewer looks straight toward a wall or object. The horizon line and vanishing point control the drawing.",
          "vocabulary": [
            {
              "term": "horizon line",
              "definition": "The viewer's eye level in a perspective drawing."
            },
            {
              "term": "vanishing point",
              "definition": "The point where parallel lines appear to meet."
            },
            {
              "term": "converging line",
              "definition": "A line that moves toward a vanishing point."
            },
            {
              "term": "depth",
              "definition": "The visual sense of distance into space."
            },
            {
              "term": "picture plane",
              "definition": "The imagined flat surface of the perspective drawing."
            }
          ],
          "homework": {
            "title": "Draw a simple hallway or bedroom in one-point perspective with horizon line and vanishing point shown lightly",
            "instructions": "Draw a simple hallway or bedroom in one-point perspective with horizon line and vanishing point shown lightly.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "perspective setup": 6,
              "depth accuracy": 5,
              "line quality": 4,
              "details": 5
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-basic-10",
          "unit": 10,
          "title": "Two-Point Perspective",
          "sourceRefs": [
            "architecturalGraphics"
          ],
          "objectives": [
            "Set up two vanishing points.",
            "Draw a simple building corner.",
            "Compare one-point and two-point perspective."
          ],
          "lesson": "Two-point perspective is used when viewing a corner. Students learn how two vanishing points create believable exterior massing.",
          "vocabulary": [
            {
              "term": "two-point perspective",
              "definition": "Perspective using two vanishing points."
            },
            {
              "term": "corner view",
              "definition": "A view showing two sides of an object."
            },
            {
              "term": "vertical line",
              "definition": "A line remaining upright in basic two-point perspective."
            },
            {
              "term": "massing",
              "definition": "A simplified study of building volume."
            },
            {
              "term": "visual angle",
              "definition": "The direction from which the viewer sees the object."
            }
          ],
          "homework": {
            "title": "Draw a simple house mass in two-point perspective with doors, windows, and roof shape",
            "instructions": "Draw a simple house mass in two-point perspective with doors, windows, and roof shape.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "two-point setup": 6,
              "form accuracy": 5,
              "details": 4,
              "presentation": 5
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-basic-11",
          "unit": 11,
          "title": "Basic Presentation Boards",
          "sourceRefs": [
            "architecturalGraphics"
          ],
          "objectives": [
            "Organize drawings on a presentation sheet.",
            "Use title, hierarchy, spacing, and labels.",
            "Explain a design visually."
          ],
          "lesson": "Presentation is part of the work. Students arrange drawings so the viewer can understand the project without chaos, clutter, or mystery meat layout.",
          "vocabulary": [
            {
              "term": "presentation board",
              "definition": "A formatted sheet that explains a project visually."
            },
            {
              "term": "graphic hierarchy",
              "definition": "The visual order of importance."
            },
            {
              "term": "caption",
              "definition": "A short note explaining an image or drawing."
            },
            {
              "term": "layout",
              "definition": "The arrangement of items on a page."
            },
            {
              "term": "white space",
              "definition": "Open area that improves readability."
            }
          ],
          "homework": {
            "title": "Create a presentation board using one plan, one elevation, one perspective, title, labels, and short description",
            "instructions": "Create a presentation board using one plan, one elevation, one perspective, title, labels, and short description.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "layout": 5,
              "drawing selection": 5,
              "labels/captions": 5,
              "professional finish": 5
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-basic-12",
          "unit": 12,
          "title": "Basic Studio Project: Small Room Set",
          "sourceRefs": [
            "architecturalGraphics",
            "formSpaceOrder"
          ],
          "objectives": [
            "Produce a mini architectural drawing set.",
            "Combine plan, elevation, section, and perspective.",
            "Present a clear design idea."
          ],
          "lesson": "The basic capstone requires students to combine what they learned into a small room design. This proves they can draw, label, organize, and explain space.",
          "vocabulary": [
            {
              "term": "studio project",
              "definition": "A design assignment completed through drawings and presentation."
            },
            {
              "term": "mini set",
              "definition": "A small group of coordinated drawings."
            },
            {
              "term": "design intent",
              "definition": "The main idea behind a design."
            },
            {
              "term": "review",
              "definition": "A critique or evaluation of design work."
            },
            {
              "term": "portfolio piece",
              "definition": "A finished work suitable for showcasing skill."
            }
          ],
          "homework": {
            "title": "Complete a small room set: floor plan, one elevation, one section, one perspective, vocabulary sheet, and short design explanation",
            "instructions": "Complete a small room set: floor plan, one elevation, one section, one perspective, vocabulary sheet, and short design explanation.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "complete drawing set": 8,
              "accuracy": 5,
              "presentation": 4,
              "reflection": 3
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        }
      ]
    },
    "intermediate": {
      "title": "Intermediate Architecture + Drafting",
      "description": "Develop residential plans, CAD skills, site analysis, elevations, sections, and construction thinking.",
      "classes": [
        {
          "id": "ad-int-01",
          "unit": 1,
          "title": "Site Analysis",
          "sourceRefs": [
            "buildingConstruction"
          ],
          "objectives": [
            "Identify physical and regulatory site factors.",
            "Diagram sun, wind, access, views, slope, and drainage.",
            "Explain why site conditions shape design."
          ],
          "lesson": "Students study the site before designing the building. A good site diagram shows forces that matter: climate, slope, drainage, access, views, utilities, setbacks, noise, and surrounding context.",
          "vocabulary": [
            {
              "term": "site analysis",
              "definition": "Study of conditions affecting a building site."
            },
            {
              "term": "topography",
              "definition": "Shape and slope of land."
            },
            {
              "term": "setback",
              "definition": "Required distance from property line to building."
            },
            {
              "term": "drainage",
              "definition": "Movement of water across a site."
            },
            {
              "term": "orientation",
              "definition": "Building direction relative to sun, wind, and access."
            }
          ],
          "homework": {
            "title": "Create a site analysis diagram showing sun path, wind, access, views, drainage, and setbacks",
            "instructions": "Create a site analysis diagram showing sun path, wind, access, views, drainage, and setbacks.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "site factors": 8,
              "diagram clarity": 5,
              "labels": 4,
              "design notes": 3
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-int-02",
          "unit": 2,
          "title": "Programming and Bubble Diagrams",
          "sourceRefs": [
            "formSpaceOrder"
          ],
          "objectives": [
            "List required spaces for a project.",
            "Use bubble diagrams to organize relationships.",
            "Translate program needs into early layout logic."
          ],
          "lesson": "Programming asks what spaces are needed and how they relate. Bubble diagrams give students a quick way to test relationships before locking into walls.",
          "vocabulary": [
            {
              "term": "program",
              "definition": "The list of required spaces and functions."
            },
            {
              "term": "bubble diagram",
              "definition": "A loose diagram of spatial relationships."
            },
            {
              "term": "adjacency",
              "definition": "How close one space should be to another."
            },
            {
              "term": "public zone",
              "definition": "Spaces meant for guests or shared use."
            },
            {
              "term": "private zone",
              "definition": "Spaces meant for limited or personal use."
            }
          ],
          "homework": {
            "title": "Create a program and bubble diagram for a small one-bedroom cabin",
            "instructions": "Create a program and bubble diagram for a small one-bedroom cabin.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "program completeness": 5,
              "adjacency logic": 7,
              "diagram clarity": 4,
              "notes": 4
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-int-03",
          "unit": 3,
          "title": "Circulation and Spatial Organization",
          "sourceRefs": [
            "formSpaceOrder"
          ],
          "objectives": [
            "Identify circulation paths.",
            "Compare linear, centralized, radial, clustered, and grid organizations.",
            "Improve a floor plan using movement logic."
          ],
          "lesson": "Circulation is how people move through space. Students learn to avoid awkward paths, trapped rooms, and wasted hallways.",
          "vocabulary": [
            {
              "term": "circulation path",
              "definition": "The route people take through a building."
            },
            {
              "term": "linear organization",
              "definition": "Spaces arranged along a line or path."
            },
            {
              "term": "centralized organization",
              "definition": "Spaces organized around a dominant center."
            },
            {
              "term": "clustered organization",
              "definition": "Spaces grouped by relationship."
            },
            {
              "term": "grid organization",
              "definition": "Spaces organized by repeated lines or modules."
            }
          ],
          "homework": {
            "title": "Analyze a simple floor plan and redraw it with improved circulation",
            "instructions": "Analyze a simple floor plan and redraw it with improved circulation.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "circulation analysis": 6,
              "organization logic": 5,
              "redesign quality": 5,
              "labels": 4
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-int-04",
          "unit": 4,
          "title": "Residential Floor Plan Development",
          "sourceRefs": [
            "autocadResidential",
            "architecturalGraphics"
          ],
          "objectives": [
            "Develop a residential plan from bubble diagram to floor plan.",
            "Place walls, doors, windows, rooms, and dimensions.",
            "Check basic usability and clarity."
          ],
          "lesson": "Students move from concept to drafted residential plan. The plan must show layout, openings, dimensions, labels, and readable line hierarchy.",
          "vocabulary": [
            {
              "term": "floor plan",
              "definition": "Horizontal cut view showing layout."
            },
            {
              "term": "door swing",
              "definition": "Arc showing how a door opens."
            },
            {
              "term": "window opening",
              "definition": "Wall opening for glazing and light."
            },
            {
              "term": "room tag",
              "definition": "Label identifying a room."
            },
            {
              "term": "dimension string",
              "definition": "Grouped dimensions placed on a drawing."
            }
          ],
          "homework": {
            "title": "Draft a 600\u2013900 sq ft residential floor plan with labels, doors, windows, and dimensions",
            "instructions": "Draft a 600\u2013900 sq ft residential floor plan with labels, doors, windows, and dimensions.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "layout function": 7,
              "openings": 4,
              "dimensions": 5,
              "graphic clarity": 4
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-int-05",
          "unit": 5,
          "title": "AutoCAD Basics",
          "sourceRefs": [
            "autocadResidential"
          ],
          "objectives": [
            "Set up a drawing file.",
            "Use basic CAD commands safely.",
            "Organize drawings with layers."
          ],
          "lesson": "Students learn core CAD habits: units, layers, draw/modify commands, saving, and clean organization. Bad CAD habits multiply like weeds; stop them early.",
          "vocabulary": [
            {
              "term": "CAD",
              "definition": "Computer-aided design/drafting."
            },
            {
              "term": "layer",
              "definition": "A drawing category controlling visibility and appearance."
            },
            {
              "term": "unit setting",
              "definition": "The measurement setup for a file."
            },
            {
              "term": "modify command",
              "definition": "A tool used to change existing geometry."
            },
            {
              "term": "object snap",
              "definition": "A setting that locks onto precise points."
            }
          ],
          "homework": {
            "title": "Create a CAD practice file with layers for walls, doors, windows, dimensions, text, and furniture",
            "instructions": "Create a CAD practice file with layers for walls, doors, windows, dimensions, text, and furniture.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "file setup": 5,
              "layer organization": 6,
              "command accuracy": 5,
              "clean geometry": 4
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-int-06",
          "unit": 6,
          "title": "CAD Walls, Doors, and Windows",
          "sourceRefs": [
            "autocadResidential"
          ],
          "objectives": [
            "Draft walls accurately.",
            "Insert doors and windows correctly.",
            "Use proper linework for openings."
          ],
          "lesson": "Students practice the parts that make a plan readable: wall thickness, door swings, window locations, and clean intersections.",
          "vocabulary": [
            {
              "term": "wall thickness",
              "definition": "The drawn width of a wall assembly."
            },
            {
              "term": "opening",
              "definition": "A break in a wall for a door or window."
            },
            {
              "term": "block",
              "definition": "Reusable CAD object."
            },
            {
              "term": "trim",
              "definition": "A CAD command used to cut geometry back."
            },
            {
              "term": "offset",
              "definition": "A CAD command used to create parallel lines at a set distance."
            }
          ],
          "homework": {
            "title": "Draft a small floor plan with exterior walls, interior partitions, three doors, and four windows",
            "instructions": "Draft a small floor plan with exterior walls, interior partitions, three doors, and four windows.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "wall accuracy": 6,
              "doors/windows": 6,
              "CAD cleanliness": 4,
              "labels": 4
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-int-07",
          "unit": 7,
          "title": "Dimensions, Annotations, and Layers",
          "sourceRefs": [
            "autocadResidential",
            "architecturalGraphics"
          ],
          "objectives": [
            "Add readable dimensions and notes.",
            "Use layers to control drawing appearance.",
            "Avoid over-dimensioning and clutter."
          ],
          "lesson": "Dimensions and notes tell builders what size and what intent. Students learn clarity over clutter: enough information, placed cleanly, with consistent style.",
          "vocabulary": [
            {
              "term": "annotation",
              "definition": "Text or symbols that explain a drawing."
            },
            {
              "term": "dimension style",
              "definition": "CAD settings for dimension appearance."
            },
            {
              "term": "leader",
              "definition": "A line connecting a note to an object."
            },
            {
              "term": "text height",
              "definition": "Printed size of drawing text."
            },
            {
              "term": "layer control",
              "definition": "Use of layers to organize drawing elements."
            }
          ],
          "homework": {
            "title": "Add dimensions, room labels, and general notes to your residential floor plan",
            "instructions": "Add dimensions, room labels, and general notes to your residential floor plan.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "dimension accuracy": 7,
              "annotation clarity": 5,
              "layer use": 4,
              "readability": 4
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-int-08",
          "unit": 8,
          "title": "Exterior Elevations",
          "sourceRefs": [
            "autocadResidential",
            "architecturalGraphics"
          ],
          "objectives": [
            "Project elevations from a floor plan.",
            "Show roof, openings, materials, and grade line.",
            "Use elevation labels correctly."
          ],
          "lesson": "Elevations show the outside face of the building. Students project wall locations and openings from the plan, then add roof, grade, materials, and heights.",
          "vocabulary": [
            {
              "term": "exterior elevation",
              "definition": "Flat view of a building side."
            },
            {
              "term": "grade line",
              "definition": "The ground line at the building."
            },
            {
              "term": "material hatch",
              "definition": "Pattern suggesting a material."
            },
            {
              "term": "roof pitch",
              "definition": "Slope of a roof."
            },
            {
              "term": "sill/head height",
              "definition": "Bottom/top height of a window or opening."
            }
          ],
          "homework": {
            "title": "Create front and right exterior elevations from your floor plan",
            "instructions": "Create front and right exterior elevations from your floor plan.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "projection accuracy": 6,
              "openings": 5,
              "roof/grade": 4,
              "graphic finish": 5
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-int-09",
          "unit": 9,
          "title": "Building Sections",
          "sourceRefs": [
            "buildingConstruction",
            "architecturalGraphics",
            "autocadResidential"
          ],
          "objectives": [
            "Cut a section through a building.",
            "Show foundation, floor, wall, roof, and height relationships.",
            "Label major assemblies."
          ],
          "lesson": "Sections reveal what plans hide. Students slice through a building and show vertical relationships, structure, and assemblies.",
          "vocabulary": [
            {
              "term": "building section",
              "definition": "Vertical cut through a building."
            },
            {
              "term": "section marker",
              "definition": "Symbol showing where a section is cut."
            },
            {
              "term": "floor assembly",
              "definition": "Layered system forming a floor."
            },
            {
              "term": "wall assembly",
              "definition": "Layered system forming a wall."
            },
            {
              "term": "roof assembly",
              "definition": "Layered system forming a roof."
            }
          ],
          "homework": {
            "title": "Draw one building section through your residential plan and label major assemblies",
            "instructions": "Draw one building section through your residential plan and label major assemblies.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "cut location": 4,
              "assembly accuracy": 7,
              "vertical dimensions": 4,
              "labels": 5
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-int-10",
          "unit": 10,
          "title": "Foundations, Floors, and Walls",
          "sourceRefs": [
            "buildingConstruction"
          ],
          "objectives": [
            "Identify major foundation types.",
            "Describe floors and walls as systems.",
            "Connect construction knowledge to drawing details."
          ],
          "lesson": "Buildings stand because foundations, floors, and walls work together. Students learn the basic assemblies so their drawings stop floating in fantasy land.",
          "vocabulary": [
            {
              "term": "foundation",
              "definition": "System transferring building loads to the ground."
            },
            {
              "term": "footing",
              "definition": "Wider base that spreads load into soil."
            },
            {
              "term": "slab",
              "definition": "Concrete floor placed on grade."
            },
            {
              "term": "stud wall",
              "definition": "Wall framed with vertical members."
            },
            {
              "term": "load path",
              "definition": "Route by which loads move to the ground."
            }
          ],
          "homework": {
            "title": "Create a labeled detail diagram showing footing, foundation wall or slab, floor, stud wall, insulation zone, and finish layers",
            "instructions": "Create a labeled detail diagram showing footing, foundation wall or slab, floor, stud wall, insulation zone, and finish layers.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "construction accuracy": 8,
              "labels": 5,
              "graphic clarity": 4,
              "notes": 3
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-int-11",
          "unit": 11,
          "title": "Roofs, Moisture, and Thermal Protection",
          "sourceRefs": [
            "buildingConstruction"
          ],
          "objectives": [
            "Identify basic roof forms.",
            "Explain moisture control and flashing.",
            "Show insulation and weather protection in drawings."
          ],
          "lesson": "A building must shed water and control heat. Students learn roof slope, drainage, flashing, waterproofing, vapor concerns, and insulation basics.",
          "vocabulary": [
            {
              "term": "flashing",
              "definition": "Material used to redirect water at joints and penetrations."
            },
            {
              "term": "insulation",
              "definition": "Material resisting heat flow."
            },
            {
              "term": "roof slope",
              "definition": "Angle or pitch that helps drain water."
            },
            {
              "term": "weather barrier",
              "definition": "Layer resisting outside weather."
            },
            {
              "term": "thermal envelope",
              "definition": "Boundary controlling heat transfer."
            }
          ],
          "homework": {
            "title": "Draw a simple roof-wall section showing roof slope, flashing location, insulation, and weather barrier",
            "instructions": "Draw a simple roof-wall section showing roof slope, flashing location, insulation, and weather barrier.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "moisture logic": 6,
              "thermal logic": 5,
              "section accuracy": 5,
              "labels": 4
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-int-12",
          "unit": 12,
          "title": "Intermediate Residential Sheet Set",
          "sourceRefs": [
            "autocadResidential",
            "buildingConstruction",
            "architecturalGraphics"
          ],
          "objectives": [
            "Assemble a coordinated residential drawing set.",
            "Include plan, elevations, section, site diagram, and notes.",
            "Prepare drawings for review."
          ],
          "lesson": "The intermediate capstone pulls together design, drafting, CAD, and construction thinking into a small residential set.",
          "vocabulary": [
            {
              "term": "sheet set",
              "definition": "A coordinated group of project drawings."
            },
            {
              "term": "coordination",
              "definition": "Making drawings agree with each other."
            },
            {
              "term": "review set",
              "definition": "Drawings prepared for critique or checking."
            },
            {
              "term": "drawing notes",
              "definition": "Written information supporting graphics."
            },
            {
              "term": "revision",
              "definition": "A recorded drawing change."
            }
          ],
          "homework": {
            "title": "Submit a residential review set: cover sheet, floor plan, two elevations, one section, site diagram, and notes",
            "instructions": "Submit a residential review set: cover sheet, floor plan, two elevations, one section, site diagram, and notes.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "sheet completeness": 8,
              "coordination": 5,
              "drawing quality": 5,
              "professional review": 2
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        }
      ]
    },
    "advanced": {
      "title": "Advanced Architecture + Drafting",
      "description": "Build code-aware documentation, details, schedules, MEP coordination, plotting, portfolio, and capstone set.",
      "classes": [
        {
          "id": "ad-adv-01",
          "unit": 1,
          "title": "Code and Zoning Basics",
          "sourceRefs": [
            "buildingConstruction"
          ],
          "objectives": [
            "Complete a basic code worksheet.",
            "Identify setbacks, occupancy, egress, and general constraints.",
            "Explain why code affects design."
          ],
          "lesson": "Advanced students learn that beautiful drawings still have to satisfy rules. Code and zoning checks help catch problems before the drawing set gets expensive.",
          "vocabulary": [
            {
              "term": "zoning",
              "definition": "Local rules governing land use and building placement."
            },
            {
              "term": "occupancy",
              "definition": "How a building is used under code categories."
            },
            {
              "term": "egress",
              "definition": "Safe path to exit a building."
            },
            {
              "term": "setback",
              "definition": "Required distance from property lines."
            },
            {
              "term": "code analysis",
              "definition": "Worksheet summarizing applicable requirements."
            }
          ],
          "homework": {
            "title": "Complete a basic code/zoning worksheet for a small residential project",
            "instructions": "Complete a basic code/zoning worksheet for a small residential project.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "code categories": 6,
              "setback logic": 4,
              "egress notes": 5,
              "worksheet clarity": 5
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-adv-02",
          "unit": 2,
          "title": "Advanced Sheet Organization",
          "sourceRefs": [
            "autocadResidential",
            "architecturalGraphics"
          ],
          "objectives": [
            "Create a professional sheet index.",
            "Organize drawings by discipline and purpose.",
            "Use title blocks and revision areas consistently."
          ],
          "lesson": "A serious drawing set needs order. Students create cover sheets, sheet numbers, titles, legends, and coordination standards.",
          "vocabulary": [
            {
              "term": "sheet index",
              "definition": "List of drawings in a set."
            },
            {
              "term": "cover sheet",
              "definition": "Opening sheet with project and drawing set information."
            },
            {
              "term": "legend",
              "definition": "Explanation of symbols or abbreviations."
            },
            {
              "term": "revision block",
              "definition": "Area tracking drawing changes."
            },
            {
              "term": "discipline code",
              "definition": "Sheet prefix identifying drawing category, such as architectural."
            }
          ],
          "homework": {
            "title": "Create a cover sheet with project data, sheet index, abbreviations, symbols, and revision area",
            "instructions": "Create a cover sheet with project data, sheet index, abbreviations, symbols, and revision area.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "sheet index": 5,
              "title block": 5,
              "symbols/abbreviations": 5,
              "professional layout": 5
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-adv-03",
          "unit": 3,
          "title": "Wall Sections and Construction Details",
          "sourceRefs": [
            "buildingConstruction",
            "architecturalGraphics"
          ],
          "objectives": [
            "Develop a wall section.",
            "Create enlarged details for critical joints.",
            "Explain materials and assemblies through notes."
          ],
          "lesson": "Details are where design meets construction. Students draw wall sections and enlarged details for foundation-to-wall, window, roof-wall, and moisture protection conditions.",
          "vocabulary": [
            {
              "term": "detail drawing",
              "definition": "Enlarged drawing explaining a construction condition."
            },
            {
              "term": "assembly",
              "definition": "Layered building system."
            },
            {
              "term": "callout",
              "definition": "Symbol pointing to an enlarged detail."
            },
            {
              "term": "air barrier",
              "definition": "Layer limiting uncontrolled air movement."
            },
            {
              "term": "control layer",
              "definition": "A building layer controlling water, air, vapor, or heat."
            }
          ],
          "homework": {
            "title": "Create one wall section and two enlarged details with callouts and notes",
            "instructions": "Create one wall section and two enlarged details with callouts and notes.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "wall section accuracy": 7,
              "detail accuracy": 6,
              "notes": 4,
              "coordination": 3
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-adv-04",
          "unit": 4,
          "title": "Door and Window Schedules",
          "sourceRefs": [
            "autocadResidential",
            "buildingConstruction"
          ],
          "objectives": [
            "Create schedule tables.",
            "Tag doors and windows on plans.",
            "Coordinate schedule information with drawings."
          ],
          "lesson": "Schedules turn repeated building parts into organized data. Students tag doors/windows and make tables that communicate size, type, material, and remarks.",
          "vocabulary": [
            {
              "term": "schedule",
              "definition": "Table listing repeated project items."
            },
            {
              "term": "door tag",
              "definition": "Symbol identifying a door in a schedule."
            },
            {
              "term": "window tag",
              "definition": "Symbol identifying a window in a schedule."
            },
            {
              "term": "rough opening",
              "definition": "Framed opening size before final unit installation."
            },
            {
              "term": "remarks",
              "definition": "Notes column in a schedule."
            }
          ],
          "homework": {
            "title": "Create door and window tags on a plan plus matching door/window schedules",
            "instructions": "Create door and window tags on a plan plus matching door/window schedules.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "tag coordination": 6,
              "table accuracy": 6,
              "drawing clarity": 4,
              "completeness": 4
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-adv-05",
          "unit": 5,
          "title": "Reflected Ceiling Plans",
          "sourceRefs": [
            "architecturalGraphics",
            "autocadResidential"
          ],
          "objectives": [
            "Explain reflected ceiling plan logic.",
            "Place lights, ceiling changes, and notes.",
            "Coordinate ceiling plan with floor plan."
          ],
          "lesson": "A reflected ceiling plan looks upward and organizes ceiling elements. Students use it for lighting, ceiling heights, soffits, fans, and coordination notes.",
          "vocabulary": [
            {
              "term": "reflected ceiling plan",
              "definition": "Drawing showing ceiling layout as if reflected onto the floor plane."
            },
            {
              "term": "soffit",
              "definition": "Lowered ceiling or boxed area."
            },
            {
              "term": "fixture",
              "definition": "Installed item such as a light or fan."
            },
            {
              "term": "ceiling height",
              "definition": "Vertical distance from floor to ceiling."
            },
            {
              "term": "switching note",
              "definition": "Note explaining lighting control."
            }
          ],
          "homework": {
            "title": "Create a reflected ceiling plan for the main living area with lights, fan, ceiling heights, and notes",
            "instructions": "Create a reflected ceiling plan for the main living area with lights, fan, ceiling heights, and notes.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "RCP logic": 6,
              "fixture placement": 5,
              "coordination": 5,
              "notes": 4
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-adv-06",
          "unit": 6,
          "title": "Roof Plan and Drainage",
          "sourceRefs": [
            "buildingConstruction",
            "autocadResidential"
          ],
          "objectives": [
            "Draw roof plan geometry.",
            "Show slope and drainage direction.",
            "Coordinate roof plan with elevations and sections."
          ],
          "lesson": "Roof plans explain the top of the building. Students show ridges, valleys, slopes, overhangs, drainage direction, and roof penetrations.",
          "vocabulary": [
            {
              "term": "roof plan",
              "definition": "Top view of roof surfaces and drainage."
            },
            {
              "term": "ridge",
              "definition": "High line where roof slopes meet."
            },
            {
              "term": "valley",
              "definition": "Low line where roof slopes meet."
            },
            {
              "term": "overhang",
              "definition": "Roof extension beyond wall face."
            },
            {
              "term": "downspout",
              "definition": "Vertical pipe carrying roof water down."
            }
          ],
          "homework": {
            "title": "Create a roof plan with slopes, ridges, valleys, overhangs, and drainage notes",
            "instructions": "Create a roof plan with slopes, ridges, valleys, overhangs, and drainage notes.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "roof geometry": 7,
              "drainage logic": 5,
              "coordination": 4,
              "labels": 4
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-adv-07",
          "unit": 7,
          "title": "Materials and Finish Schedules",
          "sourceRefs": [
            "buildingConstruction",
            "architecturalGraphics"
          ],
          "objectives": [
            "Identify finish materials.",
            "Create room finish schedules.",
            "Coordinate material notes with drawings."
          ],
          "lesson": "Finish schedules help communicate what surfaces receive which materials. Students organize floors, walls, ceilings, base, and remarks room by room.",
          "vocabulary": [
            {
              "term": "finish schedule",
              "definition": "Table showing finish materials by room."
            },
            {
              "term": "material note",
              "definition": "Written material description on a drawing."
            },
            {
              "term": "base",
              "definition": "Trim at bottom of wall."
            },
            {
              "term": "specification",
              "definition": "Written requirement for product, material, or installation."
            },
            {
              "term": "keynote",
              "definition": "Numbered note tied to a list of descriptions."
            }
          ],
          "homework": {
            "title": "Create a room finish schedule for five rooms and add material keynotes to one plan/elevation",
            "instructions": "Create a room finish schedule for five rooms and add material keynotes to one plan/elevation.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "schedule completeness": 6,
              "material logic": 5,
              "coordination": 5,
              "clarity": 4
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-adv-08",
          "unit": 8,
          "title": "Basic MEP Coordination",
          "sourceRefs": [
            "buildingConstruction"
          ],
          "objectives": [
            "Identify basic mechanical, electrical, and plumbing considerations.",
            "Coordinate MEP notes with architectural drawings.",
            "Avoid obvious conflicts."
          ],
          "lesson": "Architects do not design every system alone, but they must coordinate space for systems. Students identify basic HVAC, electrical, plumbing, and utility needs.",
          "vocabulary": [
            {
              "term": "MEP",
              "definition": "Mechanical, electrical, and plumbing systems."
            },
            {
              "term": "HVAC",
              "definition": "Heating, ventilation, and air conditioning."
            },
            {
              "term": "fixture location",
              "definition": "Placement of plumbing or electrical fixtures."
            },
            {
              "term": "utility space",
              "definition": "Area reserved for building systems."
            },
            {
              "term": "coordination conflict",
              "definition": "A clash between drawings or systems."
            }
          ],
          "homework": {
            "title": "Mark basic MEP zones on a small residential plan: utility area, plumbing wall, panel location, HVAC space, and fixture notes",
            "instructions": "Mark basic MEP zones on a small residential plan: utility area, plumbing wall, panel location, HVAC space, and fixture notes.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "MEP awareness": 7,
              "conflict avoidance": 5,
              "labels": 4,
              "notes": 4
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-adv-09",
          "unit": 9,
          "title": "Site Plan and Grading Notes",
          "sourceRefs": [
            "buildingConstruction",
            "autocadResidential"
          ],
          "objectives": [
            "Create a site plan with property lines and building location.",
            "Show access, utilities, setbacks, and drainage notes.",
            "Connect site analysis to final documentation."
          ],
          "lesson": "The site plan proves where the project sits and how it relates to property, access, utilities, and water movement.",
          "vocabulary": [
            {
              "term": "property line",
              "definition": "Legal boundary of a lot."
            },
            {
              "term": "easement",
              "definition": "Legal right for limited use of part of a property."
            },
            {
              "term": "utility connection",
              "definition": "Link to water, sewer, power, gas, or other service."
            },
            {
              "term": "contour",
              "definition": "Line connecting points of equal elevation."
            },
            {
              "term": "grading note",
              "definition": "Instruction about shaping land or drainage."
            }
          ],
          "homework": {
            "title": "Create a site plan with property lines, setbacks, building footprint, driveway, north arrow, utilities, and drainage arrows",
            "instructions": "Create a site plan with property lines, setbacks, building footprint, driveway, north arrow, utilities, and drainage arrows.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "site completeness": 8,
              "setbacks": 4,
              "drainage/access": 5,
              "graphic clarity": 3
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-adv-10",
          "unit": 10,
          "title": "Plotting and Publishing the Set",
          "sourceRefs": [
            "autocadResidential"
          ],
          "objectives": [
            "Prepare sheets for print/export.",
            "Use consistent scale and title blocks.",
            "Check drawing set before publishing."
          ],
          "lesson": "Publishing is the final quality-control gate. Students check line weights, scale, title blocks, sheet order, missing notes, and PDF output.",
          "vocabulary": [
            {
              "term": "plot",
              "definition": "Print or export a drawing sheet."
            },
            {
              "term": "PDF set",
              "definition": "Digital drawing package."
            },
            {
              "term": "print scale",
              "definition": "Scale used when producing a sheet."
            },
            {
              "term": "lineweight display",
              "definition": "Printed thickness of CAD lines."
            },
            {
              "term": "quality-control checklist",
              "definition": "List used to catch mistakes before release."
            }
          ],
          "homework": {
            "title": "Export a PDF drawing set and complete the pre-publish checklist",
            "instructions": "Export a PDF drawing set and complete the pre-publish checklist.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "plot setup": 5,
              "PDF quality": 5,
              "checklist": 5,
              "sheet consistency": 5
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-adv-11",
          "unit": 11,
          "title": "Portfolio Presentation",
          "sourceRefs": [
            "architecturalGraphics"
          ],
          "objectives": [
            "Select strongest work.",
            "Organize a portfolio spread.",
            "Write short design descriptions."
          ],
          "lesson": "Portfolio work needs selection and order. Students learn to show process, final drawings, and explanations without burying the viewer in clutter.",
          "vocabulary": [
            {
              "term": "portfolio",
              "definition": "Curated collection of design work."
            },
            {
              "term": "process work",
              "definition": "Sketches and diagrams showing development."
            },
            {
              "term": "final plate",
              "definition": "Finished drawing or board."
            },
            {
              "term": "caption",
              "definition": "Short explanation under an image."
            },
            {
              "term": "visual sequence",
              "definition": "Order that guides the viewer through the work."
            }
          ],
          "homework": {
            "title": "Create a four-page portfolio section for the architecture/drafting project",
            "instructions": "Create a four-page portfolio section for the architecture/drafting project.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "work selection": 5,
              "layout": 5,
              "captions": 5,
              "professional polish": 5
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        },
        {
          "id": "ad-adv-12",
          "unit": 12,
          "title": "Capstone: Permit-Style Residential Set",
          "sourceRefs": [
            "architecturalGraphics",
            "formSpaceOrder",
            "buildingConstruction",
            "autocadResidential"
          ],
          "objectives": [
            "Produce a complete capstone drawing set.",
            "Coordinate plans, elevations, sections, details, schedules, and site plan.",
            "Defend design decisions in a final review."
          ],
          "lesson": "The advanced capstone is a serious drawing package: not a licensed permit guarantee, but a strong education-style permit set simulation.",
          "vocabulary": [
            {
              "term": "capstone",
              "definition": "Final major project proving course mastery."
            },
            {
              "term": "permit-style set",
              "definition": "Educational drawing package modeled after construction documentation."
            },
            {
              "term": "coordination review",
              "definition": "Final check for conflicts across drawings."
            },
            {
              "term": "design defense",
              "definition": "Explanation of design choices."
            },
            {
              "term": "completion certificate",
              "definition": "Record of successful course completion."
            }
          ],
          "homework": {
            "title": "Submit final capstone: cover sheet, code worksheet, site plan, floor plan, RCP, roof plan, elevations, section, wall details, schedules, and portfolio page",
            "instructions": "Submit final capstone: cover sheet, code worksheet, site plan, floor plan, RCP, roof plan, elevations, section, wall details, schedules, and portfolio page.",
            "submissionType": "drawing/CAD upload or teacher review",
            "points": 20,
            "rubric": {
              "drawing set completeness": 8,
              "coordination": 5,
              "technical clarity": 5,
              "presentation/defense": 2
            }
          },
          "masteryScore": 70,
          "quizQuestionCount": 5
        }
      ]
    }
  },
  "questionBank": [
    {
      "id": "AD-BAS-001",
      "level": "basic",
      "classId": "ad-basic-01",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Drawing Tools and Drafting Setup",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'drafting scale' mean?",
      "options": [
        "It is unrelated to how a drawing is read.",
        "A measuring tool used to draw objects smaller than full size.",
        "It is only needed after the project is finished.",
        "It is used only to decorate the sheet."
      ],
      "answer": "A measuring tool used to draw objects smaller than full size.",
      "explanation": "drafting scale means A measuring tool used to draw objects smaller than full size. This term is part of the working language for Drawing Tools and Drafting Setup.",
      "points": 1,
      "remediation": "Review Drawing Tools and Drafting Setup and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-002",
      "level": "basic",
      "classId": "ad-basic-01",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Drawing Tools and Drafting Setup",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Drawing Tools and Drafting Setup'?",
      "options": [
        "Choose paint colors before studying drawings.",
        "Use decoration instead of clear architectural communication.",
        "Skip the drawing process and only memorize terms.",
        "Identify drafting tools and drawing surfaces."
      ],
      "answer": "Identify drafting tools and drawing surfaces.",
      "explanation": "The correct goal is: Identify drafting tools and drawing surfaces. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Drawing Tools and Drafting Setup and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-003",
      "level": "basic",
      "classId": "ad-basic-01",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Drawing Tools and Drafting Setup",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Drawing Tools and Drafting Setup'?",
      "options": [
        "Only read the title of the lesson.",
        "Guess answers without drawing anything.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Avoid labels so the viewer has to interpret everything alone."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Drawing Tools and Drafting Setup and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-004",
      "level": "basic",
      "classId": "ad-basic-01",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Drawing Tools and Drafting Setup",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "A student wants to prove mastery of 'Drawing Tools and Drafting Setup'. What should the student submit?",
      "options": [
        "A completed, labeled drawing or document that applies the lesson objective.",
        "A drawing with no labels or scale.",
        "A guess with no explanation.",
        "A blank page with only a name."
      ],
      "answer": "A completed, labeled drawing or document that applies the lesson objective.",
      "explanation": "The platform should test usable skill, not just memory. The student must submit work that demonstrates the objective.",
      "points": 1,
      "remediation": "Review Drawing Tools and Drafting Setup and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-005",
      "level": "basic",
      "classId": "ad-basic-02",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Line Types and Line Weights",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'line weight' mean?",
      "options": [
        "It replaces the need for dimensions.",
        "It is only needed after the project is finished.",
        "The darkness or thickness of a line.",
        "It is only a color choice."
      ],
      "answer": "The darkness or thickness of a line.",
      "explanation": "line weight means The darkness or thickness of a line. This term is part of the working language for Line Types and Line Weights.",
      "points": 1,
      "remediation": "Review Line Types and Line Weights and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-006",
      "level": "basic",
      "classId": "ad-basic-02",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Line Types and Line Weights",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Line Types and Line Weights'?",
      "options": [
        "Choose paint colors before studying drawings.",
        "Identify common architectural line types.",
        "Use decoration instead of clear architectural communication.",
        "Skip the drawing process and only memorize terms."
      ],
      "answer": "Identify common architectural line types.",
      "explanation": "The correct goal is: Identify common architectural line types. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Line Types and Line Weights and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-007",
      "level": "basic",
      "classId": "ad-basic-02",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Line Types and Line Weights",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Line Types and Line Weights'?",
      "options": [
        "Avoid labels so the viewer has to interpret everything alone.",
        "Guess answers without drawing anything.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Only read the title of the lesson."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Line Types and Line Weights and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-008",
      "level": "basic",
      "classId": "ad-basic-02",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Line Types and Line Weights",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "A floor plan uses the same thickness for cut walls, furniture, dimensions, and labels. What is the main problem?",
      "options": [
        "The north arrow is always wrong.",
        "The drawing has poor visual hierarchy.",
        "The drawing cannot have doors.",
        "The room is automatically too small."
      ],
      "answer": "The drawing has poor visual hierarchy.",
      "explanation": "Line weight hierarchy helps the reader see cut elements, visible edges, and supporting notes in the right order.",
      "points": 1,
      "remediation": "Review Line Types and Line Weights and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-009",
      "level": "basic",
      "classId": "ad-basic-03",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Architectural Scale and Measurement",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'scale' mean?",
      "options": [
        "The relationship between drawing size and real size.",
        "It replaces the need for dimensions.",
        "It is used only to decorate the sheet.",
        "It is only a color choice."
      ],
      "answer": "The relationship between drawing size and real size.",
      "explanation": "scale means The relationship between drawing size and real size. This term is part of the working language for Architectural Scale and Measurement.",
      "points": 1,
      "remediation": "Review Architectural Scale and Measurement and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-010",
      "level": "basic",
      "classId": "ad-basic-03",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Architectural Scale and Measurement",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Architectural Scale and Measurement'?",
      "options": [
        "Choose paint colors before studying drawings.",
        "Skip the drawing process and only memorize terms.",
        "Use decoration instead of clear architectural communication.",
        "Read common architectural scales."
      ],
      "answer": "Read common architectural scales.",
      "explanation": "The correct goal is: Read common architectural scales. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Architectural Scale and Measurement and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-011",
      "level": "basic",
      "classId": "ad-basic-03",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Architectural Scale and Measurement",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Architectural Scale and Measurement'?",
      "options": [
        "Only read the title of the lesson.",
        "Guess answers without drawing anything.",
        "Avoid labels so the viewer has to interpret everything alone.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Architectural Scale and Measurement and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-012",
      "level": "basic",
      "classId": "ad-basic-03",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Architectural Scale and Measurement",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "Why must a drawing include an accurate scale note?",
      "options": [
        "So the reader understands the relationship between drawn size and real size.",
        "So the drawing can ignore dimensions.",
        "So every sheet uses random sizes.",
        "So furniture does not need labels."
      ],
      "answer": "So the reader understands the relationship between drawn size and real size.",
      "explanation": "A scale note tells how the drawing maps to real dimensions, which keeps measurement and review consistent.",
      "points": 1,
      "remediation": "Review Architectural Scale and Measurement and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-013",
      "level": "basic",
      "classId": "ad-basic-04",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Plans, Sections, and Elevations",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'plan' mean?",
      "options": [
        "It is unrelated to how a drawing is read.",
        "It removes the need for a site plan.",
        "A horizontal cut view looking down.",
        "It is only a color choice."
      ],
      "answer": "A horizontal cut view looking down.",
      "explanation": "plan means A horizontal cut view looking down. This term is part of the working language for Plans, Sections, and Elevations.",
      "points": 1,
      "remediation": "Review Plans, Sections, and Elevations and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-014",
      "level": "basic",
      "classId": "ad-basic-04",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Plans, Sections, and Elevations",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Plans, Sections, and Elevations'?",
      "options": [
        "Use decoration instead of clear architectural communication.",
        "Explain the difference between plan, section, and elevation.",
        "Skip the drawing process and only memorize terms.",
        "Choose paint colors before studying drawings."
      ],
      "answer": "Explain the difference between plan, section, and elevation.",
      "explanation": "The correct goal is: Explain the difference between plan, section, and elevation. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Plans, Sections, and Elevations and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-015",
      "level": "basic",
      "classId": "ad-basic-04",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Plans, Sections, and Elevations",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Plans, Sections, and Elevations'?",
      "options": [
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Only read the title of the lesson.",
        "Guess answers without drawing anything.",
        "Avoid labels so the viewer has to interpret everything alone."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Plans, Sections, and Elevations and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-016",
      "level": "basic",
      "classId": "ad-basic-04",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Plans, Sections, and Elevations",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "What does a section drawing reveal that a floor plan cannot fully show?",
      "options": [
        "Only the north arrow.",
        "Only the project name.",
        "Only the furniture fabric.",
        "Vertical relationships and assemblies through the building."
      ],
      "answer": "Vertical relationships and assemblies through the building.",
      "explanation": "Sections cut vertically so students can show heights, foundations, floors, walls, roofs, and assembly relationships.",
      "points": 1,
      "remediation": "Review Plans, Sections, and Elevations and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-017",
      "level": "basic",
      "classId": "ad-basic-05",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Freehand Sketching and Observation",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'contour drawing' mean?",
      "options": [
        "A drawing focused on visible edges and outlines.",
        "It is used only to decorate the sheet.",
        "It replaces the need for dimensions.",
        "It removes the need for a site plan."
      ],
      "answer": "A drawing focused on visible edges and outlines.",
      "explanation": "contour drawing means A drawing focused on visible edges and outlines. This term is part of the working language for Freehand Sketching and Observation.",
      "points": 1,
      "remediation": "Review Freehand Sketching and Observation and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-018",
      "level": "basic",
      "classId": "ad-basic-05",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Freehand Sketching and Observation",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Freehand Sketching and Observation'?",
      "options": [
        "Sketch from observation.",
        "Skip the drawing process and only memorize terms.",
        "Use decoration instead of clear architectural communication.",
        "Choose paint colors before studying drawings."
      ],
      "answer": "Sketch from observation.",
      "explanation": "The correct goal is: Sketch from observation. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Freehand Sketching and Observation and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-019",
      "level": "basic",
      "classId": "ad-basic-05",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Freehand Sketching and Observation",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Freehand Sketching and Observation'?",
      "options": [
        "Only read the title of the lesson.",
        "Guess answers without drawing anything.",
        "Avoid labels so the viewer has to interpret everything alone.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Freehand Sketching and Observation and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-020",
      "level": "basic",
      "classId": "ad-basic-05",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Freehand Sketching and Observation",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "A student wants to prove mastery of 'Freehand Sketching and Observation'. What should the student submit?",
      "options": [
        "A drawing with no labels or scale.",
        "A blank page with only a name.",
        "A guess with no explanation.",
        "A completed, labeled drawing or document that applies the lesson objective."
      ],
      "answer": "A completed, labeled drawing or document that applies the lesson objective.",
      "explanation": "The platform should test usable skill, not just memory. The student must submit work that demonstrates the objective.",
      "points": 1,
      "remediation": "Review Freehand Sketching and Observation and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-021",
      "level": "basic",
      "classId": "ad-basic-06",
      "book": "Architecture: Form, Space, and Order",
      "sourceRef": "formSpaceOrder",
      "sourceTopic": "Point, Line, Plane, and Volume",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'point' mean?",
      "options": [
        "It means every line should look the same.",
        "It is unrelated to how a drawing is read.",
        "It replaces the need for dimensions.",
        "A position in space."
      ],
      "answer": "A position in space.",
      "explanation": "point means A position in space. This term is part of the working language for Point, Line, Plane, and Volume.",
      "points": 1,
      "remediation": "Review Point, Line, Plane, and Volume and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-022",
      "level": "basic",
      "classId": "ad-basic-06",
      "book": "Architecture: Form, Space, and Order",
      "sourceRef": "formSpaceOrder",
      "sourceTopic": "Point, Line, Plane, and Volume",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Point, Line, Plane, and Volume'?",
      "options": [
        "Choose paint colors before studying drawings.",
        "Define primary design elements.",
        "Skip the drawing process and only memorize terms.",
        "Use decoration instead of clear architectural communication."
      ],
      "answer": "Define primary design elements.",
      "explanation": "The correct goal is: Define primary design elements. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Point, Line, Plane, and Volume and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-023",
      "level": "basic",
      "classId": "ad-basic-06",
      "book": "Architecture: Form, Space, and Order",
      "sourceRef": "formSpaceOrder",
      "sourceTopic": "Point, Line, Plane, and Volume",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Point, Line, Plane, and Volume'?",
      "options": [
        "Guess answers without drawing anything.",
        "Only read the title of the lesson.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Avoid labels so the viewer has to interpret everything alone."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Point, Line, Plane, and Volume and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-024",
      "level": "basic",
      "classId": "ad-basic-06",
      "book": "Architecture: Form, Space, and Order",
      "sourceRef": "formSpaceOrder",
      "sourceTopic": "Point, Line, Plane, and Volume",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "A floor plan uses the same thickness for cut walls, furniture, dimensions, and labels. What is the main problem?",
      "options": [
        "The drawing cannot have doors.",
        "The north arrow is always wrong.",
        "The drawing has poor visual hierarchy.",
        "The room is automatically too small."
      ],
      "answer": "The drawing has poor visual hierarchy.",
      "explanation": "Line weight hierarchy helps the reader see cut elements, visible edges, and supporting notes in the right order.",
      "points": 1,
      "remediation": "Review Point, Line, Plane, and Volume and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-025",
      "level": "basic",
      "classId": "ad-basic-07",
      "book": "Architecture: Form, Space, and Order",
      "sourceRef": "formSpaceOrder",
      "sourceTopic": "Shape, Form, and Spatial Vocabulary",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'shape' mean?",
      "options": [
        "A flat outline or figure.",
        "It is unrelated to how a drawing is read.",
        "It is a furniture style, not a drawing concept.",
        "It replaces the need for dimensions."
      ],
      "answer": "A flat outline or figure.",
      "explanation": "shape means A flat outline or figure. This term is part of the working language for Shape, Form, and Spatial Vocabulary.",
      "points": 1,
      "remediation": "Review Shape, Form, and Spatial Vocabulary and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-026",
      "level": "basic",
      "classId": "ad-basic-07",
      "book": "Architecture: Form, Space, and Order",
      "sourceRef": "formSpaceOrder",
      "sourceTopic": "Shape, Form, and Spatial Vocabulary",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Shape, Form, and Spatial Vocabulary'?",
      "options": [
        "Choose paint colors before studying drawings.",
        "Skip the drawing process and only memorize terms.",
        "Use decoration instead of clear architectural communication.",
        "Identify primary shapes and forms."
      ],
      "answer": "Identify primary shapes and forms.",
      "explanation": "The correct goal is: Identify primary shapes and forms. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Shape, Form, and Spatial Vocabulary and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-027",
      "level": "basic",
      "classId": "ad-basic-07",
      "book": "Architecture: Form, Space, and Order",
      "sourceRef": "formSpaceOrder",
      "sourceTopic": "Shape, Form, and Spatial Vocabulary",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Shape, Form, and Spatial Vocabulary'?",
      "options": [
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Guess answers without drawing anything.",
        "Only read the title of the lesson.",
        "Avoid labels so the viewer has to interpret everything alone."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Shape, Form, and Spatial Vocabulary and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-028",
      "level": "basic",
      "classId": "ad-basic-07",
      "book": "Architecture: Form, Space, and Order",
      "sourceRef": "formSpaceOrder",
      "sourceTopic": "Shape, Form, and Spatial Vocabulary",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "A student wants to prove mastery of 'Shape, Form, and Spatial Vocabulary'. What should the student submit?",
      "options": [
        "A drawing with no labels or scale.",
        "A blank page with only a name.",
        "A completed, labeled drawing or document that applies the lesson objective.",
        "A guess with no explanation."
      ],
      "answer": "A completed, labeled drawing or document that applies the lesson objective.",
      "explanation": "The platform should test usable skill, not just memory. The student must submit work that demonstrates the objective.",
      "points": 1,
      "remediation": "Review Shape, Form, and Spatial Vocabulary and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-029",
      "level": "basic",
      "classId": "ad-basic-08",
      "book": "Architecture: Form, Space, and Order",
      "sourceRef": "formSpaceOrder",
      "sourceTopic": "Room Planning and Human Scale",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'human scale' mean?",
      "options": [
        "It is used only to decorate the sheet.",
        "It means every line should look the same.",
        "It is only a color choice.",
        "Design sized around the human body and movement."
      ],
      "answer": "Design sized around the human body and movement.",
      "explanation": "human scale means Design sized around the human body and movement. This term is part of the working language for Room Planning and Human Scale.",
      "points": 1,
      "remediation": "Review Room Planning and Human Scale and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-030",
      "level": "basic",
      "classId": "ad-basic-08",
      "book": "Architecture: Form, Space, and Order",
      "sourceRef": "formSpaceOrder",
      "sourceTopic": "Room Planning and Human Scale",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Room Planning and Human Scale'?",
      "options": [
        "Apply human scale to room planning.",
        "Skip the drawing process and only memorize terms.",
        "Use decoration instead of clear architectural communication.",
        "Choose paint colors before studying drawings."
      ],
      "answer": "Apply human scale to room planning.",
      "explanation": "The correct goal is: Apply human scale to room planning. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Room Planning and Human Scale and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-031",
      "level": "basic",
      "classId": "ad-basic-08",
      "book": "Architecture: Form, Space, and Order",
      "sourceRef": "formSpaceOrder",
      "sourceTopic": "Room Planning and Human Scale",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Room Planning and Human Scale'?",
      "options": [
        "Only read the title of the lesson.",
        "Guess answers without drawing anything.",
        "Avoid labels so the viewer has to interpret everything alone.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Room Planning and Human Scale and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-032",
      "level": "basic",
      "classId": "ad-basic-08",
      "book": "Architecture: Form, Space, and Order",
      "sourceRef": "formSpaceOrder",
      "sourceTopic": "Room Planning and Human Scale",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "Why must a drawing include an accurate scale note?",
      "options": [
        "So every sheet uses random sizes.",
        "So the drawing can ignore dimensions.",
        "So furniture does not need labels.",
        "So the reader understands the relationship between drawn size and real size."
      ],
      "answer": "So the reader understands the relationship between drawn size and real size.",
      "explanation": "A scale note tells how the drawing maps to real dimensions, which keeps measurement and review consistent.",
      "points": 1,
      "remediation": "Review Room Planning and Human Scale and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-033",
      "level": "basic",
      "classId": "ad-basic-09",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "One-Point Perspective",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'horizon line' mean?",
      "options": [
        "It is only a color choice.",
        "It is unrelated to how a drawing is read.",
        "The viewer's eye level in a perspective drawing.",
        "It removes the need for a site plan."
      ],
      "answer": "The viewer's eye level in a perspective drawing.",
      "explanation": "horizon line means The viewer's eye level in a perspective drawing. This term is part of the working language for One-Point Perspective.",
      "points": 1,
      "remediation": "Review One-Point Perspective and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-034",
      "level": "basic",
      "classId": "ad-basic-09",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "One-Point Perspective",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'One-Point Perspective'?",
      "options": [
        "Choose paint colors before studying drawings.",
        "Identify horizon line and vanishing point.",
        "Use decoration instead of clear architectural communication.",
        "Skip the drawing process and only memorize terms."
      ],
      "answer": "Identify horizon line and vanishing point.",
      "explanation": "The correct goal is: Identify horizon line and vanishing point. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review One-Point Perspective and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-035",
      "level": "basic",
      "classId": "ad-basic-09",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "One-Point Perspective",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'One-Point Perspective'?",
      "options": [
        "Avoid labels so the viewer has to interpret everything alone.",
        "Guess answers without drawing anything.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Only read the title of the lesson."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review One-Point Perspective and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-036",
      "level": "basic",
      "classId": "ad-basic-09",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "One-Point Perspective",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "What does a vanishing point control in a perspective drawing?",
      "options": [
        "The direction where parallel depth lines appear to meet.",
        "The construction cost only.",
        "The plumbing fixture count.",
        "The legal property line."
      ],
      "answer": "The direction where parallel depth lines appear to meet.",
      "explanation": "Vanishing points organize converging lines and help create the illusion of depth.",
      "points": 1,
      "remediation": "Review One-Point Perspective and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-037",
      "level": "basic",
      "classId": "ad-basic-10",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Two-Point Perspective",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'two-point perspective' mean?",
      "options": [
        "It replaces the need for dimensions.",
        "It is unrelated to how a drawing is read.",
        "Perspective using two vanishing points.",
        "It is only needed after the project is finished."
      ],
      "answer": "Perspective using two vanishing points.",
      "explanation": "two-point perspective means Perspective using two vanishing points. This term is part of the working language for Two-Point Perspective.",
      "points": 1,
      "remediation": "Review Two-Point Perspective and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-038",
      "level": "basic",
      "classId": "ad-basic-10",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Two-Point Perspective",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Two-Point Perspective'?",
      "options": [
        "Set up two vanishing points.",
        "Choose paint colors before studying drawings.",
        "Use decoration instead of clear architectural communication.",
        "Skip the drawing process and only memorize terms."
      ],
      "answer": "Set up two vanishing points.",
      "explanation": "The correct goal is: Set up two vanishing points. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Two-Point Perspective and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-039",
      "level": "basic",
      "classId": "ad-basic-10",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Two-Point Perspective",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Two-Point Perspective'?",
      "options": [
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Guess answers without drawing anything.",
        "Avoid labels so the viewer has to interpret everything alone.",
        "Only read the title of the lesson."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Two-Point Perspective and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-040",
      "level": "basic",
      "classId": "ad-basic-10",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Two-Point Perspective",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "What does a vanishing point control in a perspective drawing?",
      "options": [
        "The plumbing fixture count.",
        "The direction where parallel depth lines appear to meet.",
        "The legal property line.",
        "The construction cost only."
      ],
      "answer": "The direction where parallel depth lines appear to meet.",
      "explanation": "Vanishing points organize converging lines and help create the illusion of depth.",
      "points": 1,
      "remediation": "Review Two-Point Perspective and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-041",
      "level": "basic",
      "classId": "ad-basic-11",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Basic Presentation Boards",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'presentation board' mean?",
      "options": [
        "It is only a color choice.",
        "A formatted sheet that explains a project visually.",
        "It means every line should look the same.",
        "It removes the need for a site plan."
      ],
      "answer": "A formatted sheet that explains a project visually.",
      "explanation": "presentation board means A formatted sheet that explains a project visually. This term is part of the working language for Basic Presentation Boards.",
      "points": 1,
      "remediation": "Review Basic Presentation Boards and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-042",
      "level": "basic",
      "classId": "ad-basic-11",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Basic Presentation Boards",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Basic Presentation Boards'?",
      "options": [
        "Use decoration instead of clear architectural communication.",
        "Choose paint colors before studying drawings.",
        "Organize drawings on a presentation sheet.",
        "Skip the drawing process and only memorize terms."
      ],
      "answer": "Organize drawings on a presentation sheet.",
      "explanation": "The correct goal is: Organize drawings on a presentation sheet. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Basic Presentation Boards and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-043",
      "level": "basic",
      "classId": "ad-basic-11",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Basic Presentation Boards",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Basic Presentation Boards'?",
      "options": [
        "Only read the title of the lesson.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Avoid labels so the viewer has to interpret everything alone.",
        "Guess answers without drawing anything."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Basic Presentation Boards and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-044",
      "level": "basic",
      "classId": "ad-basic-11",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Basic Presentation Boards",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "What makes an architectural presentation stronger?",
      "options": [
        "Removing all titles and labels.",
        "Clear layout, hierarchy, labels, captions, and selected drawings.",
        "Using random sizes without hierarchy.",
        "Crowding every drawing into one corner."
      ],
      "answer": "Clear layout, hierarchy, labels, captions, and selected drawings.",
      "explanation": "A strong presentation guides the viewer through the project with order and clarity.",
      "points": 1,
      "remediation": "Review Basic Presentation Boards and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-045",
      "level": "basic",
      "classId": "ad-basic-12",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Basic Studio Project: Small Room Set",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'studio project' mean?",
      "options": [
        "A design assignment completed through drawings and presentation.",
        "It is used only to decorate the sheet.",
        "It means every line should look the same.",
        "It removes the need for a site plan."
      ],
      "answer": "A design assignment completed through drawings and presentation.",
      "explanation": "studio project means A design assignment completed through drawings and presentation. This term is part of the working language for Basic Studio Project: Small Room Set.",
      "points": 1,
      "remediation": "Review Basic Studio Project: Small Room Set and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-046",
      "level": "basic",
      "classId": "ad-basic-12",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Basic Studio Project: Small Room Set",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Basic Studio Project: Small Room Set'?",
      "options": [
        "Produce a mini architectural drawing set.",
        "Skip the drawing process and only memorize terms.",
        "Use decoration instead of clear architectural communication.",
        "Choose paint colors before studying drawings."
      ],
      "answer": "Produce a mini architectural drawing set.",
      "explanation": "The correct goal is: Produce a mini architectural drawing set. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Basic Studio Project: Small Room Set and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-047",
      "level": "basic",
      "classId": "ad-basic-12",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Basic Studio Project: Small Room Set",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Basic Studio Project: Small Room Set'?",
      "options": [
        "Only read the title of the lesson.",
        "Avoid labels so the viewer has to interpret everything alone.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Guess answers without drawing anything."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Basic Studio Project: Small Room Set and redo the practice/homework task."
    },
    {
      "id": "AD-BAS-048",
      "level": "basic",
      "classId": "ad-basic-12",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Basic Studio Project: Small Room Set",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "A student wants to prove mastery of 'Basic Studio Project: Small Room Set'. What should the student submit?",
      "options": [
        "A blank page with only a name.",
        "A drawing with no labels or scale.",
        "A completed, labeled drawing or document that applies the lesson objective.",
        "A guess with no explanation."
      ],
      "answer": "A completed, labeled drawing or document that applies the lesson objective.",
      "explanation": "The platform should test usable skill, not just memory. The student must submit work that demonstrates the objective.",
      "points": 1,
      "remediation": "Review Basic Studio Project: Small Room Set and redo the practice/homework task."
    },
    {
      "id": "AD-INT-001",
      "level": "intermediate",
      "classId": "ad-int-01",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Site Analysis",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'site analysis' mean?",
      "options": [
        "It means every line should look the same.",
        "It is a furniture style, not a drawing concept.",
        "It is only needed after the project is finished.",
        "Study of conditions affecting a building site."
      ],
      "answer": "Study of conditions affecting a building site.",
      "explanation": "site analysis means Study of conditions affecting a building site. This term is part of the working language for Site Analysis.",
      "points": 1,
      "remediation": "Review Site Analysis and redo the practice/homework task."
    },
    {
      "id": "AD-INT-002",
      "level": "intermediate",
      "classId": "ad-int-01",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Site Analysis",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Site Analysis'?",
      "options": [
        "Identify physical and regulatory site factors.",
        "Choose paint colors before studying drawings.",
        "Skip the drawing process and only memorize terms.",
        "Use decoration instead of clear architectural communication."
      ],
      "answer": "Identify physical and regulatory site factors.",
      "explanation": "The correct goal is: Identify physical and regulatory site factors. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Site Analysis and redo the practice/homework task."
    },
    {
      "id": "AD-INT-003",
      "level": "intermediate",
      "classId": "ad-int-01",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Site Analysis",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Site Analysis'?",
      "options": [
        "Only read the title of the lesson.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Guess answers without drawing anything.",
        "Avoid labels so the viewer has to interpret everything alone."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Site Analysis and redo the practice/homework task."
    },
    {
      "id": "AD-INT-004",
      "level": "intermediate",
      "classId": "ad-int-01",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Site Analysis",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "Which site factor most directly affects where stormwater flows?",
      "options": [
        "Furniture style",
        "Door knob finish",
        "Room name",
        "Topography"
      ],
      "answer": "Topography",
      "explanation": "Topography describes land shape and slope, which strongly affects drainage and runoff.",
      "points": 1,
      "remediation": "Review Site Analysis and redo the practice/homework task."
    },
    {
      "id": "AD-INT-005",
      "level": "intermediate",
      "classId": "ad-int-02",
      "book": "Architecture: Form, Space, and Order",
      "sourceRef": "formSpaceOrder",
      "sourceTopic": "Programming and Bubble Diagrams",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'program' mean?",
      "options": [
        "It replaces the need for dimensions.",
        "The list of required spaces and functions.",
        "It is only a color choice.",
        "It is only needed after the project is finished."
      ],
      "answer": "The list of required spaces and functions.",
      "explanation": "program means The list of required spaces and functions. This term is part of the working language for Programming and Bubble Diagrams.",
      "points": 1,
      "remediation": "Review Programming and Bubble Diagrams and redo the practice/homework task."
    },
    {
      "id": "AD-INT-006",
      "level": "intermediate",
      "classId": "ad-int-02",
      "book": "Architecture: Form, Space, and Order",
      "sourceRef": "formSpaceOrder",
      "sourceTopic": "Programming and Bubble Diagrams",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Programming and Bubble Diagrams'?",
      "options": [
        "Use decoration instead of clear architectural communication.",
        "List required spaces for a project.",
        "Skip the drawing process and only memorize terms.",
        "Choose paint colors before studying drawings."
      ],
      "answer": "List required spaces for a project.",
      "explanation": "The correct goal is: List required spaces for a project. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Programming and Bubble Diagrams and redo the practice/homework task."
    },
    {
      "id": "AD-INT-007",
      "level": "intermediate",
      "classId": "ad-int-02",
      "book": "Architecture: Form, Space, and Order",
      "sourceRef": "formSpaceOrder",
      "sourceTopic": "Programming and Bubble Diagrams",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Programming and Bubble Diagrams'?",
      "options": [
        "Guess answers without drawing anything.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Avoid labels so the viewer has to interpret everything alone.",
        "Only read the title of the lesson."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Programming and Bubble Diagrams and redo the practice/homework task."
    },
    {
      "id": "AD-INT-008",
      "level": "intermediate",
      "classId": "ad-int-02",
      "book": "Architecture: Form, Space, and Order",
      "sourceRef": "formSpaceOrder",
      "sourceTopic": "Programming and Bubble Diagrams",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "A student wants to prove mastery of 'Programming and Bubble Diagrams'. What should the student submit?",
      "options": [
        "A guess with no explanation.",
        "A blank page with only a name.",
        "A completed, labeled drawing or document that applies the lesson objective.",
        "A drawing with no labels or scale."
      ],
      "answer": "A completed, labeled drawing or document that applies the lesson objective.",
      "explanation": "The platform should test usable skill, not just memory. The student must submit work that demonstrates the objective.",
      "points": 1,
      "remediation": "Review Programming and Bubble Diagrams and redo the practice/homework task."
    },
    {
      "id": "AD-INT-009",
      "level": "intermediate",
      "classId": "ad-int-03",
      "book": "Architecture: Form, Space, and Order",
      "sourceRef": "formSpaceOrder",
      "sourceTopic": "Circulation and Spatial Organization",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'circulation path' mean?",
      "options": [
        "It is unrelated to how a drawing is read.",
        "It is a furniture style, not a drawing concept.",
        "The route people take through a building.",
        "It is used only to decorate the sheet."
      ],
      "answer": "The route people take through a building.",
      "explanation": "circulation path means The route people take through a building. This term is part of the working language for Circulation and Spatial Organization.",
      "points": 1,
      "remediation": "Review Circulation and Spatial Organization and redo the practice/homework task."
    },
    {
      "id": "AD-INT-010",
      "level": "intermediate",
      "classId": "ad-int-03",
      "book": "Architecture: Form, Space, and Order",
      "sourceRef": "formSpaceOrder",
      "sourceTopic": "Circulation and Spatial Organization",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Circulation and Spatial Organization'?",
      "options": [
        "Identify circulation paths.",
        "Use decoration instead of clear architectural communication.",
        "Choose paint colors before studying drawings.",
        "Skip the drawing process and only memorize terms."
      ],
      "answer": "Identify circulation paths.",
      "explanation": "The correct goal is: Identify circulation paths. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Circulation and Spatial Organization and redo the practice/homework task."
    },
    {
      "id": "AD-INT-011",
      "level": "intermediate",
      "classId": "ad-int-03",
      "book": "Architecture: Form, Space, and Order",
      "sourceRef": "formSpaceOrder",
      "sourceTopic": "Circulation and Spatial Organization",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Circulation and Spatial Organization'?",
      "options": [
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Avoid labels so the viewer has to interpret everything alone.",
        "Guess answers without drawing anything.",
        "Only read the title of the lesson."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Circulation and Spatial Organization and redo the practice/homework task."
    },
    {
      "id": "AD-INT-012",
      "level": "intermediate",
      "classId": "ad-int-03",
      "book": "Architecture: Form, Space, and Order",
      "sourceRef": "formSpaceOrder",
      "sourceTopic": "Circulation and Spatial Organization",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "A student wants to prove mastery of 'Circulation and Spatial Organization'. What should the student submit?",
      "options": [
        "A drawing with no labels or scale.",
        "A guess with no explanation.",
        "A completed, labeled drawing or document that applies the lesson objective.",
        "A blank page with only a name."
      ],
      "answer": "A completed, labeled drawing or document that applies the lesson objective.",
      "explanation": "The platform should test usable skill, not just memory. The student must submit work that demonstrates the objective.",
      "points": 1,
      "remediation": "Review Circulation and Spatial Organization and redo the practice/homework task."
    },
    {
      "id": "AD-INT-013",
      "level": "intermediate",
      "classId": "ad-int-04",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Residential Floor Plan Development",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'floor plan' mean?",
      "options": [
        "It is used only to decorate the sheet.",
        "Horizontal cut view showing layout.",
        "It is unrelated to how a drawing is read.",
        "It removes the need for a site plan."
      ],
      "answer": "Horizontal cut view showing layout.",
      "explanation": "floor plan means Horizontal cut view showing layout. This term is part of the working language for Residential Floor Plan Development.",
      "points": 1,
      "remediation": "Review Residential Floor Plan Development and redo the practice/homework task."
    },
    {
      "id": "AD-INT-014",
      "level": "intermediate",
      "classId": "ad-int-04",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Residential Floor Plan Development",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Residential Floor Plan Development'?",
      "options": [
        "Develop a residential plan from bubble diagram to floor plan.",
        "Use decoration instead of clear architectural communication.",
        "Skip the drawing process and only memorize terms.",
        "Choose paint colors before studying drawings."
      ],
      "answer": "Develop a residential plan from bubble diagram to floor plan.",
      "explanation": "The correct goal is: Develop a residential plan from bubble diagram to floor plan. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Residential Floor Plan Development and redo the practice/homework task."
    },
    {
      "id": "AD-INT-015",
      "level": "intermediate",
      "classId": "ad-int-04",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Residential Floor Plan Development",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Residential Floor Plan Development'?",
      "options": [
        "Avoid labels so the viewer has to interpret everything alone.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Only read the title of the lesson.",
        "Guess answers without drawing anything."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Residential Floor Plan Development and redo the practice/homework task."
    },
    {
      "id": "AD-INT-016",
      "level": "intermediate",
      "classId": "ad-int-04",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Residential Floor Plan Development",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "A student wants to prove mastery of 'Residential Floor Plan Development'. What should the student submit?",
      "options": [
        "A completed, labeled drawing or document that applies the lesson objective.",
        "A guess with no explanation.",
        "A drawing with no labels or scale.",
        "A blank page with only a name."
      ],
      "answer": "A completed, labeled drawing or document that applies the lesson objective.",
      "explanation": "The platform should test usable skill, not just memory. The student must submit work that demonstrates the objective.",
      "points": 1,
      "remediation": "Review Residential Floor Plan Development and redo the practice/homework task."
    },
    {
      "id": "AD-INT-017",
      "level": "intermediate",
      "classId": "ad-int-05",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "AutoCAD Basics",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'CAD' mean?",
      "options": [
        "It is only a color choice.",
        "It removes the need for a site plan.",
        "Computer-aided design/drafting.",
        "It is a furniture style, not a drawing concept."
      ],
      "answer": "Computer-aided design/drafting.",
      "explanation": "CAD means Computer-aided design/drafting. This term is part of the working language for AutoCAD Basics.",
      "points": 1,
      "remediation": "Review AutoCAD Basics and redo the practice/homework task."
    },
    {
      "id": "AD-INT-018",
      "level": "intermediate",
      "classId": "ad-int-05",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "AutoCAD Basics",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'AutoCAD Basics'?",
      "options": [
        "Use decoration instead of clear architectural communication.",
        "Choose paint colors before studying drawings.",
        "Set up a drawing file.",
        "Skip the drawing process and only memorize terms."
      ],
      "answer": "Set up a drawing file.",
      "explanation": "The correct goal is: Set up a drawing file. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review AutoCAD Basics and redo the practice/homework task."
    },
    {
      "id": "AD-INT-019",
      "level": "intermediate",
      "classId": "ad-int-05",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "AutoCAD Basics",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'AutoCAD Basics'?",
      "options": [
        "Only read the title of the lesson.",
        "Guess answers without drawing anything.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Avoid labels so the viewer has to interpret everything alone."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review AutoCAD Basics and redo the practice/homework task."
    },
    {
      "id": "AD-INT-020",
      "level": "intermediate",
      "classId": "ad-int-05",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "AutoCAD Basics",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "Why should CAD drawings use organized layers?",
      "options": [
        "Layers make dimensions unnecessary.",
        "Layers delete the need for a title block.",
        "Layers are only for coloring presentation boards.",
        "Layers control visibility, line appearance, and drawing organization."
      ],
      "answer": "Layers control visibility, line appearance, and drawing organization.",
      "explanation": "Layers keep walls, doors, windows, dimensions, notes, and furniture manageable instead of turning the file into spaghetti.",
      "points": 1,
      "remediation": "Review AutoCAD Basics and redo the practice/homework task."
    },
    {
      "id": "AD-INT-021",
      "level": "intermediate",
      "classId": "ad-int-06",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "CAD Walls, Doors, and Windows",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'wall thickness' mean?",
      "options": [
        "It is only needed after the project is finished.",
        "It is a furniture style, not a drawing concept.",
        "The drawn width of a wall assembly.",
        "It is only a color choice."
      ],
      "answer": "The drawn width of a wall assembly.",
      "explanation": "wall thickness means The drawn width of a wall assembly. This term is part of the working language for CAD Walls, Doors, and Windows.",
      "points": 1,
      "remediation": "Review CAD Walls, Doors, and Windows and redo the practice/homework task."
    },
    {
      "id": "AD-INT-022",
      "level": "intermediate",
      "classId": "ad-int-06",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "CAD Walls, Doors, and Windows",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'CAD Walls, Doors, and Windows'?",
      "options": [
        "Use decoration instead of clear architectural communication.",
        "Draft walls accurately.",
        "Skip the drawing process and only memorize terms.",
        "Choose paint colors before studying drawings."
      ],
      "answer": "Draft walls accurately.",
      "explanation": "The correct goal is: Draft walls accurately. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review CAD Walls, Doors, and Windows and redo the practice/homework task."
    },
    {
      "id": "AD-INT-023",
      "level": "intermediate",
      "classId": "ad-int-06",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "CAD Walls, Doors, and Windows",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'CAD Walls, Doors, and Windows'?",
      "options": [
        "Only read the title of the lesson.",
        "Guess answers without drawing anything.",
        "Avoid labels so the viewer has to interpret everything alone.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review CAD Walls, Doors, and Windows and redo the practice/homework task."
    },
    {
      "id": "AD-INT-024",
      "level": "intermediate",
      "classId": "ad-int-06",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "CAD Walls, Doors, and Windows",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "Why should CAD drawings use organized layers?",
      "options": [
        "Layers delete the need for a title block.",
        "Layers make dimensions unnecessary.",
        "Layers control visibility, line appearance, and drawing organization.",
        "Layers are only for coloring presentation boards."
      ],
      "answer": "Layers control visibility, line appearance, and drawing organization.",
      "explanation": "Layers keep walls, doors, windows, dimensions, notes, and furniture manageable instead of turning the file into spaghetti.",
      "points": 1,
      "remediation": "Review CAD Walls, Doors, and Windows and redo the practice/homework task."
    },
    {
      "id": "AD-INT-025",
      "level": "intermediate",
      "classId": "ad-int-07",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Dimensions, Annotations, and Layers",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'annotation' mean?",
      "options": [
        "It removes the need for a site plan.",
        "It is only needed after the project is finished.",
        "It is only a color choice.",
        "Text or symbols that explain a drawing."
      ],
      "answer": "Text or symbols that explain a drawing.",
      "explanation": "annotation means Text or symbols that explain a drawing. This term is part of the working language for Dimensions, Annotations, and Layers.",
      "points": 1,
      "remediation": "Review Dimensions, Annotations, and Layers and redo the practice/homework task."
    },
    {
      "id": "AD-INT-026",
      "level": "intermediate",
      "classId": "ad-int-07",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Dimensions, Annotations, and Layers",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Dimensions, Annotations, and Layers'?",
      "options": [
        "Add readable dimensions and notes.",
        "Choose paint colors before studying drawings.",
        "Skip the drawing process and only memorize terms.",
        "Use decoration instead of clear architectural communication."
      ],
      "answer": "Add readable dimensions and notes.",
      "explanation": "The correct goal is: Add readable dimensions and notes. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Dimensions, Annotations, and Layers and redo the practice/homework task."
    },
    {
      "id": "AD-INT-027",
      "level": "intermediate",
      "classId": "ad-int-07",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Dimensions, Annotations, and Layers",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Dimensions, Annotations, and Layers'?",
      "options": [
        "Guess answers without drawing anything.",
        "Only read the title of the lesson.",
        "Avoid labels so the viewer has to interpret everything alone.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Dimensions, Annotations, and Layers and redo the practice/homework task."
    },
    {
      "id": "AD-INT-028",
      "level": "intermediate",
      "classId": "ad-int-07",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Dimensions, Annotations, and Layers",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "A student wants to prove mastery of 'Dimensions, Annotations, and Layers'. What should the student submit?",
      "options": [
        "A completed, labeled drawing or document that applies the lesson objective.",
        "A blank page with only a name.",
        "A guess with no explanation.",
        "A drawing with no labels or scale."
      ],
      "answer": "A completed, labeled drawing or document that applies the lesson objective.",
      "explanation": "The platform should test usable skill, not just memory. The student must submit work that demonstrates the objective.",
      "points": 1,
      "remediation": "Review Dimensions, Annotations, and Layers and redo the practice/homework task."
    },
    {
      "id": "AD-INT-029",
      "level": "intermediate",
      "classId": "ad-int-08",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Exterior Elevations",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'exterior elevation' mean?",
      "options": [
        "It replaces the need for dimensions.",
        "Flat view of a building side.",
        "It is unrelated to how a drawing is read.",
        "It is a furniture style, not a drawing concept."
      ],
      "answer": "Flat view of a building side.",
      "explanation": "exterior elevation means Flat view of a building side. This term is part of the working language for Exterior Elevations.",
      "points": 1,
      "remediation": "Review Exterior Elevations and redo the practice/homework task."
    },
    {
      "id": "AD-INT-030",
      "level": "intermediate",
      "classId": "ad-int-08",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Exterior Elevations",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Exterior Elevations'?",
      "options": [
        "Project elevations from a floor plan.",
        "Use decoration instead of clear architectural communication.",
        "Choose paint colors before studying drawings.",
        "Skip the drawing process and only memorize terms."
      ],
      "answer": "Project elevations from a floor plan.",
      "explanation": "The correct goal is: Project elevations from a floor plan. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Exterior Elevations and redo the practice/homework task."
    },
    {
      "id": "AD-INT-031",
      "level": "intermediate",
      "classId": "ad-int-08",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Exterior Elevations",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Exterior Elevations'?",
      "options": [
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Guess answers without drawing anything.",
        "Only read the title of the lesson.",
        "Avoid labels so the viewer has to interpret everything alone."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Exterior Elevations and redo the practice/homework task."
    },
    {
      "id": "AD-INT-032",
      "level": "intermediate",
      "classId": "ad-int-08",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Exterior Elevations",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "A student wants to prove mastery of 'Exterior Elevations'. What should the student submit?",
      "options": [
        "A completed, labeled drawing or document that applies the lesson objective.",
        "A drawing with no labels or scale.",
        "A guess with no explanation.",
        "A blank page with only a name."
      ],
      "answer": "A completed, labeled drawing or document that applies the lesson objective.",
      "explanation": "The platform should test usable skill, not just memory. The student must submit work that demonstrates the objective.",
      "points": 1,
      "remediation": "Review Exterior Elevations and redo the practice/homework task."
    },
    {
      "id": "AD-INT-033",
      "level": "intermediate",
      "classId": "ad-int-09",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Building Sections",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'building section' mean?",
      "options": [
        "It removes the need for a site plan.",
        "Vertical cut through a building.",
        "It is used only to decorate the sheet.",
        "It is only a color choice."
      ],
      "answer": "Vertical cut through a building.",
      "explanation": "building section means Vertical cut through a building. This term is part of the working language for Building Sections.",
      "points": 1,
      "remediation": "Review Building Sections and redo the practice/homework task."
    },
    {
      "id": "AD-INT-034",
      "level": "intermediate",
      "classId": "ad-int-09",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Building Sections",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Building Sections'?",
      "options": [
        "Use decoration instead of clear architectural communication.",
        "Skip the drawing process and only memorize terms.",
        "Cut a section through a building.",
        "Choose paint colors before studying drawings."
      ],
      "answer": "Cut a section through a building.",
      "explanation": "The correct goal is: Cut a section through a building. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Building Sections and redo the practice/homework task."
    },
    {
      "id": "AD-INT-035",
      "level": "intermediate",
      "classId": "ad-int-09",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Building Sections",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Building Sections'?",
      "options": [
        "Only read the title of the lesson.",
        "Avoid labels so the viewer has to interpret everything alone.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Guess answers without drawing anything."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Building Sections and redo the practice/homework task."
    },
    {
      "id": "AD-INT-036",
      "level": "intermediate",
      "classId": "ad-int-09",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Building Sections",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "What does a section drawing reveal that a floor plan cannot fully show?",
      "options": [
        "Only the north arrow.",
        "Only the furniture fabric.",
        "Vertical relationships and assemblies through the building.",
        "Only the project name."
      ],
      "answer": "Vertical relationships and assemblies through the building.",
      "explanation": "Sections cut vertically so students can show heights, foundations, floors, walls, roofs, and assembly relationships.",
      "points": 1,
      "remediation": "Review Building Sections and redo the practice/homework task."
    },
    {
      "id": "AD-INT-037",
      "level": "intermediate",
      "classId": "ad-int-10",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Foundations, Floors, and Walls",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'foundation' mean?",
      "options": [
        "It is used only to decorate the sheet.",
        "It replaces the need for dimensions.",
        "System transferring building loads to the ground.",
        "It is only needed after the project is finished."
      ],
      "answer": "System transferring building loads to the ground.",
      "explanation": "foundation means System transferring building loads to the ground. This term is part of the working language for Foundations, Floors, and Walls.",
      "points": 1,
      "remediation": "Review Foundations, Floors, and Walls and redo the practice/homework task."
    },
    {
      "id": "AD-INT-038",
      "level": "intermediate",
      "classId": "ad-int-10",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Foundations, Floors, and Walls",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Foundations, Floors, and Walls'?",
      "options": [
        "Skip the drawing process and only memorize terms.",
        "Identify major foundation types.",
        "Choose paint colors before studying drawings.",
        "Use decoration instead of clear architectural communication."
      ],
      "answer": "Identify major foundation types.",
      "explanation": "The correct goal is: Identify major foundation types. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Foundations, Floors, and Walls and redo the practice/homework task."
    },
    {
      "id": "AD-INT-039",
      "level": "intermediate",
      "classId": "ad-int-10",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Foundations, Floors, and Walls",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Foundations, Floors, and Walls'?",
      "options": [
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Avoid labels so the viewer has to interpret everything alone.",
        "Only read the title of the lesson.",
        "Guess answers without drawing anything."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Foundations, Floors, and Walls and redo the practice/homework task."
    },
    {
      "id": "AD-INT-040",
      "level": "intermediate",
      "classId": "ad-int-10",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Foundations, Floors, and Walls",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "A student wants to prove mastery of 'Foundations, Floors, and Walls'. What should the student submit?",
      "options": [
        "A completed, labeled drawing or document that applies the lesson objective.",
        "A drawing with no labels or scale.",
        "A guess with no explanation.",
        "A blank page with only a name."
      ],
      "answer": "A completed, labeled drawing or document that applies the lesson objective.",
      "explanation": "The platform should test usable skill, not just memory. The student must submit work that demonstrates the objective.",
      "points": 1,
      "remediation": "Review Foundations, Floors, and Walls and redo the practice/homework task."
    },
    {
      "id": "AD-INT-041",
      "level": "intermediate",
      "classId": "ad-int-11",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Roofs, Moisture, and Thermal Protection",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'flashing' mean?",
      "options": [
        "It is only a color choice.",
        "It removes the need for a site plan.",
        "It is a furniture style, not a drawing concept.",
        "Material used to redirect water at joints and penetrations."
      ],
      "answer": "Material used to redirect water at joints and penetrations.",
      "explanation": "flashing means Material used to redirect water at joints and penetrations. This term is part of the working language for Roofs, Moisture, and Thermal Protection.",
      "points": 1,
      "remediation": "Review Roofs, Moisture, and Thermal Protection and redo the practice/homework task."
    },
    {
      "id": "AD-INT-042",
      "level": "intermediate",
      "classId": "ad-int-11",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Roofs, Moisture, and Thermal Protection",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Roofs, Moisture, and Thermal Protection'?",
      "options": [
        "Identify basic roof forms.",
        "Skip the drawing process and only memorize terms.",
        "Use decoration instead of clear architectural communication.",
        "Choose paint colors before studying drawings."
      ],
      "answer": "Identify basic roof forms.",
      "explanation": "The correct goal is: Identify basic roof forms. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Roofs, Moisture, and Thermal Protection and redo the practice/homework task."
    },
    {
      "id": "AD-INT-043",
      "level": "intermediate",
      "classId": "ad-int-11",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Roofs, Moisture, and Thermal Protection",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Roofs, Moisture, and Thermal Protection'?",
      "options": [
        "Only read the title of the lesson.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Avoid labels so the viewer has to interpret everything alone.",
        "Guess answers without drawing anything."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Roofs, Moisture, and Thermal Protection and redo the practice/homework task."
    },
    {
      "id": "AD-INT-044",
      "level": "intermediate",
      "classId": "ad-int-11",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Roofs, Moisture, and Thermal Protection",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "Why is flashing important in building construction drawings?",
      "options": [
        "It redirects water at vulnerable joints and penetrations.",
        "It is only a furniture symbol.",
        "It makes rooms larger.",
        "It replaces all structural framing."
      ],
      "answer": "It redirects water at vulnerable joints and penetrations.",
      "explanation": "Flashing is used where water is likely to enter, such as roof edges, chimneys, windows, doors, and changes in plane.",
      "points": 1,
      "remediation": "Review Roofs, Moisture, and Thermal Protection and redo the practice/homework task."
    },
    {
      "id": "AD-INT-045",
      "level": "intermediate",
      "classId": "ad-int-12",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Intermediate Residential Sheet Set",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'sheet set' mean?",
      "options": [
        "It means every line should look the same.",
        "It is a furniture style, not a drawing concept.",
        "A coordinated group of project drawings.",
        "It is unrelated to how a drawing is read."
      ],
      "answer": "A coordinated group of project drawings.",
      "explanation": "sheet set means A coordinated group of project drawings. This term is part of the working language for Intermediate Residential Sheet Set.",
      "points": 1,
      "remediation": "Review Intermediate Residential Sheet Set and redo the practice/homework task."
    },
    {
      "id": "AD-INT-046",
      "level": "intermediate",
      "classId": "ad-int-12",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Intermediate Residential Sheet Set",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Intermediate Residential Sheet Set'?",
      "options": [
        "Skip the drawing process and only memorize terms.",
        "Assemble a coordinated residential drawing set.",
        "Use decoration instead of clear architectural communication.",
        "Choose paint colors before studying drawings."
      ],
      "answer": "Assemble a coordinated residential drawing set.",
      "explanation": "The correct goal is: Assemble a coordinated residential drawing set. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Intermediate Residential Sheet Set and redo the practice/homework task."
    },
    {
      "id": "AD-INT-047",
      "level": "intermediate",
      "classId": "ad-int-12",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Intermediate Residential Sheet Set",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Intermediate Residential Sheet Set'?",
      "options": [
        "Guess answers without drawing anything.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Only read the title of the lesson.",
        "Avoid labels so the viewer has to interpret everything alone."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Intermediate Residential Sheet Set and redo the practice/homework task."
    },
    {
      "id": "AD-INT-048",
      "level": "intermediate",
      "classId": "ad-int-12",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Intermediate Residential Sheet Set",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "A student wants to prove mastery of 'Intermediate Residential Sheet Set'. What should the student submit?",
      "options": [
        "A completed, labeled drawing or document that applies the lesson objective.",
        "A drawing with no labels or scale.",
        "A guess with no explanation.",
        "A blank page with only a name."
      ],
      "answer": "A completed, labeled drawing or document that applies the lesson objective.",
      "explanation": "The platform should test usable skill, not just memory. The student must submit work that demonstrates the objective.",
      "points": 1,
      "remediation": "Review Intermediate Residential Sheet Set and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-001",
      "level": "advanced",
      "classId": "ad-adv-01",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Code and Zoning Basics",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'zoning' mean?",
      "options": [
        "It is unrelated to how a drawing is read.",
        "It replaces the need for dimensions.",
        "Local rules governing land use and building placement.",
        "It means every line should look the same."
      ],
      "answer": "Local rules governing land use and building placement.",
      "explanation": "zoning means Local rules governing land use and building placement. This term is part of the working language for Code and Zoning Basics.",
      "points": 1,
      "remediation": "Review Code and Zoning Basics and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-002",
      "level": "advanced",
      "classId": "ad-adv-01",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Code and Zoning Basics",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Code and Zoning Basics'?",
      "options": [
        "Complete a basic code worksheet.",
        "Skip the drawing process and only memorize terms.",
        "Choose paint colors before studying drawings.",
        "Use decoration instead of clear architectural communication."
      ],
      "answer": "Complete a basic code worksheet.",
      "explanation": "The correct goal is: Complete a basic code worksheet. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Code and Zoning Basics and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-003",
      "level": "advanced",
      "classId": "ad-adv-01",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Code and Zoning Basics",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Code and Zoning Basics'?",
      "options": [
        "Guess answers without drawing anything.",
        "Avoid labels so the viewer has to interpret everything alone.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Only read the title of the lesson."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Code and Zoning Basics and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-004",
      "level": "advanced",
      "classId": "ad-adv-01",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Code and Zoning Basics",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "Why should code and zoning be checked early in design?",
      "options": [
        "They only matter after construction is complete.",
        "They replace the need for site drawings.",
        "They are only used for choosing colors.",
        "They can control use, setbacks, egress, size, and building placement."
      ],
      "answer": "They can control use, setbacks, egress, size, and building placement.",
      "explanation": "Checking constraints early prevents drawings from developing in a direction that cannot be approved or built.",
      "points": 1,
      "remediation": "Review Code and Zoning Basics and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-005",
      "level": "advanced",
      "classId": "ad-adv-02",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Advanced Sheet Organization",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'sheet index' mean?",
      "options": [
        "It is a furniture style, not a drawing concept.",
        "It is only needed after the project is finished.",
        "List of drawings in a set.",
        "It replaces the need for dimensions."
      ],
      "answer": "List of drawings in a set.",
      "explanation": "sheet index means List of drawings in a set. This term is part of the working language for Advanced Sheet Organization.",
      "points": 1,
      "remediation": "Review Advanced Sheet Organization and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-006",
      "level": "advanced",
      "classId": "ad-adv-02",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Advanced Sheet Organization",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Advanced Sheet Organization'?",
      "options": [
        "Use decoration instead of clear architectural communication.",
        "Choose paint colors before studying drawings.",
        "Create a professional sheet index.",
        "Skip the drawing process and only memorize terms."
      ],
      "answer": "Create a professional sheet index.",
      "explanation": "The correct goal is: Create a professional sheet index. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Advanced Sheet Organization and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-007",
      "level": "advanced",
      "classId": "ad-adv-02",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Advanced Sheet Organization",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Advanced Sheet Organization'?",
      "options": [
        "Avoid labels so the viewer has to interpret everything alone.",
        "Only read the title of the lesson.",
        "Guess answers without drawing anything.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Advanced Sheet Organization and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-008",
      "level": "advanced",
      "classId": "ad-adv-02",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Advanced Sheet Organization",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "A student wants to prove mastery of 'Advanced Sheet Organization'. What should the student submit?",
      "options": [
        "A completed, labeled drawing or document that applies the lesson objective.",
        "A drawing with no labels or scale.",
        "A blank page with only a name.",
        "A guess with no explanation."
      ],
      "answer": "A completed, labeled drawing or document that applies the lesson objective.",
      "explanation": "The platform should test usable skill, not just memory. The student must submit work that demonstrates the objective.",
      "points": 1,
      "remediation": "Review Advanced Sheet Organization and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-009",
      "level": "advanced",
      "classId": "ad-adv-03",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Wall Sections and Construction Details",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'detail drawing' mean?",
      "options": [
        "It is a furniture style, not a drawing concept.",
        "Enlarged drawing explaining a construction condition.",
        "It is unrelated to how a drawing is read.",
        "It replaces the need for dimensions."
      ],
      "answer": "Enlarged drawing explaining a construction condition.",
      "explanation": "detail drawing means Enlarged drawing explaining a construction condition. This term is part of the working language for Wall Sections and Construction Details.",
      "points": 1,
      "remediation": "Review Wall Sections and Construction Details and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-010",
      "level": "advanced",
      "classId": "ad-adv-03",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Wall Sections and Construction Details",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Wall Sections and Construction Details'?",
      "options": [
        "Skip the drawing process and only memorize terms.",
        "Develop a wall section.",
        "Use decoration instead of clear architectural communication.",
        "Choose paint colors before studying drawings."
      ],
      "answer": "Develop a wall section.",
      "explanation": "The correct goal is: Develop a wall section. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Wall Sections and Construction Details and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-011",
      "level": "advanced",
      "classId": "ad-adv-03",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Wall Sections and Construction Details",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Wall Sections and Construction Details'?",
      "options": [
        "Avoid labels so the viewer has to interpret everything alone.",
        "Only read the title of the lesson.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Guess answers without drawing anything."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Wall Sections and Construction Details and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-012",
      "level": "advanced",
      "classId": "ad-adv-03",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Wall Sections and Construction Details",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "What does a section drawing reveal that a floor plan cannot fully show?",
      "options": [
        "Only the north arrow.",
        "Vertical relationships and assemblies through the building.",
        "Only the furniture fabric.",
        "Only the project name."
      ],
      "answer": "Vertical relationships and assemblies through the building.",
      "explanation": "Sections cut vertically so students can show heights, foundations, floors, walls, roofs, and assembly relationships.",
      "points": 1,
      "remediation": "Review Wall Sections and Construction Details and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-013",
      "level": "advanced",
      "classId": "ad-adv-04",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Door and Window Schedules",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'schedule' mean?",
      "options": [
        "It means every line should look the same.",
        "It is a furniture style, not a drawing concept.",
        "It is only needed after the project is finished.",
        "Table listing repeated project items."
      ],
      "answer": "Table listing repeated project items.",
      "explanation": "schedule means Table listing repeated project items. This term is part of the working language for Door and Window Schedules.",
      "points": 1,
      "remediation": "Review Door and Window Schedules and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-014",
      "level": "advanced",
      "classId": "ad-adv-04",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Door and Window Schedules",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Door and Window Schedules'?",
      "options": [
        "Create schedule tables.",
        "Use decoration instead of clear architectural communication.",
        "Choose paint colors before studying drawings.",
        "Skip the drawing process and only memorize terms."
      ],
      "answer": "Create schedule tables.",
      "explanation": "The correct goal is: Create schedule tables. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Door and Window Schedules and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-015",
      "level": "advanced",
      "classId": "ad-adv-04",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Door and Window Schedules",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Door and Window Schedules'?",
      "options": [
        "Only read the title of the lesson.",
        "Guess answers without drawing anything.",
        "Avoid labels so the viewer has to interpret everything alone.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Door and Window Schedules and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-016",
      "level": "advanced",
      "classId": "ad-adv-04",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Door and Window Schedules",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "What is the purpose of a door or window schedule?",
      "options": [
        "To replace all floor plans.",
        "To organize repeated item information in a clear table.",
        "To hide project information.",
        "To show only decorative colors."
      ],
      "answer": "To organize repeated item information in a clear table.",
      "explanation": "Schedules coordinate tags, sizes, types, materials, and remarks so drawings and data agree.",
      "points": 1,
      "remediation": "Review Door and Window Schedules and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-017",
      "level": "advanced",
      "classId": "ad-adv-05",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Reflected Ceiling Plans",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'reflected ceiling plan' mean?",
      "options": [
        "It removes the need for a site plan.",
        "It means every line should look the same.",
        "Drawing showing ceiling layout as if reflected onto the floor plane.",
        "It is a furniture style, not a drawing concept."
      ],
      "answer": "Drawing showing ceiling layout as if reflected onto the floor plane.",
      "explanation": "reflected ceiling plan means Drawing showing ceiling layout as if reflected onto the floor plane. This term is part of the working language for Reflected Ceiling Plans.",
      "points": 1,
      "remediation": "Review Reflected Ceiling Plans and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-018",
      "level": "advanced",
      "classId": "ad-adv-05",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Reflected Ceiling Plans",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Reflected Ceiling Plans'?",
      "options": [
        "Explain reflected ceiling plan logic.",
        "Skip the drawing process and only memorize terms.",
        "Use decoration instead of clear architectural communication.",
        "Choose paint colors before studying drawings."
      ],
      "answer": "Explain reflected ceiling plan logic.",
      "explanation": "The correct goal is: Explain reflected ceiling plan logic. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Reflected Ceiling Plans and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-019",
      "level": "advanced",
      "classId": "ad-adv-05",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Reflected Ceiling Plans",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Reflected Ceiling Plans'?",
      "options": [
        "Guess answers without drawing anything.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Avoid labels so the viewer has to interpret everything alone.",
        "Only read the title of the lesson."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Reflected Ceiling Plans and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-020",
      "level": "advanced",
      "classId": "ad-adv-05",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Reflected Ceiling Plans",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "A student wants to prove mastery of 'Reflected Ceiling Plans'. What should the student submit?",
      "options": [
        "A drawing with no labels or scale.",
        "A completed, labeled drawing or document that applies the lesson objective.",
        "A blank page with only a name.",
        "A guess with no explanation."
      ],
      "answer": "A completed, labeled drawing or document that applies the lesson objective.",
      "explanation": "The platform should test usable skill, not just memory. The student must submit work that demonstrates the objective.",
      "points": 1,
      "remediation": "Review Reflected Ceiling Plans and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-021",
      "level": "advanced",
      "classId": "ad-adv-06",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Roof Plan and Drainage",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'roof plan' mean?",
      "options": [
        "It is unrelated to how a drawing is read.",
        "It is used only to decorate the sheet.",
        "It is only needed after the project is finished.",
        "Top view of roof surfaces and drainage."
      ],
      "answer": "Top view of roof surfaces and drainage.",
      "explanation": "roof plan means Top view of roof surfaces and drainage. This term is part of the working language for Roof Plan and Drainage.",
      "points": 1,
      "remediation": "Review Roof Plan and Drainage and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-022",
      "level": "advanced",
      "classId": "ad-adv-06",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Roof Plan and Drainage",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Roof Plan and Drainage'?",
      "options": [
        "Skip the drawing process and only memorize terms.",
        "Use decoration instead of clear architectural communication.",
        "Choose paint colors before studying drawings.",
        "Draw roof plan geometry."
      ],
      "answer": "Draw roof plan geometry.",
      "explanation": "The correct goal is: Draw roof plan geometry. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Roof Plan and Drainage and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-023",
      "level": "advanced",
      "classId": "ad-adv-06",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Roof Plan and Drainage",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Roof Plan and Drainage'?",
      "options": [
        "Guess answers without drawing anything.",
        "Only read the title of the lesson.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Avoid labels so the viewer has to interpret everything alone."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Roof Plan and Drainage and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-024",
      "level": "advanced",
      "classId": "ad-adv-06",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Roof Plan and Drainage",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "Why is flashing important in building construction drawings?",
      "options": [
        "It makes rooms larger.",
        "It is only a furniture symbol.",
        "It redirects water at vulnerable joints and penetrations.",
        "It replaces all structural framing."
      ],
      "answer": "It redirects water at vulnerable joints and penetrations.",
      "explanation": "Flashing is used where water is likely to enter, such as roof edges, chimneys, windows, doors, and changes in plane.",
      "points": 1,
      "remediation": "Review Roof Plan and Drainage and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-025",
      "level": "advanced",
      "classId": "ad-adv-07",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Materials and Finish Schedules",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'finish schedule' mean?",
      "options": [
        "It means every line should look the same.",
        "Table showing finish materials by room.",
        "It replaces the need for dimensions.",
        "It is used only to decorate the sheet."
      ],
      "answer": "Table showing finish materials by room.",
      "explanation": "finish schedule means Table showing finish materials by room. This term is part of the working language for Materials and Finish Schedules.",
      "points": 1,
      "remediation": "Review Materials and Finish Schedules and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-026",
      "level": "advanced",
      "classId": "ad-adv-07",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Materials and Finish Schedules",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Materials and Finish Schedules'?",
      "options": [
        "Use decoration instead of clear architectural communication.",
        "Identify finish materials.",
        "Choose paint colors before studying drawings.",
        "Skip the drawing process and only memorize terms."
      ],
      "answer": "Identify finish materials.",
      "explanation": "The correct goal is: Identify finish materials. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Materials and Finish Schedules and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-027",
      "level": "advanced",
      "classId": "ad-adv-07",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Materials and Finish Schedules",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Materials and Finish Schedules'?",
      "options": [
        "Guess answers without drawing anything.",
        "Only read the title of the lesson.",
        "Avoid labels so the viewer has to interpret everything alone.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Materials and Finish Schedules and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-028",
      "level": "advanced",
      "classId": "ad-adv-07",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Materials and Finish Schedules",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "What is the purpose of a door or window schedule?",
      "options": [
        "To show only decorative colors.",
        "To organize repeated item information in a clear table.",
        "To hide project information.",
        "To replace all floor plans."
      ],
      "answer": "To organize repeated item information in a clear table.",
      "explanation": "Schedules coordinate tags, sizes, types, materials, and remarks so drawings and data agree.",
      "points": 1,
      "remediation": "Review Materials and Finish Schedules and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-029",
      "level": "advanced",
      "classId": "ad-adv-08",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Basic MEP Coordination",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'MEP' mean?",
      "options": [
        "It removes the need for a site plan.",
        "Mechanical, electrical, and plumbing systems.",
        "It is only a color choice.",
        "It is a furniture style, not a drawing concept."
      ],
      "answer": "Mechanical, electrical, and plumbing systems.",
      "explanation": "MEP means Mechanical, electrical, and plumbing systems. This term is part of the working language for Basic MEP Coordination.",
      "points": 1,
      "remediation": "Review Basic MEP Coordination and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-030",
      "level": "advanced",
      "classId": "ad-adv-08",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Basic MEP Coordination",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Basic MEP Coordination'?",
      "options": [
        "Choose paint colors before studying drawings.",
        "Skip the drawing process and only memorize terms.",
        "Use decoration instead of clear architectural communication.",
        "Identify basic mechanical, electrical, and plumbing considerations."
      ],
      "answer": "Identify basic mechanical, electrical, and plumbing considerations.",
      "explanation": "The correct goal is: Identify basic mechanical, electrical, and plumbing considerations. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Basic MEP Coordination and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-031",
      "level": "advanced",
      "classId": "ad-adv-08",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Basic MEP Coordination",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Basic MEP Coordination'?",
      "options": [
        "Avoid labels so the viewer has to interpret everything alone.",
        "Guess answers without drawing anything.",
        "Only read the title of the lesson.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Basic MEP Coordination and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-032",
      "level": "advanced",
      "classId": "ad-adv-08",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Basic MEP Coordination",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "A student wants to prove mastery of 'Basic MEP Coordination'. What should the student submit?",
      "options": [
        "A drawing with no labels or scale.",
        "A blank page with only a name.",
        "A guess with no explanation.",
        "A completed, labeled drawing or document that applies the lesson objective."
      ],
      "answer": "A completed, labeled drawing or document that applies the lesson objective.",
      "explanation": "The platform should test usable skill, not just memory. The student must submit work that demonstrates the objective.",
      "points": 1,
      "remediation": "Review Basic MEP Coordination and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-033",
      "level": "advanced",
      "classId": "ad-adv-09",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Site Plan and Grading Notes",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'property line' mean?",
      "options": [
        "Legal boundary of a lot.",
        "It is used only to decorate the sheet.",
        "It is only needed after the project is finished.",
        "It is unrelated to how a drawing is read."
      ],
      "answer": "Legal boundary of a lot.",
      "explanation": "property line means Legal boundary of a lot. This term is part of the working language for Site Plan and Grading Notes.",
      "points": 1,
      "remediation": "Review Site Plan and Grading Notes and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-034",
      "level": "advanced",
      "classId": "ad-adv-09",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Site Plan and Grading Notes",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Site Plan and Grading Notes'?",
      "options": [
        "Create a site plan with property lines and building location.",
        "Use decoration instead of clear architectural communication.",
        "Skip the drawing process and only memorize terms.",
        "Choose paint colors before studying drawings."
      ],
      "answer": "Create a site plan with property lines and building location.",
      "explanation": "The correct goal is: Create a site plan with property lines and building location. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Site Plan and Grading Notes and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-035",
      "level": "advanced",
      "classId": "ad-adv-09",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Site Plan and Grading Notes",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Site Plan and Grading Notes'?",
      "options": [
        "Guess answers without drawing anything.",
        "Avoid labels so the viewer has to interpret everything alone.",
        "Only read the title of the lesson.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Site Plan and Grading Notes and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-036",
      "level": "advanced",
      "classId": "ad-adv-09",
      "book": "Building Construction Illustrated",
      "sourceRef": "buildingConstruction",
      "sourceTopic": "Site Plan and Grading Notes",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "Which site factor most directly affects where stormwater flows?",
      "options": [
        "Topography",
        "Door knob finish",
        "Room name",
        "Furniture style"
      ],
      "answer": "Topography",
      "explanation": "Topography describes land shape and slope, which strongly affects drainage and runoff.",
      "points": 1,
      "remediation": "Review Site Plan and Grading Notes and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-037",
      "level": "advanced",
      "classId": "ad-adv-10",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Plotting and Publishing the Set",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'plot' mean?",
      "options": [
        "It is only needed after the project is finished.",
        "It is a furniture style, not a drawing concept.",
        "It is unrelated to how a drawing is read.",
        "Print or export a drawing sheet."
      ],
      "answer": "Print or export a drawing sheet.",
      "explanation": "plot means Print or export a drawing sheet. This term is part of the working language for Plotting and Publishing the Set.",
      "points": 1,
      "remediation": "Review Plotting and Publishing the Set and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-038",
      "level": "advanced",
      "classId": "ad-adv-10",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Plotting and Publishing the Set",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Plotting and Publishing the Set'?",
      "options": [
        "Choose paint colors before studying drawings.",
        "Skip the drawing process and only memorize terms.",
        "Use decoration instead of clear architectural communication.",
        "Prepare sheets for print/export."
      ],
      "answer": "Prepare sheets for print/export.",
      "explanation": "The correct goal is: Prepare sheets for print/export. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Plotting and Publishing the Set and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-039",
      "level": "advanced",
      "classId": "ad-adv-10",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Plotting and Publishing the Set",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Plotting and Publishing the Set'?",
      "options": [
        "Avoid labels so the viewer has to interpret everything alone.",
        "Only read the title of the lesson.",
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Guess answers without drawing anything."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Plotting and Publishing the Set and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-040",
      "level": "advanced",
      "classId": "ad-adv-10",
      "book": "Residential Design Using AutoCAD 2026",
      "sourceRef": "autocadResidential",
      "sourceTopic": "Plotting and Publishing the Set",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "A student wants to prove mastery of 'Plotting and Publishing the Set'. What should the student submit?",
      "options": [
        "A blank page with only a name.",
        "A completed, labeled drawing or document that applies the lesson objective.",
        "A drawing with no labels or scale.",
        "A guess with no explanation."
      ],
      "answer": "A completed, labeled drawing or document that applies the lesson objective.",
      "explanation": "The platform should test usable skill, not just memory. The student must submit work that demonstrates the objective.",
      "points": 1,
      "remediation": "Review Plotting and Publishing the Set and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-041",
      "level": "advanced",
      "classId": "ad-adv-11",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Portfolio Presentation",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'portfolio' mean?",
      "options": [
        "Curated collection of design work.",
        "It is unrelated to how a drawing is read.",
        "It is used only to decorate the sheet.",
        "It is a furniture style, not a drawing concept."
      ],
      "answer": "Curated collection of design work.",
      "explanation": "portfolio means Curated collection of design work. This term is part of the working language for Portfolio Presentation.",
      "points": 1,
      "remediation": "Review Portfolio Presentation and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-042",
      "level": "advanced",
      "classId": "ad-adv-11",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Portfolio Presentation",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Portfolio Presentation'?",
      "options": [
        "Use decoration instead of clear architectural communication.",
        "Choose paint colors before studying drawings.",
        "Skip the drawing process and only memorize terms.",
        "Select strongest work."
      ],
      "answer": "Select strongest work.",
      "explanation": "The correct goal is: Select strongest work. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Portfolio Presentation and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-043",
      "level": "advanced",
      "classId": "ad-adv-11",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Portfolio Presentation",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Portfolio Presentation'?",
      "options": [
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Guess answers without drawing anything.",
        "Avoid labels so the viewer has to interpret everything alone.",
        "Only read the title of the lesson."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Portfolio Presentation and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-044",
      "level": "advanced",
      "classId": "ad-adv-11",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Portfolio Presentation",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "What makes an architectural presentation stronger?",
      "options": [
        "Using random sizes without hierarchy.",
        "Clear layout, hierarchy, labels, captions, and selected drawings.",
        "Removing all titles and labels.",
        "Crowding every drawing into one corner."
      ],
      "answer": "Clear layout, hierarchy, labels, captions, and selected drawings.",
      "explanation": "A strong presentation guides the viewer through the project with order and clarity.",
      "points": 1,
      "remediation": "Review Portfolio Presentation and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-045",
      "level": "advanced",
      "classId": "ad-adv-12",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Capstone: Permit-Style Residential Set",
      "skill": "vocabulary",
      "type": "multiple_choice",
      "question": "In architecture/drafting, what does 'capstone' mean?",
      "options": [
        "It is unrelated to how a drawing is read.",
        "It replaces the need for dimensions.",
        "Final major project proving course mastery.",
        "It means every line should look the same."
      ],
      "answer": "Final major project proving course mastery.",
      "explanation": "capstone means Final major project proving course mastery. This term is part of the working language for Capstone: Permit-Style Residential Set.",
      "points": 1,
      "remediation": "Review Capstone: Permit-Style Residential Set and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-046",
      "level": "advanced",
      "classId": "ad-adv-12",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Capstone: Permit-Style Residential Set",
      "skill": "concept",
      "type": "multiple_choice",
      "question": "Which statement best matches the main goal of 'Capstone: Permit-Style Residential Set'?",
      "options": [
        "Choose paint colors before studying drawings.",
        "Produce a complete capstone drawing set.",
        "Skip the drawing process and only memorize terms.",
        "Use decoration instead of clear architectural communication."
      ],
      "answer": "Produce a complete capstone drawing set.",
      "explanation": "The correct goal is: Produce a complete capstone drawing set. The lesson turns that goal into drawing practice and assessment.",
      "points": 1,
      "remediation": "Review Capstone: Permit-Style Residential Set and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-047",
      "level": "advanced",
      "classId": "ad-adv-12",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Capstone: Permit-Style Residential Set",
      "skill": "application",
      "type": "multiple_choice",
      "question": "What is the best homework approach after studying 'Capstone: Permit-Style Residential Set'?",
      "options": [
        "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
        "Avoid labels so the viewer has to interpret everything alone.",
        "Guess answers without drawing anything.",
        "Only read the title of the lesson."
      ],
      "answer": "Create a clear, labeled drawing or CAD task that demonstrates the lesson skill.",
      "explanation": "Architecture and drafting must be proven through visible work. A clear, labeled drawing or CAD task shows whether the student can apply the lesson.",
      "points": 1,
      "remediation": "Review Capstone: Permit-Style Residential Set and redo the practice/homework task."
    },
    {
      "id": "AD-ADV-048",
      "level": "advanced",
      "classId": "ad-adv-12",
      "book": "Architectural Graphics",
      "sourceRef": "architecturalGraphics",
      "sourceTopic": "Capstone: Permit-Style Residential Set",
      "skill": "scenario",
      "type": "multiple_choice",
      "question": "A student wants to prove mastery of 'Capstone: Permit-Style Residential Set'. What should the student submit?",
      "options": [
        "A drawing with no labels or scale.",
        "A completed, labeled drawing or document that applies the lesson objective.",
        "A guess with no explanation.",
        "A blank page with only a name."
      ],
      "answer": "A completed, labeled drawing or document that applies the lesson objective.",
      "explanation": "The platform should test usable skill, not just memory. The student must submit work that demonstrates the objective.",
      "points": 1,
      "remediation": "Review Capstone: Permit-Style Residential Set and redo the practice/homework task."
    }
  ]
};

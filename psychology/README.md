# Kingswell Academy Psychology Curriculum Pack

This is a ready-to-drop-in vanilla JavaScript psychology curriculum system for GitHub Pages or any static website.

## What it includes

- Basic, intermediate, and advanced psychology curriculum tracks
- Original lesson content
- Homework worksheets and rubrics
- 120-question original question bank: 40 basic, 40 intermediate, 40 advanced
- Lesson quizzes
- 40-question final tests by level
- Scoring system
- Answer explanations
- Review/remediation recommendations
- Local browser progress tracking using `localStorage`
- Completion tracking for lessons, homework, quizzes, final tests, and certificates

## Files

```txt
psychology/
  curriculum-data.js
  question-bank.js
  testing-engine.js
  psychology-app.js
  psychology.css
index.html
ADD_TO_EXISTING_SITE.html
```

## How to add to your existing website

1. Copy the `psychology` folder into your website root.
2. Add this to your existing HTML `<head>`:

```html
<link rel="stylesheet" href="./psychology/psychology.css">
```

3. Add this where the psychology course should appear:

```html
<section id="psychology-app"></section>
```

4. Add this before the closing `</body>` tag:

```html
<script type="module" src="./psychology/psychology-app.js"></script>
```

## Important copyright note

The book titles are used as a curriculum source map. The lessons and questions in this pack are original. Do not paste copyrighted book pages, questions, charts, or answer keys into the website unless you have permission or a license.

## Educational boundary

This platform teaches psychology concepts. It does not diagnose, treat, or replace qualified mental health care.

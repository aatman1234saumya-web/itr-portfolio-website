# Aatman Gupta - ITR Portfolio

## How to run
1. Extract the ZIP.
2. Open the `Aatman_ITR_Portfolio` folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.

No framework, server, database, package installation, or API key is required.

## Files
- `index.html` — semantic page structure and content
- `style.css` — responsive design, Flexbox, theme styling and media queries
- `script.js` — DOM events, theme toggle, filtering, counters and form validation

## JavaScript features to demonstrate in a viva
- DOM selection with `getElementById` and `querySelectorAll`
- Event listeners for click and submit events
- `classList` for dynamic CSS changes
- `localStorage` to remember the selected theme
- Course filtering and dynamic hour/course counters
- Regular-expression email validation
- `preventDefault()` for client-side form validation

## Important
The contact form is a front-end demonstration only and intentionally does not send or store personal data.

## Requirements matched to Section 8.1 of the ITR report

- Semantic HTML5 profile/portfolio layout (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`).
- CSS3 with Flexbox and media queries for desktop, tablet, and mobile layouts.
- Light/dark theme toggle, remembered with browser localStorage when available.
- Simple JavaScript form validator with inline errors and keyboard focus.
- Dynamic course filters, course/hour totals, message character counter, and footer year.

## Your 100-hour training pathway

| Course | Platform | Hours |
| --- | --- | ---: |
| HTML5 — The Language | Infosys Springboard | 13 |
| CSS3 | Infosys Springboard | 11 |
| JavaScript | Infosys Springboard | 16 |
| Applied AI: Generative, Creative, and Multimodal Intelligence | SWAYAM Plus / Amity University Online | 30 |
| Digital 101 | FutureSkills Prime / MeitY–NASSCOM | 30 |
| **Total** | **3 platforms** | **100** |

The AI and digital-literacy courses are presented as learning outcomes. This is a front-end website, as described in the report; it does not use an AI API or backend.

## Quick viva demonstration

1. Open the website and show the student profile and 100-hour training overview.
2. Toggle the theme and reload to demonstrate that the preference is remembered.
3. Select Web Development: 3 courses, 40 hours. Applied AI and Digital Skills each show 1 course, 30 hours. All restores 5 courses, 100 hours.
4. Narrow the browser window to demonstrate the responsive layout and mobile menu.
5. Submit the empty form to show errors. Enter a name, a valid email, and a message of at least 10 characters, then validate again.

## Simple project explanation

“My project is a responsive personal portfolio based on my 100-hour Industrial Training. HTML gives the content semantic structure. CSS provides styling, Flexbox, and responsive layouts. JavaScript adds the theme toggle, course filtering with live totals, and client-side form validation.”

## Likely questions

**What is the DOM?** The browser's representation of the HTML document. JavaScript selects and updates its elements.

**What is an event listener?** A function that runs when an action such as a click, input change, or submit occurs.

**How does the theme toggle work?** JavaScript changes the `dark` class on the body, and CSS variables supply the appropriate colours.

**What is localStorage?** Browser storage that persists the theme preference across reloads. Form contents are not saved.

**How does filtering work?** Cards have category and hour values in `data-*` attributes. JavaScript sets their `hidden` property and calculates totals for the visible cards.

**What is Flexbox?** A CSS layout system for arranging, aligning, and wrapping elements.

**What are media queries?** Conditional CSS rules, used here to change layouts at smaller viewport widths.

**Why call preventDefault()?** To stop the browser's normal form submission and page reload while JavaScript validates the fields.

**Why use textContent?** It inserts a plain string into the page without interpreting it as HTML.

**Does the contact form send messages?** No, it is a validation demo. The separate email link opens an email app. A real sending service would also require server-side validation.

## Opening the project

Extract the ZIP first, then double-click `index.html`. Keep `style.css` and `script.js` beside it. It works offline without installing anything. VS Code is only needed if you want to edit the code.

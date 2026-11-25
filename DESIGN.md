---
name: Two Keys
description: Websites with vibe, ownership built in. An OwnYourWeb studio.
colors:
  cream: "#F3EBDD"
  ink: "#1E1414"
  brick: "#9E2B25"
  blush: "#E7A39C"
  blush-soft: "#F1C9C3"
  mute: "#6B5A55"
  paper: "#D8CBBE"
  credit: "#9C8B84"
  card: "#EADFCC"
  field: "#E7D9C4"
  field-invalid: "#F6E4DC"
  plate: "color-mix(in srgb, #F3EBDD 70%, white)"
  form-sheet: "color-mix(in srgb, #F3EBDD 82%, white)"
  line: "#D9CBB6"
  ink-line: "#5A4A45"
typography:
  display:
    fontFamily: "Abril Fatface, Iowan Old Style, Palatino, Palatino Linotype, serif"
    fontSize: "clamp(3.4rem, 12vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "normal"
  display-section:
    fontFamily: "Abril Fatface, Iowan Old Style, Palatino, Palatino Linotype, serif"
    fontSize: "clamp(2.5rem, 7vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "normal"
  title:
    fontFamily: "Abril Fatface, Iowan Old Style, Palatino, Palatino Linotype, serif"
    fontSize: "clamp(1.8rem, 4vw, 2.6rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "normal"
  price:
    fontFamily: "Abril Fatface, Iowan Old Style, Palatino, Palatino Linotype, serif"
    fontSize: "clamp(2.4rem, 5vw, 3.1rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.02em"
  numeral:
    fontFamily: "Abril Fatface, Iowan Old Style, Palatino, Palatino Linotype, serif"
    fontSize: "clamp(2.2rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "normal"
  action:
    fontFamily: "Abril Fatface, Iowan Old Style, Palatino, Palatino Linotype, serif"
    fontSize: "clamp(1.8rem, 4vw, 2.5rem)"
    fontWeight: 400
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, Segoe UI, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    letterSpacing: "0.16em"
rounded:
  none: "0"
  circle: "50%"
spacing:
  gutter: "1.25rem"
  stack: "clamp(2.5rem, 6vw, 4.25rem)"
  field: "1.15rem"
components:
  button-unlock:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0.6rem 1rem 0.75rem"
    height: "4.5rem"
    width: "100%"
  button-unlock-hover:
    backgroundColor: "{colors.brick}"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
  button-unlock-disabled:
    backgroundColor: "{colors.mute}"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
  card-paper:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.25rem 1.3rem 1.4rem"
  card-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    padding: "1.25rem 1.3rem 1.4rem"
  field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.75rem 0.85rem"
    height: "3.25rem"
    width: "100%"
  field-invalid:
    backgroundColor: "{colors.field-invalid}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  section-label:
    textColor: "{colors.brick}"
    typography: "{typography.label}"
  numeral:
    textColor: "{colors.brick}"
    typography: "{typography.numeral}"
  plate:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    padding: "1.15rem"
  nav-link:
    textColor: "{colors.ink}"
    height: "48px"
  nav-request:
    textColor: "{colors.brick}"
    height: "48px"
  door-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.2rem"
  step:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    width: "2.75rem"
    height: "2.75rem"
  step-last:
    backgroundColor: "{colors.brick}"
    textColor: "{colors.cream}"
    rounded: "{rounded.circle}"
    width: "2.75rem"
    height: "2.75rem"
  tick:
    backgroundColor: "{colors.brick}"
    textColor: "{colors.cream}"
    rounded: "{rounded.circle}"
    width: "1.7rem"
    height: "1.7rem"
  form-frame:
    backgroundColor: "{colors.form-sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(1.1rem, 3vw, 1.75rem)"
    width: "40rem"
  mark:
    textColor: "{colors.ink}"
    width: "16rem"
---

# Design System: Two Keys

## Overview

**Creative North Star: "A screen-printed studio sheet"**

Two Keys is one sheet of cream paper with a faint warm grain. Warm ink does the reading. One brick red does the accent work and fills the close. Abril Fatface is the display voice. Inter is the voice for sentences, labels, and fields. The mark is two crossed keys, one ink and one brick, set with a slight screen-print misregistration.

The print is flat. Hairline rules and a brick top edge on paper cards separate one block from the next. Depth is the surface: cream for the sheet, card stock for a paper card, ink for the ownership panel, the door bar, and the monthly card, and brick for the close. There is no glass and no rounded app chrome.

Deck marks stay on the sheet. A tracked section label names the block. Abril numerals 01 and 02 mark the two problems. A tilde stands in front of each offer line. The submit line is display type on an ink button: unlock the door.

**Key Characteristics:**

- Cream paper, warm ink, one brick
- Abril Fatface display, Inter text
- Flat print: hairline rules, no shadow, no glass
- Crossed keys with a slight misregistration
- Ink ownership panel, ink door bar, ink monthly card, brick close
- Section labels, 01/02 numerals, and offer tildes

## Colors

The palette is cream paper, warm ink, and one brick. Blush is that brick, lightened, for emphasis on ink and on the brick close.

### Primary

- **Brick** (`#9E2B25`): The only accent on cream. Short rules, section labels, 01 and 02, prices, the focus ring, text selection, the caret, the last step, the ownership ticks, link hover, and the close.
- **Blush** (`#E7A39C`): Emphasis on ink. The door-bar phrase, the ownership label, the monthly price, and links hovered on ink.
- **Soft blush** (`#F1C9C3`): The quiet label and the contact prefixes on the brick close.

### Neutral

- **Cream paper** (`#F3EBDD`): The sheet, the type on ink and brick, and the selection text. Theme color of the page.
- **Warm ink** (`#1E1414`): Text, hairline rules on cream, the door bar, the ownership panel, the monthly card, and the submit button at rest. Scrollbar thumb.
- **Muted ink** (`#6B5A55`): Secondary text on cream (byline, timing, form note) and the disabled submit button. It clears AA on cream.
- **Paper type** (`#D8CBBE`): Secondary text on ink, including the monthly card’s body and the ownership notes.
- **Credit** (`#9C8B84`): The single credit line on the ownership panel. It is not the secondary text color; paper is.
- **Card stock** (`#EADFCC`): Paper cards for services and the one-time offers.
- **Field fill** (`#E7D9C4`): Form fields at rest.
- **Invalid wash** (`#F6E4DC`): Field background when the value fails.
- **Plate fill** (`color-mix(in srgb, #F3EBDD 70%, white)`): The work plates, cream lifted toward white.
- **Form sheet** (`color-mix(in srgb, #F3EBDD 82%, white)`): The form frame, a lighter lift than the plates.
- **Paper rule** (`#D9CBB6`): The 1px rule above an offer list on a paper card. A divider, not text.
- **Ink rule** (`#5A4A45`): The 1px rule on ink, between ownership rows and above the monthly list. A divider, not text.

**The One Brick Rule.** Brick is the only accent on cream: the short rule, section labels, numerals, prices, the focus ring, the last step, and the close. On ink, the emphasis color is blush. Brick is not small text on an ink surface.

**The Three Ink Surfaces Rule.** Ink fills the door bar, the ownership panel, and the monthly card, and it is the submit button at rest. Type on those surfaces is cream.

## Typography

**Display Font:** Abril Fatface (with Iowan Old Style, Palatino, Palatino Linotype, serif)
**Body Font:** Inter (with Segoe UI, sans-serif)

**Character:** Abril Fatface is the printed voice, always at weight 400. Inter is the reading voice. Headlines balance their lines. The display size stops at 6rem.

### Hierarchy

- **Display** (400, clamp(3.4rem, 12vw, 6rem), 1.05): The name.
- **Headline** (400, clamp(2.5rem, 7vw, 4rem), 1.05): Section titles. The deck sentence under a section title is the same face at clamp(1.7rem, 4vw, 2.4rem), line-height 1.15.
- **Title** (400, clamp(1.8rem, 4vw, 2.6rem), 1.05): The statement under a section label. Item titles are the same face at clamp(1.35rem, 2.4vw, 1.7rem).
- **Price** (400, clamp(2.4rem, 5vw, 3.1rem), line-height 1, tracking 0.02em): Offer amounts, brick on paper and blush on the ink card. The blank is Inter, weight 700, 0.72em, tracked 0.14em.
- **Numeral** (400, clamp(2.2rem, 4vw, 3rem), 0.9): 01 and 02, in brick. Step counts are Abril at 1.35rem inside the circle.
- **Action** (400, clamp(1.8rem, 4vw, 2.5rem)): The unlock button. It keeps the body line-height.
- **Body** (400, 1.0625rem, 1.6): Reading text, capped at 62ch. The tagline is Inter at clamp(1.25rem, 2.5vw, 1.6rem), line-height 1.35. Secondary lines on cream are mute at 0.95rem.
- **Label** (700, 0.78rem, tracking 0.16em, uppercase): Section labels and the studio line. Brick on cream, ink for “key one”, blush on ink, soft blush on the brick close.

**The Two Voices Rule.** Abril Fatface at weight 400 carries the name, section titles, prices, numerals, and the unlock line. Inter carries sentences, labels, navigation, and fields.

**The Deck Mark Rule.** Section labels, the 01 and 02 numerals, and the tilde before an offer line are part of the deck and stay. A section label is uppercase Inter at 0.78rem, weight 700, tracked 0.16em.

## Layout

One centered column. The sheet is `min(100% - 2.5rem, 68rem)`, so the side inset is 1.25rem. The ownership panel and the brick close are full-bleed color; their inner column is `min(100%, 68rem)` with the same 1.25rem padding. Blocks inside the practice stack separate by clamp(2.5rem, 6vw, 4.25rem). Fields stack with 1.15rem between them. Reading lines stop at 62ch.

The layout is mobile first. From 40rem, name and email sit side by side and the plates loosen to a 1.5rem gap. From 52rem, plates are four across; problems, the two keys, and ownership are two columns; services are two cards plus the serve column; the offer is three columns; the close splits, copy then the mark. From 64rem, the five steps become a row on a horizontal hairline. Below 52rem the closing mark drops under the copy.

A 1px notebook margin, ink at 22% opacity, is fixed on the left at `max(0.75rem, 50vw - 36rem)`. It is the sketch’s margin, not a border on a card. In print it, the skip link, and the nav drop away. The grain drops out in forced colors and in print.

**The Single Sheet Rule.** The page is one centered column, at most 68rem, with 1.25rem of paper at each side. There is no sticky bar.

## Elevation & Depth

No shadows. The sheet is a flat print. A warm fractal grain sits in the cream at low opacity and comes off in forced colors and in print. Depth is a change of surface: cream, card stock, ink, brick.

The crossed keys carry a ghost, shifted about 3px down and to the right, at 28% opacity. When motion is allowed, the brick key settles from a 6px / −5px offset in 0.9s with `cubic-bezier(0.16, 1, 0.3, 1)`. Each work plate has a brick ring shifted 3px right and 3px up. Those shifts are misregistration. They are not elevation. In-page links scroll smoothly, and both the settle and the smooth scroll turn off when reduced motion is requested.

**The Flat Print Rule.** Surfaces are flat. Depth is a change of color: cream, card, ink, brick. The shifted ghost key and the shifted ring on a plate are misregistration, not shadow.

## Shapes

Corners are square on buttons, fields, cards, the door bar, and the form frame. Circles are the key bows, the work plates, the step numbers (2.75rem), and the ownership ticks (1.7rem).

Rules are hairlines or a single brick edge. The short rule under the name is 4.5rem by 0.35rem in brick, and the same bar on the close is cream. Paper cards take a 0.4rem brick top edge. The monthly card keeps the card structure and paints that edge ink, so no brick line shows. Problem rows open with a 1.5px ink rule. Step connectors are 1.5px ink. Offer lists and ownership rows use a 1px rule, paper rule on cream and ink rule on ink. The form frame is a 2px ink stroke. Fields are a 1.5px ink stroke. Plates are a 2px ink circle with a 1.5px brick ring inside.

**The Square Controls Rule.** Buttons, fields, cards, and the form frame are square. Circles are the key bows, the work plates, the step numbers, and the ownership ticks.

## Components

### Buttons

- **Shape:** Square (0). The control is full width.
- **Primary:** Ink fill, cream Abril text at clamp(1.8rem, 4vw, 2.5rem), padding 0.6rem 1rem 0.75rem, minimum height 4.5rem. The label is the action: unlock the door.
- **Hover / Focus:** Hover fills brick. Focus is a 3px brick outline, 3px outside the control. On the brick close, focus switches to cream.
- **Disabled:** Mute fill, and only after a send has started.

### Cards / Containers

- **Corner Style:** Square (0).
- **Background:** Card stock, or ink for monthly care.
- **Shadow Strategy:** None. See Elevation & Depth.
- **Border:** 0.4rem brick along the top of a paper card. The ink card’s top edge is ink.
- **Internal Padding:** 1.25rem 1.3rem 1.4rem.
- **Offer lines:** Each line begins with a tilde. The list opens with a 1px rule.

The door bar is an ink strip, cream Abril type, with the last phrase in blush. Padding 0.95rem 1.2rem.

### Inputs / Fields

- **Style:** Square (0), 1.5px ink stroke, field fill, type at least 1rem, padding 0.75rem 0.85rem, minimum height 3.25rem. The caret is brick.
- **Focus:** 3px brick outline, 3px offset.
- **Error:** Brick stroke, invalid wash behind the value, and a brick message at 0.95rem, weight 600, under the field. The message appears when the check fails, and clears as the value becomes valid.
- **Frame:** The form sits in a square 2px ink frame, max 40rem, on the form sheet, padded clamp(1.1rem, 3vw, 1.75rem). Labels are Inter, weight 600. A required mark is brick.

### Navigation

A centered text row under the byline, not a bar and not sticky. Links are Inter, weight 600, at least 48px tall, with a 1px underline offset 0.18em. Our work and What we do are ink. Project request is brick. Hover turns a cream-page link brick. On ink, hover turns blush. On the brick close, hover and focus turn cream. The skip link is ink fill and cream type, shown when focused.

### Keys

One key sprite, drawn as a bow and a bit. The hero mark crosses them: ink at −40°, brick at −140°, each with a faint offset ghost. The same sprite, small and horizontal, sits above creative direction in ink and above build and care in brick. The close repeats the cross in ink and cream, without the ghost.

### Work plates

Four circles. A 2px ink ring, a plate fill, and a brick ring shifted 3px right and 3px up at 80% opacity. The label is Inter, weight 600, held to about 9ch.

### Steps

Five circles, 2.75rem, 2px ink, cream fill, Abril numerals. A 1.5px ink connector joins them, vertical on small screens and horizontal from 64rem. The last step is brick with cream type.

### Ownership

An ink panel. Each row is a brick circle, 1.7rem, holding a drawn check in cream, then an Abril title and a paper-colored line. Rows divide with the ink rule.

## Do's and Don'ts

### Do:

- **Do** use cream paper, warm ink, and one brick, with Abril Fatface for display and Inter for text.
- **Do** keep the crossed keys, one ink and one brick, with the slight misregistration.
- **Do** keep section labels, the 01 and 02 numerals, and the offer tildes.
- **Do** give paper cards a brick top edge and leave the monthly card ink, with no brick edge.
- **Do** theme the selection, the caret, the scrollbar, and the focus ring from cream, ink, and brick.

### Don't:

- **Don't** add drop shadows, glass, or blur.
- **Don't** round buttons, fields, or cards.
- **Don't** set small brick type on ink.
- **Don't** add a sticky bar, or a hue besides brick and blush.
- **Don't** replace the crossed keys with a wordmark-only header.

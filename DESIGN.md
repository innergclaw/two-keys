---
name: Two Keys
description: Websites with vibe, ownership built in. An OwnYourWeb studio.
colors:
  cream: "#F3EBDD"
  ink: "#1E1414"
  brick: "#9E2B25"
  mute: "#6B5A55"
  line: "#D9CBB6"
  card: "#EADFCC"
  field: "#E7D9C4"
  blush: "#E7A39C"
  blush-soft: "#F1C9C3"
  paper: "#D8CBBE"
  credit: "#9C8B84"
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
    lineHeight: 1.4
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
    typography: "{typography.display-section}"
    rounded: "{rounded.none}"
    padding: "0.6rem 1rem 0.75rem"
  button-unlock-hover:
    backgroundColor: "{colors.brick}"
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
    rounded: "{rounded.none}"
    padding: "0.75rem 0.85rem"
---

## Overview

Two Keys is a printed studio sheet on cream paper. One brick red does the accent work. Abril Fatface carries the headlines. Inter carries the reading text. The mark is two crossed keys, one ink and one brick, with a slight screen-print misregistration. The page is flat: hairline rules, square fields, no shadows, no glass.

The sheet follows the hand sketch. Keys, then our work, then what we do, then Project Request, then “unlock the door”, then the brick close “your front door, your keys.”

## Colors

Cream `#F3EBDD` is the paper. Ink `#1E1414` is the text and the ownership panel. Brick `#9E2B25` is the only accent: rules, prices, the last step, the close. Card `#EADFCC` is the paper card. Field `#E7D9C4` is the form fill. Mute `#6B5A55` is secondary text on cream and passes AA. On ink, secondary text is paper `#D8CBBE` and the emphasis is blush `#E7A39C`. On brick, the quiet label is blush-soft `#F1C9C3`.

Ink is used three times, as in the deck: the “two keys, one door” bar, the “you own it” panel, and the monthly-care card. Brick is the close and the accent, not a second theme.

## Typography

Abril Fatface, weight 400, for the name, section titles, prices, and the unlock button. Inter for body, labels, and the form. Labels are 700, uppercase, tracked `0.16em`. Body measure stays near 65 characters. Headlines use `text-wrap: balance`. Display size caps at 6rem.

## Layout

One centered column, `min(100% - 2.5rem, 68rem)`. Mobile first. Work plates are two columns, then four from 52rem. Name and email sit side by side from 40rem. Problems, the two keys, and ownership split into two columns from 52rem. The offer is three columns from 52rem. The five steps are a vertical list on small screens and a row from 64rem. The brick close is full width. A hairline at the left edge echoes the sketch’s notebook margin.

## Elevation & Depth

None. The page is a flat print. Depth is a change of ink: cream, card, ink panel, brick close. Do not add drop shadows.

## Shapes

Corners are square, except the key bows, the work plates, the step numbers, and the ownership marks, which are circles because the deck draws them that way. Rules are 1.5px ink or a 0.4rem brick edge on a paper card. The form is a 2px ink frame.

## Components

### Buttons

- **Shape:** square (0).
- **Primary:** ink fill, cream Abril text, full width, min-height 4.5rem. The label is “unlock the door”.
- **Hover / Focus:** hover fills brick. Focus is a 3px brick outline, cream on the brick close.
- **Disabled:** mute fill, after a real send only.

### Cards / Containers

- **Corner Style:** square.
- **Background:** card cream, or ink for monthly care.
- **Shadow Strategy:** none.
- **Border:** 0.4rem brick along the top of paper cards. Ink card has no brick edge.
- **Internal Padding:** 1.25rem 1.3rem 1.4rem.

### Inputs / Fields

- **Style:** square, 1.5px ink stroke, field fill `#E7D9C4`, type at least 1rem.
- **Focus:** 3px brick outline, 2px offset. Caret is brick.
- **Error:** brick stroke and a brick message under the field, shown after a failed check, not while typing.

### Navigation

A centered text row under the byline: Our work, What we do, Project request. Project request is brick. No sticky bar. Links are at least 48px tall.

### Keys

The mark is one SVG key, used twice, rotated −40° in ink and −140° in brick. A faint offset copy is the misregistration. The same sprite, small and horizontal, sits above creative direction and build and care.

## Do's and Don'ts

### Do:

- **Do** keep prices as `$___` and contact as “contact coming soon” until the owner replaces them.
- **Do** keep the four work plates labeled “project coming soon” until real work exists.
- **Do** use cream, ink, and one brick. Abril for display, Inter for text.
- **Do** leave the form unsent until a Formspree id or `data-mailto` is set.

### Don't:

- **Don't** invent clients, testimonials, statistics, or a personal email.
- **Don't** add shadows, glass, or rounded app controls.
- **Don't** replace the crossed keys with a wordmark-only header.

# Design system: lilac

Built on [Mantine](https://mantine.dev) (MIT), themed to match the "Control room, lilac" UI kit
from the design file. Nothing in Mantine is forked: all styling lives in the theme.

## Files

| File | What it holds |
|---|---|
| `src/theme.ts` | Mantine theme: lilac ramp, dark surfaces, status colours per scheme, fonts, radii, component defaults, per-scheme CSS variables |
| `src/chartColors.ts` | Chart palette: eight categorical colours (dark and light), sequential lilac ramp, emphasis colour |
| `src/index.css` | Small helpers (`.ink-bar`, `.mono`) |
| `src/kit/Components.tsx` | The kit in real components: buttons, status, banner, controls, list rows, tiles |
| `src/kit/Charts.tsx` | Line, stacked bar, single-series bar and heat strip using the chart palette |

## Decisions

- **Action colour:** lilac `#B9A4FF`, shade 4 of the ramp in both schemes. Text on it is dark.
- **Light mode:** "balanced". Ground `#F4F4EE`, 1 px outlines `#7B8793`, a thin ink edge on lilac fills, dark ink bars as the anchor.
- **Dark mode:** ground `#0D1218`, panel `#151D26`, hairline `#2E3C4B`.
- **Status:** green, amber, red and cyan, brighter on dark and deeper on white (virtual colours `ok`, `warn`, `bad`, `info`). Always an icon plus a word, never colour alone.
- **Type:** IBM Plex Sans, and IBM Plex Mono for numbers.
- **Shape:** 10 px default radius, 56 px minimum button height for gloves.

## Chart colours

Violet leads. Order: violet, orange, aqua, amber, magenta, green, blue, red. Never cycled.
Lilac itself is reserved for emphasis and is never a series. Scatter and map charts carry the
first three only. In light mode aqua, amber and magenta fall under 3 to 1 on white, so show
labels or a table. Validated against `#151D26` and `#FFFFFF`.

## Run it

```
npm install
npm run dev
```

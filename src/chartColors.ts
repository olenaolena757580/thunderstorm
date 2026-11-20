/**
 * Chart palette, violet-led. Both modes validated for lightness band, chroma,
 * colour-blind and normal-vision separation (dark panel #151D26, white).
 * Slots are used in this order and never cycled. Lilac #B9A4FF is reserved
 * for emphasis and is never a series colour.
 */
export const categorical = {
  dark: ['#9085e9', '#d95926', '#199e70', '#c98500', '#d55181', '#0ca30c', '#3987e5', '#e66767'],
  light: ['#6250d6', '#eb6834', '#1baf7a', '#eda100', '#e87ba4', '#008300', '#2a78d6', '#e34948'],
}

/** Sequential lilac, step 100 to 700. In dark mode read it reversed (bright = more). */
export const sequential = ['#E9E3FF', '#D3C8FF', '#BCAAFF', '#A28AF5', '#8869E6', '#6D4CCB', '#54379F']

export const emphasis = { dark: '#B9A4FF', light: '#6250d6' }

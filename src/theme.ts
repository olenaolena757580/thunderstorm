import {
  Alert,
  Badge,
  Button,
  Card,
  createTheme,
  type CSSVariablesResolver,
  type MantineColorsTuple,
  Paper,
  SegmentedControl,
  Select,
  Switch,
  virtualColor,
} from '@mantine/core'

/**
 * Lilac theme for Mantine (MIT).
 * Shade 4 is the base of every ramp, so `primaryShade` is 4 in both schemes.
 * Source of the values: the "Control room, lilac" UI kit boards in the design file.
 */

const lilac: MantineColorsTuple = [
  '#F6F3FF', '#ECE6FF', '#DDD3FF', '#CCBDFF', '#B9A4FF',
  '#A28AF5', '#8869E6', '#6D4CCB', '#54379F', '#3E2A78',
]

// Dark surfaces: 0 text, 2 muted text, 4 border, 6 panel, 7 page.
const dark: MantineColorsTuple = [
  '#E8EEF4', '#C7D1DB', '#93A4B5', '#6F8092', '#2E3C4B',
  '#243040', '#151D26', '#0D1218', '#090D11', '#05070A',
]

// Status colours differ per scheme: bright on the dark panel, deep on white.
const okDark: MantineColorsTuple = ['#EFFCF7', '#DCF9EC', '#BDF3DC', '#87E9BF', '#3DDC97', '#34BD82', '#2C9E6D', '#238058', '#1B6142', '#12422D']
const okLight: MantineColorsTuple = ['#ECF4F0', '#D4E7DE', '#ADD2C1', '#6AAD8E', '#0E7A48', '#0C693E', '#0A5834', '#08472A', '#063620', '#042516']
const warnDark: MantineColorsTuple = ['#FFF9ED', '#FFF1D7', '#FFE4B3', '#FFCE75', '#FFB020', '#DB971C', '#B87F17', '#946613', '#704D0E', '#4C350A']
const warnLight: MantineColorsTuple = ['#F9F1EB', '#F2E0D1', '#E7C4A8', '#D39461', '#B85200', '#9E4700', '#843B00', '#6B3000', '#512400', '#371900']
const badDark: MantineColorsTuple = ['#FFF1F3', '#FFE0E4', '#FFC5CC', '#FF95A1', '#FF5468', '#DB4859', '#B83C4B', '#94313C', '#70252E', '#4C191F']
const badLight: MantineColorsTuple = ['#FAEDEF', '#F4D7DC', '#EAB3BC', '#D97485', '#C21F3A', '#A71B32', '#8C162A', '#711222', '#550E1A', '#3A0911']
const infoDark: MantineColorsTuple = ['#EFFBFD', '#DBF5FB', '#BAECF7', '#82DCF1', '#35C7E8', '#2EABC8', '#268FA7', '#1F7387', '#175866', '#103C46']
const infoLight: MantineColorsTuple = ['#EBF5F7', '#D3E8EC', '#ACD3DC', '#67B0BF', '#0A7F98', '#096D83', '#075B6D', '#064A58', '#043843', '#03262E']

export const theme = createTheme({
  primaryColor: 'lilac',
  primaryShade: { light: 4, dark: 4 },
  autoContrast: true,
  luminanceThreshold: 0.3,
  fontFamily: "'IBM Plex Sans', system-ui, -apple-system, 'Segoe UI', sans-serif",
  fontFamilyMonospace: "'IBM Plex Mono', ui-monospace, Menlo, monospace",
  headings: { fontFamily: "'IBM Plex Sans', system-ui, sans-serif", fontWeight: '700' },
  defaultRadius: 'md',
  radius: { xs: '4px', sm: '6px', md: '10px', lg: '14px', xl: '22px' },
  white: '#FFFFFF',
  black: '#10161C',
  colors: {
    lilac,
    dark,
    okDark, okLight, warnDark, warnLight, badDark, badLight, infoDark, infoLight,
    ok: virtualColor({ name: 'ok', dark: 'okDark', light: 'okLight' }),
    warn: virtualColor({ name: 'warn', dark: 'warnDark', light: 'warnLight' }),
    bad: virtualColor({ name: 'bad', dark: 'badDark', light: 'badLight' }),
    info: virtualColor({ name: 'info', dark: 'infoDark', light: 'infoLight' }),
  },
  components: {
    Button: Button.extend({
      defaultProps: { size: 'lg', fw: 700 },
      styles: { root: { border: '1px solid var(--lilac-edge)', minHeight: 56 } },
    }),
    Card: Card.extend({ defaultProps: { withBorder: true, padding: 'lg' } }),
    Paper: Paper.extend({ defaultProps: { withBorder: true } }),
    Alert: Alert.extend({ defaultProps: { radius: 'md' } }),
    Badge: Badge.extend({ defaultProps: { size: 'lg', variant: 'default', fw: 600, tt: 'none' } }),
    SegmentedControl: SegmentedControl.extend({ defaultProps: { size: 'lg', fw: 700 } }),
    Select: Select.extend({ defaultProps: { size: 'lg' }, styles: { label: { fontSize: 14, fontWeight: 500, marginBottom: 6 } } }),
    Switch: Switch.extend({ defaultProps: { size: 'lg', color: 'ok' } }),
  },
})

/** Page colour, borders and the ink edge on lilac fills, per scheme. */
export const cssVariablesResolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {
    '--mantine-color-body': '#F4F4EE',
    '--mantine-color-text': '#10161C',
    '--mantine-color-dimmed': '#455360',
    '--mantine-color-default-border': '#7B8793',
    '--lilac-edge': '#10161C',
    '--lilac-ink-bar': '#10161C',
    '--lilac-ink-edge': '#10161C',
  },
  dark: {
    '--mantine-color-body': '#0D1218',
    '--mantine-color-text': '#E8EEF4',
    '--mantine-color-dimmed': '#93A4B5',
    '--mantine-color-default-border': '#2E3C4B',
    '--lilac-edge': 'transparent',
    '--lilac-ink-bar': '#151D26',
    '--lilac-ink-edge': '#2E3C4B',
  },
})

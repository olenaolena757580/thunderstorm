import { BarChart, LineChart } from '@mantine/charts'
import { Card, Stack, Text, useComputedColorScheme } from '@mantine/core'
import { categorical, emphasis, sequential } from '../chartColors'

const battery = Array.from({ length: 12 }, (_, i) => ({
  min: i * 5,
  'Drone A': [62, 64, 63, 68, 70, 69, 74, 78, 77, 81, 84, 86][i],
  'Drone B': [48, 47, 52, 50, 55, 57, 56, 60, 64, 63, 67, 66][i],
  'Drone C': [30, 33, 31, 36, 35, 40, 42, 41, 46, 49, 48, 52][i],
}))

const weekly = [14, 16, 15, 18, 20, 19].map((d, i) => ({
  week: `W${i + 1}`,
  Delivered: d,
  Checked: [10, 11, 13, 12, 14, 15][i],
  Activated: [6, 8, 9, 10, 11, 13][i],
}))

const sites = [
  { site: 'North pad', sessions: 48 },
  { site: 'Compressor 4', sessions: 41 },
  { site: 'Tank farm', sessions: 36 },
  { site: 'Flare stack', sessions: 27 },
  { site: 'Pipeline B', sessions: 19 },
]

function ChartCard({ title, note, children }: { title: string; note: string; children: React.ReactNode }) {
  return (
    <Card>
      <Stack gap="xs">
        <div>
          <Text fw={700}>{title}</Text>
          <Text size="sm" c="dimmed">{note}</Text>
        </div>
        {children}
      </Stack>
    </Card>
  )
}

export function Charts() {
  const scheme = useComputedColorScheme('dark')
  const c = categorical[scheme]
  const ramp = scheme === 'dark' ? [...sequential].reverse() : sequential
  const surface = scheme === 'dark' ? '#151D26' : '#FFFFFF'
  const selectedValue = 36 // Tank farm
  return (
    <Stack gap="lg">
      <ChartCard title="Battery level by drone" note="Three series, violet first, never cycled">
        <LineChart
          h={260}
          data={battery}
          dataKey="min"
          unit="%"
          withLegend
          legendProps={{ verticalAlign: 'top', height: 36 }}
          series={[
            { name: 'Drone A', color: c[0] },
            { name: 'Drone B', color: c[1] },
            { name: 'Drone C', color: c[2] },
          ]}
          curveType="linear"
          strokeWidth={2}
          dotProps={{ r: 0 }}
          activeDotProps={{ r: 5, strokeWidth: 2 }}
        />
      </ChartCard>

      <ChartCard title="Drones through setup, per week" note="Stacked, small gaps between segments">
        <BarChart
          h={240}
          data={weekly}
          dataKey="week"
          type="stacked"
          barProps={{ stroke: surface, strokeWidth: 2, radius: 3 }}
          withLegend
          legendProps={{ verticalAlign: 'top', height: 36 }}
          series={[
            { name: 'Delivered', color: c[0] },
            { name: 'Checked', color: c[1] },
            { name: 'Activated', color: c[2] },
          ]}
        />
      </ChartCard>

      <ChartCard title="Sessions by site" note="One series, one colour">
        <BarChart
          h={220}
          data={sites}
          dataKey="site"
          orientation="vertical"
          series={[{ name: 'sessions', color: c[0] }]}
          getBarColor={(v) => (v === selectedValue ? emphasis[scheme] : c[0] + (scheme === 'dark' ? '8C' : '6B'))}
          barProps={{ radius: 4 }}
          yAxisProps={{ width: 110 }}
        />
      </ChartCard>

      <ChartCard title="Link quality by hour and site" note={scheme === 'dark' ? 'Sequential lilac, brighter means better' : 'Sequential lilac, darker means better'}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(15, 1fr)', gap: 2 }}>
          {Array.from({ length: 75 }, (_, k) => {
            const i = k % 15
            const j = Math.floor(k / 15)
            const v = Math.max(0, Math.min(6, Math.floor(((Math.sin(i * 0.72 + j * 1.31) + Math.cos(i * 0.31 - j * 0.9) + 2) / 4) * 6.99)))
            return <div key={k} style={{ height: 22, borderRadius: 3, background: ramp[v] }} />
          })}
        </div>
      </ChartCard>
    </Stack>
  )
}

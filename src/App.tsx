import { Badge, Container, Group, SegmentedControl, Stack, Tabs, Text, Title, useMantineColorScheme } from '@mantine/core'
import { Charts } from './kit/Charts'
import { Components } from './kit/Components'

export default function App() {
  const { colorScheme, setColorScheme } = useMantineColorScheme()
  return (
    <Container size="md" py="lg">
      <Stack gap="lg">
        <Group justify="space-between" align="flex-start" wrap="wrap">
          <Stack gap={4}>
            <Title order={1}>Control room</Title>
            <Group gap="xs">
              <Badge variant="filled" size="md">lilac</Badge>
              <Text size="sm" c="dimmed">Mantine, themed. Dark and light.</Text>
            </Group>
          </Stack>
          <SegmentedControl
            value={colorScheme === 'auto' ? 'dark' : colorScheme}
            onChange={(v) => setColorScheme(v as 'dark' | 'light')}
            data={[{ label: 'Dark', value: 'dark' }, { label: 'Light', value: 'light' }]}
          />
        </Group>

        <Tabs defaultValue="components" keepMounted={false}>
          <Tabs.List>
            <Tabs.Tab value="components">Components</Tabs.Tab>
            <Tabs.Tab value="charts">Charts</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="components" pt="lg"><Components /></Tabs.Panel>
          <Tabs.Panel value="charts" pt="lg"><Charts /></Tabs.Panel>
        </Tabs>
      </Stack>
    </Container>
  )
}

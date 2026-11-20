import {
  Alert,
  Badge,
  Button,
  Card,
  Group,
  Paper,
  SegmentedControl,
  Select,
  SimpleGrid,
  Stack,
  Switch,
  Text,
  ThemeIcon,
  useMantineTheme,
} from '@mantine/core'
import {
  IconAlertTriangle,
  IconBook,
  IconCheck,
  IconChevronRight,
  IconInfoCircle,
  IconMap,
  IconPhoto,
  IconPlugConnectedX,
  IconSettings,
  IconX,
} from '@tabler/icons-react'
import type { ReactNode } from 'react'

function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Stack gap="sm">
      <Text size="xs" fw={700} tt="uppercase" c="dimmed" style={{ letterSpacing: '.1em' }}>
        {label}
      </Text>
      {children}
    </Stack>
  )
}

function Status({ kind, children }: { kind: 'ok' | 'warn' | 'bad' | 'info'; children: ReactNode }) {
  const color = `var(--mantine-color-${kind}-filled)`
  const icon = {
    ok: <IconCheck size={16} stroke={3} color={color} />,
    warn: <IconAlertTriangle size={16} stroke={2.6} color={color} />,
    bad: <IconX size={16} stroke={3} color={color} />,
    info: <IconInfoCircle size={16} stroke={2.6} color={color} />,
  }[kind]
  return <Badge leftSection={icon}>{children}</Badge>
}

export function Components() {
  const theme = useMantineTheme()
  return (
    <Stack gap="xl">
      <div className="ink-bar">
        <Group justify="space-between" wrap="nowrap">
          <Button>How to connect?</Button>
          <Group gap="xs" wrap="nowrap">
            <Button variant="default" aria-label="Settings" px="md">
              <IconSettings />
            </Button>
          </Group>
        </Group>
      </div>

      <Section label="Colour">
        <Group gap={6}>
          {theme.colors.lilac.map((c, i) => (
            <Stack key={c} gap={4} w={64}>
              <div style={{ height: 40, borderRadius: 8, background: c, border: '1px solid var(--mantine-color-default-border)' }} />
              <Text size="xs" className="mono">{i}</Text>
            </Stack>
          ))}
        </Group>
      </Section>

      <Section label="Buttons">
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <Button>Confirm and continue</Button>
          <Button style={{ background: 'var(--lilac-ink-bar)', color: '#fff', borderColor: 'var(--lilac-ink-edge)' }}>Back</Button>
          <Button color="bad">Stop session</Button>
          <Button disabled>Not ready yet</Button>
        </SimpleGrid>
      </Section>

      <Section label="Status, always an icon and a word">
        <Group>
          <Status kind="ok">Link strong</Status>
          <Status kind="warn">Delay high</Status>
          <Status kind="bad">Link lost</Status>
          <Status kind="info">Syncing</Status>
        </Group>
        <Alert color="bad" variant="light" icon={<IconPlugConnectedX />} title="Link to the drone is lost">
          <Group justify="space-between">
            <Text size="sm">Reconnecting. Success cannot be called until the link is back.</Text>
            <Text size="sm" className="mono">LAST 12 s</Text>
          </Group>
        </Alert>
      </Section>

      <Section label="Controls">
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
          <Select label="Preset" data={['Film', 'Sport']} defaultValue="Film" allowDeselect={false} />
          <Stack gap={6}>
            <Text size="sm" fw={500}>Exposure</Text>
            <SegmentedControl data={['Relative', 'Spot']} fullWidth />
          </Stack>
          <Stack gap={10}>
            <Switch defaultChecked label="Shared view with peer" />
            <Switch label="Observer mode" />
          </Stack>
        </SimpleGrid>
      </Section>

      <Section label="List rows">
        <Stack gap="xs">
          {['Terms of use', 'Data privacy'].map((t) => (
            <Paper key={t} p="md" radius="md">
              <Group justify="space-between">
                <Group gap="sm">
                  <IconInfoCircle />
                  <Text fw={600}>{t}</Text>
                </Group>
                <IconChevronRight />
              </Group>
            </Paper>
          ))}
        </Stack>
      </Section>

      <Section label="Tiles">
        <SimpleGrid cols={{ base: 1, xs: 3 }}>
          {[
            { icon: <IconPhoto size={36} />, label: 'Gallery' },
            { icon: <IconBook size={36} />, label: 'Tutorials' },
            { icon: <IconMap size={36} />, label: 'Load map' },
          ].map((t) => (
            <Card key={t.label} ta="center">
              <Stack align="center" gap="sm">
                <ThemeIcon size={84} radius={999}>{t.icon}</ThemeIcon>
                <Text fw={700} size="lg">{t.label}</Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Section>
    </Stack>
  )
}

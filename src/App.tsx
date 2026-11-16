import { useState } from 'react'

const TABS = ['Home', 'Explore', 'Profile'] as const
type Tab = (typeof TABS)[number]

export default function App() {
  const [tab, setTab] = useState<Tab>('Home')
  return (
    <div className="app">
      <header className="topbar">Startup</header>
      <main className="content">
        <h1>{tab}</h1>
        <p>Responsive shell: bottom tabs on mobile, sidebar on desktop.</p>
      </main>
      <nav className="tabbar" aria-label="Main">
        {TABS.map((t) => (
          <button key={t} aria-current={t === tab ? 'page' : undefined} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
      </nav>
    </div>
  )
}

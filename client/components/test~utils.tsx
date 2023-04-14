import { ReactNode } from 'react'
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom'
import { render } from '@testing-library/react'

export function renderWithRouter(
  ui: ReactNode,
  { initialEntries = ['/'], route = '/' } = {}
) {
  return render(
    <Router initialEntries={initialEntries} initialIndex={0}>
      <Routes>
        <Route path={route} element={ui} />
      </Routes>
    </Router>
  )
}

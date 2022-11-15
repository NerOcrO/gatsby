import { render, screen } from '@testing-library/react'
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import Todo from './pages/todo'

describe('temp', () => {
  it('tenders learn react link', () => {
    render(<Todo />)
    const home = screen.getByRole('link', { name: 'HOME' })

    expect(home).toBeInTheDocument()
  })
})

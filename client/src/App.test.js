import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders Join Chat button', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Join Chat/i)
  expect(linkElement).toBeInTheDocument()
})

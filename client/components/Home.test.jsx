import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Home from './Home'

describe('<Home/>', () => {
  it('renders all of the required UI and information', () => {
    render(<Home />)
    const userInfo = screen.getByRole('heading')
    expect(userInfo).toBeInTheDocument
    expect(userInfo).toBe('Choose your Pokémon!')
  })
})

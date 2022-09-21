import React from 'react'
import styled from 'styled-components'

import Pokemon from './Pokemon'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

const App = () => {
  return (
    <Container>
      <h1>I Love Pokemon!</h1>

      <Pokemon />
    </Container>
  )
}

export default App

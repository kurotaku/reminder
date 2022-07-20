import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  padding: 40px;
`

const MainContainer = ({children}) => {
  return (
    <Wrap>
      {children}
    </Wrap>
  )
}

export default MainContainer

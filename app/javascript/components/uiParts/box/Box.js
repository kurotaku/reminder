import React from 'react'
import styled from 'styled-components'

const DefaultBox = styled.div`
  border-radius: 16px;
  background: white;
  padding: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
`

const Box = ({children}) => {
  return (
    <DefaultBox>
      {children}
    </DefaultBox>
  )
}

export default Box

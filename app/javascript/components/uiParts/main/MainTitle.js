import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  background: white;
  padding: 0 40px;
  &>h1{
    height: 70px;
    font-size: 18px;
    font-weight: bold;
    color: #2C4F68;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: start;
    &>a{
      color: #2C4F68;
    }
    &>.arrow:before{
      font-size: 32px;
    }
  }
`

const MainTitle = ({children}) => {
  return (
    <Wrap>
      <h1>
        {children}
      </h1>
    </Wrap>
  )
}

export default MainTitle

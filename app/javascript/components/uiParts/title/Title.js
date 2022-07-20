import React from 'react'
import styled from 'styled-components'
import Button from '../button/Button'

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

const ContentTitle = ({title, buttonText, buttonPath}) => {
  return (
    <Wrap>
      <h2>{title}</h2>
      { (buttonText && buttonPath) ? <Button text={buttonText} path={buttonPath} /> : null}
    </Wrap>
  )
}
export default ContentTitle

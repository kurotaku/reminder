import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import Color from '../../const/Color';

export const DefaultFormStyle = createGlobalStyle`
  input[type="text"]{
    background: ${Color.LIGHT_PRIMARY};
    border: 2px solid ${Color.LIGHT_PRIMARY};
    border-radius: 16px;
    outline: 0;
    border: none;
    font-size: 1.6rem;
    color: ${Color.TEXT_DARK};
    padding: 20px 16px;
    width: 100%;
    max-width: 320px;
  }
`
export const FormGroup = ({label, children}) => {
  const Wrap = styled.div`
    margin-bottom: 32px;
  `

  const Label = styled.label`
    font-size: 1.2rem;
    color: ${Color.TEXT_LIGHT};
    display: inline-block;
    line-height: 1;
    margin-bottom: 8px;
    width: 100%;
`

  return (
    <Wrap>
      <Label>{label}</Label><br />
      {children}
    </Wrap>
  )
}

export const FieldErrorMessage = ({children}) => {
  const Wrap = styled.p`
    color: ${Color.DANGER};
    font-size: 1.2rem;
    margin-top: 8px;
  `

  return(
    <Wrap>{children}</Wrap>
  )
}




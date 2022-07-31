import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import Color from '../../const/Color';

export const DefaultFormStyle = createGlobalStyle`
  input{
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

export const FormGroup = ({label, children}) => {
  return (
    <Wrap>
      <Label>{label}</Label><br />
      {children}
    </Wrap>
  )
}

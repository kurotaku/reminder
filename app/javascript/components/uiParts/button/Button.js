import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Btn = styled.button`
  display: inline-block;
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 100px;
  min-width: 96px;
  padding: 8px;
  white-space: nowrap;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  &:disabled{
    cursor: not-allowed;
  }
`

export const PrimaryBtn = styled(Btn)`
  border-color: #32ABD6;
  background-color: #32ABD6;
`

export const PrimaryLinkBtn = styled(Btn.withComponent(Link))`
  border-color: #32ABD6;
  background-color: #32ABD6;
`
export const PrimarySubmit = styled(Btn.withComponent('input'))`
  border-color: #32ABD6;
  background-color: #32ABD6;
`

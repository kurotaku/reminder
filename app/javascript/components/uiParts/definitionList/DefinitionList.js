import React from 'react'
import styled from 'styled-components'
import Color from '../../const/Color'

const DefinitionList = ({label, text, unit}) => {
  const Wrap = styled.dl`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  `

  const Label = styled.dt`
    font-size: 1.2rem;
    font-weight: normal;
    line-height: 1.6;
    color: ${Color.TEXT_LIGHT};
    width: 25%;
  `

  const Text = styled.dd`
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 1.6;
    color: ${Color.TEXT_DARK};
    width: 75%;
    margin-bottom: 0;
  `

  const Unit = styled.span`
    font-size: 1.2rem;
    margin-left: 4px;
    color: ${Color.TEXT_LIGHT};
  `
  
  return (
    <Wrap>
      <Label>{label}</Label>
      <Text>{text}{unit && <Unit>{unit}</Unit>}</Text>
    </Wrap>
  )
}

export default DefinitionList

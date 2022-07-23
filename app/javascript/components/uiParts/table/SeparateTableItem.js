import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrap = styled.div`
  &:hover{
    opacity: 0.4
  }
`

const style = {
  'display': 'flex',
  'alignItems': 'center',
  'width': '100%',
  'height': '44px',
  'background': 'white',
  'borderRadius': '16px',
  'textDecoration': 'none',
  'marginBottom': '8px',
  'boxShadow': '0px 0px 10px rgba(0, 0, 0, .1)'
}

const Data = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  color: #333;
  text-align: left;
  padding-left: 16px;
  padding-right: 16px;
`

const SeparateTableItem = ({children, path}) => {
  return (
    <Wrap>
      <Link to={path.toString()} style={style}>
        {
          children.map((c) => {
            return <Data key={c.key} style={{width: c.width + '%' }}>{c.label}</Data>
          })
        }
      </Link>
    </Wrap>
  )
}

export default SeparateTableItem

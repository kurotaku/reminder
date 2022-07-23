import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  margin-bottom: 8px;
`
const Data = styled.div`
  font-size: 1.2rem;
  color: #9C9C9C;
  text-align: left;
  padding-left: 16px;
  padding-right: 16px;
`


const TableHeader = ({children}) => {
  return (
    <Row>
      {
        children.map((c) => {
          return <Data key={c.key} style={{width: c.width + '%' }}>{c.label}</Data>
        })
      }
    </Row>
  )
}

export default TableHeader

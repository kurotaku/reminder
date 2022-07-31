import React, { useContext } from 'react'
import styled from 'styled-components'
import { PrimaryLinkBtn } from '../button/Button'
import { StoreUlid } from '../../Main'

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

const ContentTitle = ({title, buttonText, buttonPath}) => {
  const storeUlid = useContext(StoreUlid)
  return (
    <Wrap>
      <h2>{title}</h2>
      { (buttonText && buttonPath) ? <PrimaryLinkBtn to={'/' + storeUlid + buttonPath}>{buttonText}</PrimaryLinkBtn> : null}
    </Wrap>
  )
}
export default ContentTitle

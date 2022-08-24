import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link, useMatch } from 'react-router-dom'
import MainTitle from '../../uiParts/main/MainTitle'
import MainContainer from '../../uiParts/main/MainContainer'
import Box from '../../uiParts/box/Box'
import * as Form from '../../uiParts/form/Form'
import { StoreUlid } from '../../Main'
import DefinitionList from '../../uiParts/definitionList/DefinitionList'

const Show = () => {
  const match = useMatch("/:store_ulid/customers/:id")
  
  const [customer, setCustomer] = useState([])
  const storeUlid = useContext(StoreUlid)

  useEffect(() => {
    axios.get('/api/private/customers/' + match.params.id, {
      params: {
        store_ulid: storeUlid
      }
    })
    .then(resp => {
      setCustomer(resp.data);
    })
    .catch(e => {
      console.log(e)
    })
  }, [])

  return (
    <>
      <Form.DefaultFormStyle />
      <MainTitle>
        <Link to={'../'}>顧客管理</Link><i className="icon-right_arrow arrow"></i>{customer.full_name}
      </MainTitle>
      <MainContainer>
        <Box>
          <DefinitionList label="氏名" text={customer.full_name} />
          <DefinitionList label="顧客番号" text={customer.number} />
          <DefinitionList label="電話番号" text={customer.display_phone} />
        </Box>
      </MainContainer>
    </>
  )
}

export default Show

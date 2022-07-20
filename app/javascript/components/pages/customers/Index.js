import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import MainTitle from '../../uiParts/main/MainTitle'
import MainContainer from '../../uiParts/main/MainContainer'
import ContentTitle from '../../uiParts/title/Title'
import { StoreUlid } from '../../Main'

const Index = () => {
  const [customers, setCustomers] = useState([])
  const storeUlid = useContext(StoreUlid)

  useEffect(() => {
    axios.get('/api/private/customers', {
      params: {
        store_ulid: storeUlid
      }
    })
    .then(resp => {
      console.log(resp.data)
      setCustomers(resp.data)
    })
    .catch(e => {
      console.log(e)
    })
  }, [])

  return (
    <>
      <MainTitle>
        顧客管理
      </MainTitle>
      <MainContainer>
        <ContentTitle
          title="顧客一覧"
          buttonText="新規作成"
          buttonPath="/customers/new"
        />
        {
          customers.map((customer) => {
            return <div key={customer.id}>{customer.phone}</div>
          }
        )}
      </MainContainer>
    </>
  )
}

export default Index

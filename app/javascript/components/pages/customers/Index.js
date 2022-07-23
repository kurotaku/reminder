import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import MainTitle from '../../uiParts/main/MainTitle'
import MainContainer from '../../uiParts/main/MainContainer'
import ContentTitle from '../../uiParts/title/Title'
import { StoreUlid } from '../../Main'
import TableHeader from '../../uiParts/table/TableHeader'
import SeparateTableItem from '../../uiParts/table/SeparateTableItem'

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
        <TableHeader>
          {[
            {'key': '1', 'label': '顧客名', 'width': '20'},
            {'key': '2', 'label': '顧客番号', 'width': '20'},
            {'key': '3', 'label': '電話番号', 'width': '20'},
          ]}
        </TableHeader>
        {
          customers.map((customer) => {
            return (
              <SeparateTableItem key={customer.id} path={customer.id}>
                {[
                  {'key': customer.full_name, 'label': customer.full_name, 'width': '20'},
                  {'key': customer.number, 'label': customer.number, 'width': '20'},
                  {'key': customer.display_phone, 'label': customer.display_phone, 'width': '20'},
                ]}
              </SeparateTableItem>
            )
          }
        )}
      </MainContainer>
    </>
  )
}

export default Index

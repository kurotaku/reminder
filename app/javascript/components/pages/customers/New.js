import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MainTitle from '../../uiParts/main/MainTitle'
import MainContainer from '../../uiParts/main/MainContainer'
import Box from '../../uiParts/box/Box'
import { FormGroup } from '../../uiParts/form/Form'
import { StoreUlid } from '../../Main'
import { DefaultFormStyle } from '../../uiParts/form/Form'
import { PrimaryBtn } from '../../uiParts/button/Button'

const New = () => {
  const storeUlid = useContext(StoreUlid);
  const navigate = useNavigate();

  const initialize = {
    family_name: '',
    first_name: '',
    number: '',
    phone: '',
  }

  const [customer, setCustomer] = useState(initialize);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomer({ ...customer, [name]: value });
    console.log(customer);
  };

  const saveCustomer = () => {
    var data = {
      store_ulid: storeUlid,
      family_name: customer.family_name,
      first_name: customer.first_name,
      number: customer.number,
      phone: customer.phone,
    };

    axios.post('/api/private/customers', data)
    .then(resp => {
      setCustomer({
        family_name: resp.data.family_name,
        first_name: resp.data.first_name,
        number: resp.data.number,
        phone: resp.data.phone,
      });
      navigate('../');
    })
    .catch(e => {
      console.log(e);
    });
  }
  return (
    <>
      <DefaultFormStyle />
      <MainTitle>
        <Link to={'../'}>顧客管理</Link><i className="icon-right_arrow arrow"></i>新規追加
      </MainTitle>
      <MainContainer>
        <Box>
          <FormGroup label="氏名(姓)">
            <input
              type="text"
              required={true}
              name="family_name"
              placeholder="山田"
              onChange={(e) => handleInputChange(e)}
            />
          </FormGroup>

          <FormGroup label="氏名(名)">
            <input
              type="text"
              required={true}
              name="first_name"
              placeholder="太郎"
              onChange={(e) => handleInputChange(e)}
            />
          </FormGroup>

          <FormGroup label="顧客番号">
            <input
              type="text"
              required={true}
              name="number"
              placeholder="0001"
              onChange={(e) => handleInputChange(e)}
            />
          </FormGroup>

          <FormGroup label="電話番号(ハイフンなし)">
            <input
              type="text"
              required={true}
              name="phone"
              placeholder="08012345678"
              onChange={(e) => handleInputChange(e)}
            />
          </FormGroup>
          
          <div style={{textAlign: 'center'}}><PrimaryBtn onClick={saveCustomer}>送信</PrimaryBtn></div>
        </Box>
      </MainContainer>
    </>
  )
}

export default New

import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MainTitle from '../../uiParts/main/MainTitle'
import MainContainer from '../../uiParts/main/MainContainer'
import Box from '../../uiParts/box/Box'
import * as Form from '../../uiParts/form/Form'
import { PrimarySubmit } from '../../uiParts/button/Button';
import { StoreUlid } from '../../Main'

const New = () => {
  const storeUlid = useContext(StoreUlid);
  const navigate = useNavigate();

  const schema = yup.object().required().shape({
    familyName: yup.string().required('必須項目です'),
    firstName: yup.string().required('必須項目です'),
    Number: yup.string().matches(/^[0-9a-zA-Z-]+$/, '半角英数字とハイフン(-)のみ使用できます'),
    Phone: yup.string().required('必須項目です').matches(/^[0-9]+$/, '半角数字のみ使用できます')
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (formData) => {
    var params = {
      store_ulid: storeUlid,
      family_name: formData.familyName,
      first_name: formData.firstName,
      number: formData.Number,
      phone: formData.Phone,
    };

    axios.post('/api/private/customers', params)
    .then(resp => {
      navigate('../');
    })
    .catch(e => {
      console.log(e);
    });
  }

  return (
    <>
      <Form.DefaultFormStyle />
      <MainTitle>
        <Link to={'../'}>顧客管理</Link><i className="icon-right_arrow arrow"></i>新規追加
      </MainTitle>
      <MainContainer>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)} className="form-default">
            <Form.FormGroup label="氏名(姓)">
              <input type="text" {...register('familyName')} placeholder="山田" />
              {errors.familyName && <Form.FieldErrorMessage>{errors.familyName.message}</Form.FieldErrorMessage>}
            </Form.FormGroup>
            
            <Form.FormGroup label="氏名(名)">
              <input type="text" {...register('firstName')} placeholder="太郎" />
              {errors.firstName && <Form.FieldErrorMessage>{errors.firstName.message}</Form.FieldErrorMessage>}
            </Form.FormGroup>

            <Form.FormGroup label="顧客番号">
              <input type="text" {...register('Number')} placeholder="0001" />
              {errors.Number && <Form.FieldErrorMessage>{errors.Number.message}</Form.FieldErrorMessage>}
            </Form.FormGroup>

            <Form.FormGroup label="携帯番号(ハイフンなし)">
              <input type="text" {...register('Phone')} placeholder="09012345678" />
              {errors.Phone && <Form.FieldErrorMessage>{errors.Phone.message}</Form.FieldErrorMessage>}
            </Form.FormGroup>
            
            <div style={{textAlign: 'center'}}><PrimarySubmit type="submit" /></div>
          </form>
        </Box>
      </MainContainer>
    </>
  )
}

export default New

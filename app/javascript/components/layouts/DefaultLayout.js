import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import MainMenu from '../uiParts/main/MainMenu'

const MainContainer = styled.div`
  display: flex;
`

const MainColumn = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #F5F6F9;
  transition: all 0.25s ease;
  position: relative;
`
const DefaultLayout = () => {
  return (
    <MainContainer>
      <MainMenu />
      <MainColumn>
        <Outlet />
      </MainColumn>
    </MainContainer>
  )
}

export default DefaultLayout

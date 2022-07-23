import React from 'react'
import { Link } from 'react-router-dom'
import MainTitle from '../../uiParts/main/MainTitle'
import MainContainer from '../../uiParts/main/MainContainer'
import Box from '../../uiParts/box/Box'

const New = () => {
  return (
    <>
      <MainTitle>
        <Link to={'../'}>顧客管理</Link><i class="icon-right_arrow arrow"></i>新規追加
      </MainTitle>
      <MainContainer>
        <Box>
            this
        </Box>
      </MainContainer>
    </>
  )
}

export default New

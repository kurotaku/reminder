import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { StoreUlid } from '../../Main'

const Menu = styled.nav`
  width: 270px;
  background: #2C4F68;
  flex: 0 0 auto;
`

const MenuList = styled.ul``

const MenuListItem = styled.li`
  > a {
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 4px;
  }
`

const LinkIcon = styled.i`
  &::before{
    color: white;
    font-size: 32px;
  }
`

const LinkLabel = styled.label`
  font-size: 1.4rem;
  color: white;
  cursor: pointer;
`

const MainMenu = () => {
  const storeUlid = useContext(StoreUlid)

  return (
    <Menu>
      <MenuList>
        <MenuListItem>
          <Link to={storeUlid + '/customers/'}>
            <LinkIcon className='icon-store' /><LinkLabel>顧客管理</LinkLabel>
          </Link>
        </MenuListItem>
      </MenuList>
    </Menu>
  )
}

export default MainMenu

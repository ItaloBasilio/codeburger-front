import React from 'react';
import { Container , ItemContainer, ListLink  } from './styles';
import listLinks from './menu-list';
import logo from '../../assets/logo.png'
import LogoutIcon from '@mui/icons-material/Logout';
import {useUser} from '../../hooks/userContext'


export function SideMenuAdmin() {

  const { logout } = useUser()
  
  return (
    <Container>
      <img className='logo' src={logo} alt='logo-burger'/>

      { listLinks.map( item => (
      <ItemContainer key={item.id} isActive={true}>
        <item.icon className='icon'/>
        <ListLink to={item.link}>{item.label}</ListLink>
      </ItemContainer>
      ))}
      <ItemContainer style={{position:'absolute', bottom:'30px'}}>
        <LogoutIcon style={{ color:'#fff'}} />
        <ListLink to="/login" onClick={logout}>Sair</ListLink>
      </ItemContainer>
    </Container>
  );
}

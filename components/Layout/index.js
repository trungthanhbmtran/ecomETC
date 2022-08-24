import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import AnimationIcon from './AnimationIcon';
import IconTool from './IconFB';
import Footer from './Footer';
import BackToTop from './ScrollOnTop';
import { Container } from '@mui/system';
import Header from './Header';
import AppBar from './AppBar';
import DrawerAppBar from './Drawer';


export default function Layout({children}) {

  return (
    <Container maxWidth="false" >
      <div id="back-to-top-anchor" />
      <Header/>
      <List sx={{ mb: 2 }}>
             <AppBar/>
              <DrawerAppBar />
                {children}
             <BackToTop/>
      </List>
      <Footer/>
      <AnimationIcon />
      <IconTool />
    </Container>
  );
}
import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import AnimationIcon from './AnimationIcon';
import IconTool from './IconFB';
import Footer from './Footer';
import BackToTop from './ScrollOnTop';
import { Box } from '@mui/system';
import Header from './Header';
import AppBar from './AppBar';
import DrawerAppBar from './Drawer';
import { useTheme } from "@mui/material/styles";
import { Container, useMediaQuery } from "@mui/material";

export default function Layout({ children }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  console.log(matches);

  return (
    <Box >
      <div id="back-to-top-anchor" />
      <Header matches={matches}/>
      <AppBar />
      <DrawerAppBar />
        <Box sx={{ position : 'relative' , mt : 8}}>
           {children}
        </Box>
      <BackToTop />
      <Footer />
      <AnimationIcon />
      <IconTool />
    </Box>
  );
}
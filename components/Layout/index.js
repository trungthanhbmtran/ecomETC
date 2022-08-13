import { Box, Toolbar } from '@mui/material'
import { Container} from '@mui/system'
import AnimationIcon from './AnimationIcon'
import AppBar from './AppBar'
import Footer from './Footer'
import IconTool from './IconFB'
import BackToTop from './ScrollOnTop'


const Layout = ({children}) => {
  return (
    <Container maxWidth="false" >
        <Toolbar id="back-to-top-anchor" />
        <AppBar/>
        <Box component="main" >
          <Toolbar />
          {children}
        </Box>
      <Footer/>
      <AnimationIcon/>
      <IconTool/>
      <BackToTop/>
    </Container>
   


  )
}

export default Layout
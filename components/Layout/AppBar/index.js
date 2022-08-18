import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import Link from '../../../lib/Link';
import Image from 'next/image';
// import Menu from './menu';
import MaterialUICollapseMenu from './menu/index';
import { menu } from '../../../data/menu';
import MenuItem from './menu/index';
import { Grid, Typography } from '@mui/material';

const drawerWidth = 240;
// const navItems = [
//   {id : 0 , label : ' Giới thiệu' , path : './aboutus'},
//   {id : 1 , label : ' Liên hệ' , path : './aboutus'},
//   {id : 2 , label : ' Dich vu' , path : './aboutus'},
//   {id : 3 , label : ' Tin Tuc' , path : './aboutus'},
//   {id : 4 , label : ' Tai lieu' , path : './aboutus' , subNested: [
//     {subid :1 , label : 'tai lieu 1' , path : './' },
//     {subid :2 , label : 'tai lieu 2' , path : './' }
//   ]},


// ];
const navItems = [
  {
    id: 1,
    title: "Giới thiệu",
    link: '/aboutus',
  },

  {
    id: 2,
    title: "Dịch vụ - Sản phẩm",
    link: './',
    download: false,
    subitems: [
      {
        id: "check",
        icon: "",
        name: "Thí nghiệm điện",
        link: '/'
      },
      {
        id: "support",
        icon: "",
        name: "Bảo dưỡng sửa chữa",
        link: '/aboutus'
      },
      {
        id: "edu",
        icon: "",
        name: "Tư vấn và đào tạo kỹ thuật",
        link: '/aboutus'
      },
      {
        id: "sos",
        icon: "",
        name: "Dịch vụ khẩn cấp 24/7",
        link: '/aboutus'
      },
      {
        id: "sos",
        icon: "",
        name: "Lắp đặt điện và chế tạo tụ bảng điện",
        link: '/aboutus'
      },
      {
        id: "sos",
        icon: "",
        name: "Cung cấp và cho thuê thiết bị",
        link: '/aboutus'
      }
    ]
  },
  {
    id: 3,
    title: "Tài Liệu",
    link: './',
    download: true,
    subitems: [
      {
        id: "catalog",
        icon: "",
        name: "Tài liệu kỹ thuật 1",
        link: '/document/TIEU CHUAN KT CAC VTTB TRONG EVNCPC 2022.pdf'
      },
      {
        id: "catalog",
        icon: "",
        name: "Tài liệu kỹ thuật 2",
        link: '/document/TIEU CHUAN KT CAC VTTB TRONG EVNCPC 2022.pdf'
      },
      {
        id: "catalog",
        icon: "",
        name: "Tài liệu kỹ thuật 3",
        link: '/document/TIEU CHUAN KT CAC VTTB TRONG EVNCPC 2022.pdf'
      },
    ]
  },
  {
    id: 4,
    title: "Tin tức - Tuyển dụng",
    link: '/news',
  },

  {
    id: 5,
    title: "Liên hệ",
    link: '/contact',
  },
]

function DrawerAppBar(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography> */}
      <Link href="/" underline="none" sx={{ my: 2 }}>
        <Image src="/logo.png" width={160} height={80} alt="logo mobile"  ></Image>
        {/* <Image src="/logo.png" width={80} height={80}></Image> */}
      </Link>
      <Divider />
      <List>
        {/* {navItems.map((item,i) => <Menu key={i} item={item}/>)} */}
        {menu.map((item, key) => <MenuItem key={key} item={item} />)}
        {/* {navItems.map((list,listIndex) => {
      }
      )} */}


        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid container >
      <Grid item xs={12} sx={{ backgroundColor: "red" }}>
        <Link href="/" underline="none" >
          <Image src="/logo.png" width={160} height={80} alt="logo mobile"  ></Image>
          {/* <Image src="/logo.png" width={80} height={80}></Image> */}
        </Link>
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: "yellow" }}>
        <AppBar component="nav" position="fixed" sx={{ mt : 10}} >
          <Toolbar >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography> */}

            {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box> */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {/* {navItems.map((item,i) => <Menu key={i} item={item}/>)} */}
              {menu.map((item, key) => <MenuItem key={key} item={item} />)}
            </Box>
            <Box sx={{ flexGrow: 1, display: { md: 'none' } }}>
            </Box>
            <Box component="nav" >
              <Drawer
                container={container}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
              >
                {drawer}
              </Drawer>
            </Box>
            <Tooltip title="Open search"  >
              <IconButton size="large" aria-label="search" color="inherit" edge="end" >
                <SearchIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: "green" }}>
      <Toolbar id="back-to-top-anchor" />
        {props.children}
      </Grid>
    </Grid>
    // <Box sx={{ display: 'flex' , just }}>
    //     <Typography>111111111111</Typography>


    // </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
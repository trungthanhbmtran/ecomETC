// import { Collapse, List, ListItem, ListItemIcon, ListItemText, Box } from "@mui/material";
// import { useState, Fragment } from "react";
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { hasChildren } from "../../../../lib/utils/utils";
// import Link from "../../../../lib/Link";
// import { Colors } from "../../../../lib/theme";

// const MenuItem = ({ item }) => {
//   const Component = hasChildren(item) ? MultiLevel : SingleLevel;
//   return <Component item={item} />;
// };

// const SingleLevel = ({ item }) => {
//   return (
//     <Link href={`${item.path}`} color={Colors.yellow} underline="hover" passhref="true">
//       <ListItem button component="a" >
//         {
//           item.icon != undefined &&
//           <ListItemIcon >{item.icon}</ListItemIcon>
//         }
//         <ListItemText primary={item.title} />
//       </ListItem>
//     </Link>
//   );
// };

// const MultiLevel = ({ item }) => {
//   const { items: children } = item;
//   const [open, setOpen] = useState(false);

//   const handleClick = () => {
//     setOpen((prev) => !prev);
//   };

//   return (
//     <Box sx={{color: Colors.yellow}}>
//       <ListItem button component="a" onClick={handleClick}>
//         {
//           item.icon != undefined &&
//           <ListItemIcon >{item.icon}</ListItemIcon>
//         }
//         <ListItemText primary={item.title} />
//         {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//       </ListItem>
//       <Collapse in={open} timeout="auto" unmountOnExit
//         sx={{
//           position: 'absolute',
//           backgroundColor: Colors.primary,
//           zIndex: 1,
//           width: '200px',
//           color: Colors.yellow
//         }}>
//         <List component="div" disablePadding sx={{ pl: 4 }}>
//           {children.map((child, key) => (
//             <MenuItem key={key} item={child} />
//           ))}
//         </List>
//       </Collapse>
//     </Box>
//   );
// };



// export default MenuItem

import { Collapse, List, ListItem, ListItemIcon, ListItemText, Box, Menu } from "@mui/material";
import { useState, Fragment } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { hasChildren } from "../../../../lib/utils/utils";
import Link from "../../../../lib/Link";
import { Colors } from "../../../../lib/theme";
import { useSelector } from "react-redux";

const MenuItem = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item}  />;
};

const SingleLevel = ({ item }) => {
  return (
    <Link href={`${item.path}`} color={Colors.yellow} underline="hover" passhref="true">
      <ListItem button component="a" >
        {
          item.icon != undefined &&
          <ListItemIcon >{item.icon}</ListItemIcon>
        }
        <ListItemText primary={item.title} />
      </ListItem>
    </Link>
  );
};

const MultiLevel = ({ item }) => {
  // const [dropdown, setDropdown] = useState(false);

  // const [dropdown, setDropdown] = useState(false);
  const isMoblie = useSelector(state => state.drawerOpen)


  console.log('item',item)

  const { items: children } = item;
  const [open, setOpen] = useState(false);


  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleOpen = () =>{}
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);

  // const handle = () => {
  //   setAnchorEl((prev) => !prev);
  // };
  

  // // const handleClick = (event) => {
  // //   setAnchorEl(event.currentTarget);
  // // };
  
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const testShow = () =>{
  //   alert('1')
  // }

  // console.log('children',isMoblie)

  return (
    <Box>
      <ListItem button component="a" 
      // onClick={isMoblie ? handle : handle}
       onClick={() => handleClick()}
      // onMouseOver={()=>setOpen(true)}
      // onMouseOut={()=>setOpen(false)}
      // onClick={()=>setOpen(false)}
      // onMouseOut={() => setOpen(false)}
      >
        {
          item.icon != undefined &&
          <ListItemIcon >{item.icon}</ListItemIcon>
        }
        <ListItemText primary={item.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      {
        isMoblie ? (
          <Collapse in={open} 
          timeout="auto" 
          unmountOnExit
          // sx={{
          //   display : 'block',
          //   // backgroundColor: Colors.primary,
          //   // zIndex: 1,
          //   // width: '200px',
          //   // color: Colors.yellow
          // }}
          >
              {children.map((child, key) => (
                <MenuItem key={key} item={child} />
              ))}
          </Collapse>
        ) : (
          // <Menu
          //   anchorEl={anchorEl}
          //   open={open}
          //   onClose={handleClose}
          //   onmouseover={()=>handle}
          //   // onFocus={(event) => setAnchorEl(event.currentTarget)}
          //   MenuListProps={{
          //     'aria-labelledby': 'basic-button',
          //   }}
          // >
          //   <List component="div" disablePadding sx={{ pl :4}}>
          //     {children.map((child, key) => (
          //       <MenuItem key={key} item={child} />
          //     ))}
          //   </List>
          // </Menu>
             <Collapse 
             in={open} 
             timeout="auto" 
          
            // collapsedSize ='5px'
              // orientation='horizontal'
            //  collapsedSize= '10px'
             unmountOnExit
                     sx={{
                       position: 'absolute',
                       backgroundColor: Colors.primary,
                       zIndex: 1,
                       width: '200px',
                       color: Colors.yellow
                     }}
                     >
                      <List component="div" sx={{ pl: 2 , pb : 2, ml: 4  }}>
                        {children.map((child, key) => (
                          <MenuItem key={key} item={child} />
                        ))}
                      </List>
                   </Collapse>
        )
      }

      {/* <Collapse in={open} timeout="auto" unmountOnExit
        // sx={{
        //   position: 'absolute',
        //   backgroundColor: Colors.primary,
        //   zIndex: 1,
        //   width: '200px',
        //   color: Colors.yellow
        // }}
        >
        <List component="div" disablePadding sx={{ pl: 4 }}>
          {children.map((child, key) => (
            <MenuItem key={key} item={child} />
          ))}
        </List>
      </Collapse> */}
    </Box>
  );
};



export default MenuItem


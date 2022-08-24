import { Collapse, List, ListItem, ListItemIcon, ListItemText, Box } from "@mui/material";
import { useState, Fragment } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { hasChildren } from "../../../../lib/utils/utils";
import Link from "../../../../lib/Link";

const MenuItem = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

const SingleLevel = ({ item }) => {
  return (
    <Link href={`${item.path}`} color="rgb(255,223,0)" underline="hover" passhref="true">
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
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={{color: 'rgb(255,223,0)'}}>
      <ListItem button component="a" onClick={handleClick}>
        {
          item.icon != undefined &&
          <ListItemIcon >{item.icon}</ListItemIcon>
        }
        <ListItemText primary={item.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit
        sx={{
          position: 'absolute',
          backgroundColor: 'rgb(153,0,0)',
          zIndex: 1,
          width: '200px',
          color: 'rgb(255,223,0)'
        }}>
        <List component="div" disablePadding sx={{ pl: 4 }}>
          {children.map((child, key) => (
            <MenuItem key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </Box>
  );
};



export default MenuItem

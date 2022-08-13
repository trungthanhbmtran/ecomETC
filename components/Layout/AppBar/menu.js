import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from '../../../lib/Link';
import { ListItem } from '@mui/material';

const Menu = ({item}) =>{
    return(
    <ListItem disablePadding>
     <Link  href={item.path} color='yellow' underline="hover">
        <ListItemButton button component="a">
          <ListItemText primary={item.label} />
        </ListItemButton>
      </Link>
      </ListItem>
    )

}

export default Menu
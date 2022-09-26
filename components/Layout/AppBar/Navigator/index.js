import { menu } from '../../../../data/menu';
import MenuItems from '../menu';
import Styles from './navigator.module.css'

const Navigator = () =>{
    return(
        <nav >
        {/* {navItems.map((item,i) => <Menu key={i} item={item}/>)} */}
        <ul className="menus">
            {menu.map((menu,index) => {
            const depthLevel = 0;
            return  <MenuItems items={menu} key={index} depthLevel={depthLevel} />}
            )}
        </ul>
      </nav>
    )
}

export default Navigator
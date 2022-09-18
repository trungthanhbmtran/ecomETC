import classes from './dropmenu.module.css'

const Dropdown = ({ submenus,dropdown  }) => {
    return (
      <ul className={classes.dropdown}>
        {submenus.map((submenu, index) => (
          <li key={index} className="menu-items">
            <a href={submenu.url}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;
import React from "react";
import "./nav.m.css";

const Navmenu = (props) => {
  return (
    <React.Fragment>
      { props.navMenu.map(menu => {
        return (
          <div styleName="dropdown" key={menu.name}>
            <li styleName="navMenuList">{menu.name}</li>
            <div styleName="dropdownContent">
            { menu.children && menu.children.map(childMenu => {
                return <a href="#" key={childMenu.name} styleName="menuList">{childMenu.name}</a>
              })
            }
             </div>
          </div>
          )
      }) }
    </React.Fragment>
  );
}
const Iconhome = (props) => {
  return <a href="#" className="fa fa-home" styleName="homeIcon"></a>
}
const Iconsearch = (props) => {
  return <button className="fa fa-search" aria-hidden="true" styleName="searchIcon"></button>
}
const Nav = (props) => {
  return (
    <div styleName="mainNav">
      <div className="container" styleName="navMenu">
        <Iconhome />
        <Navmenu navMenu={props.navMenu}/>
        <Iconsearch />
      </div>
    </div>
  )
}
export {Nav}

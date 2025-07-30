import {SideBarProps} from "./SideBar.props";
import {JSX} from "react";
import Menu from "../Menu/Menu";
import LogoSova from './logoSova.svg'
import cn from "classnames";
import styles from './SideBar.module.css'

export const SideBar = ({className, ...props}: SideBarProps): JSX.Element => {
    return (
       <div className={cn(className, styles.sidebar)} {...props} >
           <LogoSova className={styles.logo}/>
           <div>поиск</div>
           <Menu/>
       </div>
    );
};
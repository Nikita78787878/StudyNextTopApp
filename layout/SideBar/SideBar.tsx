import { SideBarProps } from "./SideBar.props";
import styles from './SideBar.module.css';
import { JSX } from "react";
import cn from 'classnames';

export const SideBar = ({...props}: SideBarProps): JSX.Element => {
    return (
       <div {...props}>
           SideBar
       </div>
    );
};
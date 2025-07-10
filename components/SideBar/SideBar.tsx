import {SideBarProps} from "./SideBar.props";
import {JSX} from "react";
import Menu from "../Menu/Menu";

export const SideBar = ({...props}: SideBarProps): JSX.Element => {
    return (
       <div {...props}>
           <Menu/>
       </div>
    );
};
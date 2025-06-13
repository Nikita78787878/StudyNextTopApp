import { LayoutProps } from "./Layout.props";
import styles from './Layout.module.css';
import { JSX } from "react";
import cn from 'classnames';
import {SideBar} from "@/layout/SideBar/SideBar";
import {Header} from "@/layout/Header/Header";
import {Footer} from "@/layout/Footer/Footer";

export const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
       <div className={styles.wrapper}>
           <Header className={styles.header} />
           <SideBar className={styles.sideBar} />
           <div className={styles.body}>
               {children}
           </div>
           <Footer className={styles.footer} />
       </div>
    );
};
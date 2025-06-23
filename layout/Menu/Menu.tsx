'use client'
import {JSX, useContext} from "react";
import {AppContext} from "@/context/app.context";
import {FirstLevelMenuItem, PageItem} from "@/interfaces/menu.interface";
import CoursesIcon from './icons/courses.svg'
import ServiceIcon from './icons/services.svg'
import ProductIcon from './icons/product.svg'
import BooksIcon from './icons/books.svg'
import {TopLevelCategory} from "@/interfaces/page.interface";
import styles from './Menu.module.css';
import cn from "classnames";


const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Курсы', icon: <ServiceIcon/>, id: TopLevelCategory.Services},
    {route: 'books', name: 'Курсы', icon: <ProductIcon/>, id: TopLevelCategory.Products},
    {route: 'products', name: 'Курсы', icon: <BooksIcon/>, id: TopLevelCategory.Books}
];

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory} = useContext(AppContext);

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <a href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id == firstCategory
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </a>
                        {m.id == firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        );
    }

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>{m._id.secondCategory}</div>
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpened
                        })}>
                            {buildThridLevel(m.pages, menuItem.route)}
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    const buildThridLevel = (pages: PageItem[], route: string) => {
        return(
            pages.map(p => (
                <a href={`/${route}/${p.alias}`} className={cn(styles.thridlevel, {
                    [styles.thridlevelActive]: false
                })}>
                    {p.category}
                </a>
            ))
        )
    }


    return (
        <div className={styles.menu}>
            <ul>
                {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
            </ul>

        </div>
    );
};
import { getMenu } from '@/api/menu';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/product.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';
import styles from './Menu.module.css';
import cn from 'classnames';
import Link from "next/link";

const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <ProductsIcon/>, id: TopLevelCategory.Products},
    {route: 'products', name: 'Товары', icon: <BooksIcon/>, id: TopLevelCategory.Books}
];

export default async function Menu() {
    const firstCategory = TopLevelCategory.Courses;
    const menu = await getMenu(firstCategory);

    const buildFirstLevel = (firstCategory: TopLevelCategory) => {
        return (
            <>
                {firstLevelMenu.map((menuItem) => (
                    <div key={menuItem.route}>
                        <Link href={`/${menuItem.route}`}>

                                <div
                                    className={cn(styles.firstLevel, {
                                        [styles.firstLevelActive]: menuItem.id === firstCategory
                                    })}
                                >
                                    {menuItem.icon}
                                    <span>{menuItem.name}</span>
                                </div>


                        </Link>

                        {menuItem.id == firstCategory && buildSecondLevel(menuItem.route)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecondLevel = (menuItemRoute: string) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map((menuItem) => (
                    <div key={menuItem._id.secondCategory}>
                        <div className={styles.secondLevel}>{menuItem._id.secondCategory}</div>
                        <div className={cn(styles.secondLevelBlock, {
                                [styles.secondLevelBlockOpen]: menuItem.isOpened,
                            })}
                        >
                            {buildThirdLevel(menuItem.pages, menuItemRoute)}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            <>
                {pages.map((page) => (
                    <Link href={`/${route}/${page.alias}`} key={page._id}
                          className={cn(styles.thirdLevel, {
                              [styles.thirdLevelActive]: false,
                          })}>
                            {page.category}
                    </Link>

                ))}
            </>
        );
    };

    return <div className={styles.menu}>{buildFirstLevel(firstCategory)}</div>;
}
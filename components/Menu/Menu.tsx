import {getMenu} from '@/api/menu';
import {TopLevelCategory} from '@/interfaces/page.interface';
import {MenuClient} from "@/components/Menu/MenuClient";


export default async function Menu() {
    const firstCategory = TopLevelCategory.Courses;
    const menu = await getMenu(firstCategory);

    return <MenuClient firstCategory={firstCategory} menu={menu} />;
}

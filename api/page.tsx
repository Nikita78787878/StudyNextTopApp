import {API} from "@/app/api";
import {TopPageModel} from "@/interfaces/page.interface";

export async function getPage(alias: string): Promise<TopPageModel | null> {
    // Все ниже относиться к ошибке кроме задержки
    // throw new Error('error custom')
    // await new Promise((res) => setTimeout(() => {res('')}, 3000));
    // const res = await fetch(API.topPage.byAlias + alias + '/sdfsdfsdf', {
    //     next: { revalidate: 10 } // чтобы из статичной страницы получаить динамическую
    // });

    const res = await fetch(API.topPage.byAlias + alias, {
        next: { revalidate: 10 } // чтобы из статичной страницы получаить динамическую
    });
    console.log('revalidating getPage');// чисто увидеть что динамически меняется

    if (!res.ok) {
        return null;
    }
    return res.json();
}

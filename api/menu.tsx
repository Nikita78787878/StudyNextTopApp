import {MenuItem} from "@/interfaces/menu.interface";
import {API} from "@/app/api";

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
    const res = await fetch(API.topPage.find, {
        method: 'POST',
        body: JSON.stringify({firstCategory}),
        headers: new Headers({'content-type': 'application/json'}),
        next: { revalidate: 10 } // чтобы из статичной страницы получаить динамическую
    });
    console.log('revalidating getMenu'); // чисто увидеть что динамически меняется
    return res.json();
}

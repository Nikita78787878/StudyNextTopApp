import { Metadata } from "next";
import { getPage } from "@/api/page";
import { notFound } from "next/navigation";
import { getMenu } from "@/api/menu";
import {TopPageComponent} from "@/page-components";
import {ProductModel} from "@/interfaces/product.interface";

export const metadata: Metadata = {
    title: "Страница",
};
//  Пример статичной реализации ну т.е SSG у нас то в next идёт SSR
export async function generateStaticParams(): Promise<{ alias: string }[]> {
    await new Promise((res) => setTimeout(() => {res('')}, 3000));
    const menu = await getMenu(0);
    return menu.flatMap(item =>
        item.pages.map(page => ({ alias: page.alias }))
    );
}

type PageParams = {
    params: {
        alias: string;
    };
};

export default async function PageProduct({ params }: PageParams) {
    // await new Promise((res) => setTimeout(() => {res('')}, 3000));

    const page = await getPage(params.alias);
    const firstCategory = 0;
    const menu = await getMenu(firstCategory);

    if (!page) notFound();

    return(
        <TopPageComponent firstCategory={page.firstCategory} page={page} products={products ?? []}/>
        )

}
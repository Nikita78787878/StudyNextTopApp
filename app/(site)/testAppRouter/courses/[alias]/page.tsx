import { Metadata } from "next";
import { getPage } from "@/api/page";
import { notFound } from "next/navigation";
import { getMenu } from "@/api/menu";
import { AppContextProvider } from "@/context/app.context";

export const metadata: Metadata = {
    title: "Страница",
};
//  Пример статичной реализации ну т.е SSG у нас то в next идёт SSR
export async function generateStaticParams(): Promise<{ alias: string }[]> {
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

    const page = await getPage(params.alias);
    const firstCategory = 0;
    const menu = await getMenu(firstCategory);

    if (!page) notFound();

    return(
        <AppContextProvider menu={menu} firstCategory={firstCategory}>
            <div>{page.title}</div>;
        </AppContextProvider>
        )


}



export default function AboutLayout({
                                        children,
                                        one,
                                        two

                                    }: Readonly<{
    children: React.ReactNode,
    one: React.ReactNode,
    two: React.ReactNode,
}>) {
    return (
        <div style={{border: '1px solid black'}}>
            {children}
            {one}
            {two}
        </div>
    );
}
//мы сделали на папки @для того чтобы была параллельная загрузка, для оптимизации
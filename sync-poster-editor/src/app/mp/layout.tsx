function Layout({children}) {
    return (
        <div className="min-h-screen w-full font-[family-name:var(--font-geist-sans)]">
            <div className={"flex"}>
                <div className={"w-1/5"}></div>
                <div className={"flex-auto"}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;
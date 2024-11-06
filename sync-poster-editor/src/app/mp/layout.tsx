import {MenuMp} from "@/widget/Menu";

function Layout({children}) {
    return (
        <div className="min-h-screen w-full font-[family-name:var(--font-geist-sans)]">
            <div className={"flex"}>
                <div className={"w-1/5"}>
                    <MenuMp/>
                </div>
                <div className={"flex-auto"}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;
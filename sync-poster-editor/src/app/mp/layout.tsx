import { MenuMp } from "@/widget/Menu";function Layout({ children }) {  return (    <div className="min-h-screen w-full font-[family-name:var(--font-geist-sans)] bg-[rgb(246,247,248)]">      <div className={"flex"}>        <div className={"w-48 p-4"}>          <MenuMp />        </div>        <div className={"flex-auto p-4"}>{children}</div>      </div>    </div>  );}export default Layout;
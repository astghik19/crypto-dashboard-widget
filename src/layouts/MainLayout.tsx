import {FC, PropsWithChildren} from "react";
import Header from "../components/header";

const MainLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header/>
      <main className="px-4">
        {children}
      </main>
    </div>
  )
}

export default MainLayout;
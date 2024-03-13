import MainNavigation from "../components/MainNavigation"
import { Outlet} from "react-router-dom"

export default function RootLAyout () {
   
   
    return<>
          <MainNavigation />
         <main>
         <Outlet />
  
         </main>
    </>
}
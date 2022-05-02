import { Outlet } from "react-router-dom";
import { FooterComponent } from "../../components/common/footer.component";
import { HeaderComponent } from "../../components/common/header.component";

export function HomePageLayout(){
    return (<>
        <HeaderComponent/>

            <Outlet></Outlet>

        <FooterComponent/>


    </>)
}
import {BrowserRouter, Routes, Route, Outlet, Navigate} from "react-router-dom";
import { Home } from "./home/home.page";
import {ContactUs} from "./contact-us/contact.page"
import {LoginPage} from "./auth/login/login.pages"
import { HomePageLayout } from "./layout/front.layout";
import { UserList } from "./user/user.page";
import { RegisterPage } from "./auth/register/register.pages";

function ErrorPage(){
    return(
        <>
            Error page        
            <Outlet></Outlet>
        </>
    )
}

function Admin(){
    return(<>
        <h1>Admin Page</h1>
        <Outlet></Outlet>
    </>)
}

function Category(){
    return(<>
        <h1>Admin Category</h1>
        <Outlet></Outlet>
    </>)
}

function CategoryList(){
    return(<>
        <h1>Category List</h1>
        <Outlet></Outlet>
    </>)
}

function CategoryAdd(){
    return(<>
        <h1>Add Category</h1>
        <Outlet></Outlet>
    </>)
}

function AdminPrivateRoutes({component}){
    // TODO: Login check
    let is_logged = true;
    let role ="admin";

    if(is_logged) {
        if(role == 'admin'){
            return component;
        } else{
            return <Navigate to={"/"+role}></Navigate>
        }

    } else{
        <Navigate to={"/login"}></Navigate>
    }

    return is_logged && role == 'admin' ? component : <Navigate to="/login"></Navigate>

}

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>

                <Route path="/" element = {<HomePageLayout/>}>

                    <Route index element={<Home/>}></Route>
                    <Route path="contact-us" element={<ContactUs/>}></Route>
                    <Route path="login" element={<LoginPage/>}></Route>
                    <Route path="register" element={<RegisterPage/>}></Route>
                    <Route path="users" element={<UserList/>}></Route>
                    <Route path="*" element={<ErrorPage/>}></Route>
                </Route>

                <Route path="/admin" element={<AdminPrivateRoutes component={<Admin/>}></AdminPrivateRoutes>}>
                    <Route path="category" element={<Category/>}>
                        <Route index element={<CategoryList/>}></Route>
                        <Route path="add" element={<CategoryAdd/>}></Route>
                    </Route>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}
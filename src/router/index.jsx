import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/layout";
import Home from "../pages/home";
import Contact from "../pages/contact";
import CardInfo from "../pages/cardinfo";

export const Router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index: true,
                element:<Home/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:"/cardinfo/:id",
                element:<CardInfo/>
            }
        ]
    }
])
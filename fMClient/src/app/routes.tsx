import {createBrowserRouter} from "react-router-dom";
import {Layout} from "./layouts/layout.tsx";
import {Home} from "../pages/home";

export const routes = createBrowserRouter([
    {
        element:Layout,
        children:[
            {
                Component:Home,
                path:"/"
            }
        ]
    }
]);

import Admin from "./pages/Admin";

import Basket from "./pages/Basket";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Shop from "./pages/Shop";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin/>,
    },
    {
        path: BASKET_ROUTE,
        element: <Basket/>,
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        element: <Shop/>,
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth/>,
    },
    {
        path: REGISTER_ROUTE,
        element: <Auth/>,
    },
    {
        path: SHOP_ROUTE + '/:id',
        element: <DevicePage/>,
    }
]
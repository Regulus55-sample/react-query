import {createBrowserRouter} from "react-router-dom";
import QuotesList from "./Pages/QuotesList";

const router = createBrowserRouter([
    {
        path: '/',
        element: <QuotesList/>
    },
])

export default router
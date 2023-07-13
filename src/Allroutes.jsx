import { Routes, Route } from "react-router-dom";

import { Home, Pagenotfound } from "./pages";

export const Allroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Pagenotfound />} />
        </Routes>
    )
}

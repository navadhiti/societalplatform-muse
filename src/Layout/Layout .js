import React from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import theme from "../Themes/Typography";
const Layout = () => {
    const navigate = useNavigate();
    return (
        <>
            {" "}
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
};
export default Layout;

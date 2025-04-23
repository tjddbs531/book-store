import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/global";
import { getTheme, light, ThemeName } from "./style/theme"; // dark도 가능
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { useContext, useState } from "react";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/common/Error";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";
import Books from "./pages/Books";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home/></Layout>,
    errorElement: <Error />,
  },
  {
    path: "/books",
    element: <Layout><Books /></Layout>,
  },
  {
    path: "/signup",
    element: <Layout><Signup /></Layout>,
  },
  {
    path: "/reset",
    element: <Layout><ResetPassword /></Layout>,
  },
  {
    path: "/Login",
    element: <Layout><Login /></Layout>,
  }
]);

function App() {

  return (
    <BookStoreThemeProvider>
      <ThemeSwitcher />
        <RouterProvider router ={router} />     
    </BookStoreThemeProvider>
  );
}

export default App;

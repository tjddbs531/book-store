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
import BookDetail from "./pages/BookDetail";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import OrderList from "./pages/OrderList";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./api/queryClient";

const routeList = [
  {path: "/",element:<Home/>,},
  {path: "/books",element:<Books />},
  {path: "/signup",element: <Signup />},
  {path: "/reset",element: <ResetPassword />},
  {path: "/Login",element: <Login />},
  {path: "/book/:bookId",element:<BookDetail />},
  {path: "/cart",element: <Cart />},
  {path: "/order",element:<Order />},
  {path: "/orderlist", element: <OrderList />},
];

const router = createBrowserRouter(routeList.map((item) => {
  return {
    ...item,
    element: <Layout>{item.element}</Layout>,
    errorElement: <Error />
  }
}));

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <BookStoreThemeProvider>
      <ThemeSwitcher />
        <RouterProvider router ={router} />     
    </BookStoreThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import ToDoPage from "../pages/ToDo";

const routes = [
  {
    path: "/",
    exact: true,
    page: App,
  },
  {
    path: "/todo",
    exact: true,
    page: ToDoPage,
  },
];

const renderRoutes = () => {
  return (
    <Routes>
      {routes.map((route, i) => {
        const Page = route.page;
        return <Route key={i} path={route.path} element={<Page />}></Route>;
      })}
    </Routes>
  );
};

export default renderRoutes;

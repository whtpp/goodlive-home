import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import LifeService from "../pages/LifeService";
import User from "../pages/User";

import BottomNav from "../components/BottomNav";
const AppRouter = () => {
  return (
    <Router>
      <BottomNav />
      <Routes>
        <Route exact="true" path="/" component={Home}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/life" component={LifeService}></Route>
        <Route path="/user" component={User}></Route>
      </Routes>
    </Router>
  );
};
export default AppRouter;

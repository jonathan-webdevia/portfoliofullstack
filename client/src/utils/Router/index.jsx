import React, { useEffect } from "react";
import { BrowserRouter as Routing, Routes, Route } from "react-router-dom";

import Home from "../../pages/home";

const Router = () => {
  return (
    <Routing>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Routing>
  );
};

export default Router;

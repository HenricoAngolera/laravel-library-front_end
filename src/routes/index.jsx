import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Create } from "../pages/Create";
import { Home } from "../pages/Home";
import { Update } from "../pages/Update";
import { Details } from "../pages/Details";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/create" element={ <Create />}/>
        <Route path="/update/:id" element={ <Update />}/>
        <Route path="/details/:id" element={ <Details />}/>
      </Routes>
    </BrowserRouter>
  );
}
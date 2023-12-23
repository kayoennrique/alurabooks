import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import BasePage from "../pages/BasePage";
import LoggedArea from "../pages/LoggedArea";
import Requests from "../pages/Requests";

const Router = () => {
  return (<Routes>
    <Route path='/' element={<BasePage />}>
      <Route path='/' element={<Home />} />
      <Route path='minha-conta' element={<LoggedArea />} >
      <Route path="pedidos" element={<Requests />} />
      </Route>
    </Route>
  </Routes>)
}

export default Router;
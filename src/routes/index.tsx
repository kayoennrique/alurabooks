import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import BasePage from "../pages/BasePage";
import LoggedArea from "../pages/LoggedArea";
import Requests from "../pages/Requests";
import Categorie from "../pages/Categorie";
import Book from "../pages/Book";
import Cart from "../pages/Cart";

const Router = () => {
  return (<Routes>
    <Route path='/' element={<BasePage />}>
      <Route path='/' element={<Home />} />
      <Route path='minha-sacola' element={<Cart />} />
      <Route path='minha-conta' element={<LoggedArea />} >
      <Route path="pedidos" element={<Requests />} />
      </Route>
      <Route path="/categories/:slug" element={<Categorie />}/>
      <Route path="/book/:slug" element={<Book />} />
    </Route>
  </Routes>);
}

export default Router;
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductForm from "./component/product-form"
import Product from "./component/product"
import EditProduct from "./component/edit-product"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductForm/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/edit/:id" element={<EditProduct/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

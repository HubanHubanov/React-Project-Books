import { Route, Routes } from "react-router-dom"

import Catalog from "./components/catalog/Catalog"
import Create from "./components/create/Create"
import Edit from "./components/edit/Edit"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import PageNotFound from "./components/page-not-found/PageNotFound"
import Register from "./components/register/Register"



function App() {

  return (
    <>
		<Header/>

		<Routes>
			<Route path="/" element={< Home />}/>
			<Route path="/auth/login" element={<Login />} />
			<Route path="/auth/register" element={<Register />} />
			<Route path="/books/create" element={<Create />} />
			<Route path="/books/edit" element={<Edit />} />
			<Route path="/books/catalog" element={<Catalog />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>        

		<Footer />
    </>
  )
}

export default App

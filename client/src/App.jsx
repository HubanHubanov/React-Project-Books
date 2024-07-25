import { Route, Routes } from "react-router-dom"

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import PageNotFound from "./components/page-not-found/PageNotFound"
import Register from "./components/register/Register"
import BookCatalog from "./components/book-catalog/BookCatalog"
import BookCreate from "./components/book-create/BookCreate"
import BookEdit from "./components/book-edit/BookEdit"

function App() {

  return (
    <>
		<Header/>

		<Routes>
			<Route path="/" element={< Home />}/>
			<Route path="/auth/login" element={<Login />} />
			<Route path="/auth/register" element={<Register />} />
			<Route path="/books/create" element={<BookCreate />} />
			<Route path="/books/edit" element={<BookEdit />} />
			<Route path="/books/catalog" element={<BookCatalog />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>        

		<Footer />
    </>
  )
}

export default App

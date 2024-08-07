import { Route, Routes } from "react-router-dom"

import { AuthContextProvider } from "./contexts/AuthContext"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import PageNotFound from "./components/page-not-found/PageNotFound"
import Register from "./components/register/Register"
import BookCatalog from "./components/book-catalog/BookCatalog"
import BookCreate from "./components/book-create/BookCreate"
import BookEdit from "./components/book-edit/BookEdit"
import BookDetails from "./components/book-details/BookDetails"
import Logout from "./components/logout/Logout"
import BookLatest from "./components/book-latest/BookLatest"
import UserGuard from "./components/guards/UserGuard"
import GuestGuard from "./components/guards/GuestGuard"
import BookDelete from "./components/book-delete/BookDelete"


function App() {
  return (
    <AuthContextProvider>
		<Header/>
		<Routes>
			
			<Route path="/" element={< Home />}/>
			<Route path="/book/catalog" element={<BookCatalog />} />
			<Route path="/book/latest" element={<BookLatest />} />
			<Route path="/book/:bookId/details" element={<BookDetails />}/>
			<Route path="*" element={<PageNotFound />} />
			
			<Route element={<UserGuard />}>
				<Route path="/auth/login" element={<Login />} />
				<Route path="/auth/register" element={<Register />} />
			</Route>

			<Route element={<GuestGuard />}>
				<Route path="/book/create" element={<BookCreate />}/>
				<Route path="/book/:bookId/edit" element={<BookEdit />} />
				<Route path="/book/:bookId/delete" element={<BookDelete />} />
			 	<Route path="/auth/logout" element={<Logout/>}/>
			</Route>

		</Routes>        

		<Footer />
    </AuthContextProvider>
  )
}

export default App

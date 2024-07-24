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
   <Home/>
   <Footer/>
   <Login/>
   <Register/>
   <PageNotFound/>
   <Create/>
   <Edit/>
      
    </>
  )
}

export default App

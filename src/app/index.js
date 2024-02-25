import React from "react"

import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import Banner from "./sections/Banner/Banner"
import PopularProducts from "./sections/PopularProducts/PopularProducts"
import NewProducts from "./sections/NewProducts/NewProducts"


function App() {
  return (
    <div className="App layout">
      <Header />
			<Banner />
			<PopularProducts />
			<NewProducts />
			<Footer />
    </div>
  )
}

export default App
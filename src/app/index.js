import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import Banner from "./sections/Banner/Banner"
import PopularProducts from "./sections/PopularProducts/PopularProducts"

function App() {
  return (
    <div className="App layout">
      <Header />
			<Banner />
			<PopularProducts />
			<Footer />
    </div>
  )
}

export default App
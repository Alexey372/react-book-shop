import Header from "./components/Header/Header"
import Catalog from "./pages/Catalog/Catalog"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App layout">
      <Header />
			<Catalog />
			<Footer />
    </div>
  )
}

export default App
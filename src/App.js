import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Logement from "./pages/Logement/Logement";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/logement/:id" element={<Logement />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;

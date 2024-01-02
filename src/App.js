import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutPage from './components/AboutPage'
import Projects from './components/Projects'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contact' element={<ContactPage />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App

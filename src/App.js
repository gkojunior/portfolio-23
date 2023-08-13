import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutPage from './components/AboutPage'
import Project from './components/Projects'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/about' exact element={<AboutPage />} />
				<Route path='/projects' exact element={<Project />} />
				<Route path='/contact' exact element={<ContactPage />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App

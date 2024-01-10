import React, { useState } from 'react'
import styled from 'styled-components'
// import logo1 from '../../../assets/logo1.png'
import { FaTimes } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'

import DarkMode from './DarkMode/DarkMode'
// import { socialLinks } from '../utils/data'
import { Link } from 'react-router-dom'
import logo from '../assets/logo1.png'
const Navbar = () => {
	const [toggle, setToggle] = useState(false)
	const handleToggle = () => {
		setToggle(!toggle)
	}
	return (
		<NavContainer>
			<nav className={toggle ? 'navbar expanded' : 'navbar'}>
				<div className='logoContainer'>
					{/* <img src={logo} alt='logo' className='logo' /> */}
					<h4>George K Owusu Jr</h4>
				</div>

				<ul className='links'>
					<li>
						<Link to='/'>Home</Link>
					</li>

					<li>
						<Link to='/about'>About</Link>
					</li>

					<li>
						<Link to='/projects'>Projects</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
				<div className='toogle' onClick={handleToggle}>
					{toggle ? <FaTimes /> : <HiMenuAlt3 />}
				</div>
				<div className='darkmode'>
					<DarkMode />
				</div>
			</nav>
		</NavContainer>
	)
}

const NavContainer = styled.nav`
	background: var(--body_background2);
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 1;
	padding: 1em;
	align-items: center;
	justify-content: center;

	.logoContainer {
		display: flex;
		align-items: center;
	}
	.navbar {
		width: 100%;
		height: 50px;
		padding: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.logo {
		width: 150px;
		height: 80px;
	}

	.navbar .logo {
		color: rgb(173, 173, 173);
		font-size: 1.1rem;
		font-weight: 600;
	}

	.navbar .links {
		color: burlywood;
		display: flex;
		cursor: pointer;
		list-style: none;
	}

	.navbar .links li {
		margin: 0 15px;
		font-size: 14px;
		font-weight: 600;
	}
	.navbar .links li a {
		text-decoration: none;
		color: var(--clr-brown);
		padding-top: 1rem;
	}
	.navbar .links li a:hover {
		text-decoration: none;
		color: blue;
		padding: 1rem;
		border-bottom: 2px solid burlywood;
	}

	.navbar .toogle {
		display: none;
	}
	a {
		padding: 0 0.5em 0 0.5em;
		text-decoration: none;
		list-style: none;
		font-size: 1.2rem;
		color: var(--clr-brown);
	}

	@media (max-width: 768px) {
		.robot {
			position: fixed;
			left: 168px;
		}
		.navbar {
			position: relative;
			transition: 0.5s height ease-in-out;
		}
		.navbar.expanded {
			height: 100vh;
		}
		.navbar.expanded .links {
			position: absolute;
			top: 120px;
			left: 0;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			opacity: 1;
		}
		.navbar.expanded .links li {
			margin: 15px 0;
			font-size: 22px;
		}

		.navbar.expanded .links li a {
			color: rgb(0, 0, 0);
		}
		.navbar .logo {
			position: absolute;
			top: 0px;
			left: 20px;
		}
		.navbar .toogle {
			display: block;
			position: absolute;
			top: 28px;
			right: 20px;
		}
		.navbar .links {
			display: none;
		}
		.navbar .links {
			position: absolute;
			top: -300px;
			left: 0;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			opacity: 0;
			transition: 0.5s opacity ease-in-out;
		}
		.navbar .links li {
			margin: 15px 0;
			font-size: 22px;
		}

		.navbar.expanded .links li a {
			color: var(--clr-brown);
		}
		.navbar.expanded .links li a:hover {
			color: var(--blue);
		}
		
		.darkmode {
			margin-right: 10%;
			position: fixed;
			top: 20;
			right: 25px;
		}
	}
`

export default Navbar

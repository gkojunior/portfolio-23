import React, { useState } from 'react'
import styled from 'styled-components'
// import logo1 from '../../../assets/logo1.png'
import { FaTimes } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import DarkMode from './DarkMode/DarkMode'
// import { socialLinks } from '../utils/data'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Navbar = () => {
	const [toggle, setToggle] = useState(false)
	const handleToggle = () => {
		setToggle(!toggle)
	}
	return (
		<NavContainer>
			<nav className={toggle ? 'navbar expanded' : 'navbar'}>
				<h2 className='logo'>George Owusu Jr</h2>
				<nav className='socialMediaLink'>
					<a
						className='link'
						href='https://www.linkedin.com/in/george-owusu-2a853411b/'
					>
						<AiFillLinkedin />
					</a>

					<a className='link' href='https://github.com/gkojunior'>
						<AiFillGithub />
					</a>
					<a
						className='link'
						href='https://www.facebook.com/george.gmoney'
					>
						<AiFillFacebook />
					</a>
				</nav>

				<ul className='links'>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/about'>About</a>
					</li>
					<li>
						<a href='/projects'>Project</a>
					</li>
					<li>
						<a href='/contact'>Contact</a>
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
	.navbar {
		width: 100%;
		height: 50px;
		padding: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.navbar .logo {
		color: black;
		font-size: 1.1rem;
		font-weight: 600;
	}

	.navbar .links {
		color: black;
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
	}

	.navbar .toogle {
		display: none;
	}
	a {
		padding: 0 0.5em 0 0.5em;
		text-decoration: none;
		list-style: none;
		font-size: 1.2rem;
		color: black;
	}
	.nav-icons {
		display: flex;
		color: green;
	}

	@media (max-width: 768px) {
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
			top: 23px;
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
			color: rgb(0, 0, 0);
		}
		.darkmode {
			margin-left: 10.5rem;
		}
	}
`

export default Navbar

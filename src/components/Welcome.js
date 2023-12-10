import React from 'react'
import styled from 'styled-components'
import Certification from './CertificationMessage'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

// Animation
import Lottie from 'lottie-react'
import animationData from '../assets/bg2.json'
const Welcome = () => {
	return (
		<Wrapper >
			<article className='content'>
				<div className='bg'>
					<Lottie animationData={animationData} />
				</div>

				<div className='body'>
					<div >
					<h1 className='welcomeMessage'>Welcome! I'm George,</h1>
					<h2 className='welcomeMessage'>
						Software Engineer based in Virginia!
					</h2>
				</div>

				<div>
					<Certification />
					<footer>
						<nav className='link'>
							<a className='link' href='/#'>
								<AiFillLinkedin />
							</a>

							<a className='link' href='/#'>
								<AiFillGithub />
							</a>
							<a className='link' href='/#'>
								<AiFillFacebook />
							</a>
						</nav>
					</footer>
				</div>
				</div>
				
			</article>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	height: 100vh;
	text-align: center;
	justify-content: center;
	h1 {
		padding-top: 7em;
	}
	.link {
		font-size: 2rem;
		padding: 5px 20px;
		color: white;
	}
	@media screen and (max-width: 320px) {
		h1 {
			padding-top: 8em;
		}
		.bg{
			display:none;
		}
		.body{
			display:contents;
		}
	}
	@media screen and (max-width: 425px) {
		h1 {
			padding-top: 6em;
		}
		.bg{
			display:none;
		}
		.body{
			display:contents;
		}
	}

	.link {
		font-size: 2rem;
		padding: 5px 20px;
		color: black;
	}
	@media screen and (min-width: 768px) {
		h1 {
			padding-top: 5em;
		}
		.link {
			font-size: 2rem;
			padding: 5px 20px;
			color: white;
		}
		.body{
			display:none;
		}
	}
`

export default Welcome

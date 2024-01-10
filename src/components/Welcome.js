import React from 'react'
import styled from 'styled-components'
import Certification from './CertificationMessage'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

// Animation
import Lottie from 'lottie-react'
import animationData from '../assets/ani.json'

const Welcome = () => {
	return (
		<Wrapper>
			<article className='content'>
				<div>
					<div className='welcome'>
						<h2 className='welcomeMessage'>Welcome! I'm George,</h2>
						<p className='welcomeMessage2'>
							Software Engineer based in Virginia!
						</p>
						<div className='typewriter'>
							<Certification />
						</div>
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

				<div className='animation'>
					<Lottie animationData={animationData} />
				</div>
			</article>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	height: 100vh;
	scroll-snap-align: center;
	align-items: center;
	text-align: center;
	justify-content: center;

	.content {
		display: block;
		margin-top: 13em;
	}
	.animation {
		width: 40%;
		align-items: center;
		align-content: center;
		margin: auto;
	}
	.welcome {
		text-align: center;
		align-content: center;
		margin: 6rem 0 0 5rem;
	}
	.welcomeMessage {
		color: var(--clr-brown);
		font-size: 2rem;
	}
	.welcomeMessage2 {
		font-size: 2rem;
	}
	.certificationMessage {
		font-size: 1.5rem;
		color: var(--clr-brown);
	}
	.typewriter {
		font-size: 1rem;
	}
	// .link {
	// 	font-size: 2rem;
	// 	padding: 5px 20px;
	// }
	@media screen and (max-width: 320px) {

		.content {
			display: block;
		}
	}
	@media screen and (max-width: 425px) {
		height: 40vh;

		.content {
			height: 50vh;
			margin-top: 5.5rem;
		}
		.welcomeMessage {
			padding-top: 2rem;
			font-size: 1.5rem;
		}
		.welcomeMessage2,
		typewriter {
			font-size: 1.3rem;
		}
		.animation, .welcome{
			margin: auto;
		}
	}

	@media screen and (min-width: 768px) {
		height: 50vh;
	}
	@media screen and (min-width: 900px) {
		height: 80vh;

		.link {
			font-size: 2rem;
			padding: 5px 20px;
		}
		.content {
			display: flex;
		}
	.welcomeMessage{
		font-size: 2.5rem;
	}
		.animation{
			margin: auto;
		}
	}
`

export default Welcome

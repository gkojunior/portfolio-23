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
						<div className='certificationMessage'>
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
	align-items: center;
	text-align: center;
	justify-content: center;

	.content {
		grid-template-columns: 1fr 1fr;
		column-gap: 3rem;
		margin-top: 5em;
	}
	.animation {
		width: 400px;
		margin: auto;
	}
	.welcome {
		text-align: center;
		align-content: center;
		padding: 4rem;
	}
	.welcomeMessage {
		color: var(--bm_brown);
		font-size: 2rem;
	}
	.welcomeMessage2 {
		font-size: 2rem;
		color: var(--revert);
	}
	.certificationMessage {
		font-size: 1.5rem;
		color: var(--body_color_grey);
	}
	.typewriter {
		font-size: 1rem;
	}
	.link {
		color: var(--bm_brown);
	}

	@media screen and (max-width: 320px) {
		.content {
			display: block;
		}
		.animation {
			width: 80%;
		}
	}
	@media screen and (max-width: 425px) {
		height: 100vh;

		.welcomeMessage {
			font-size: 1.5rem;
		}
		.welcomeMessage2,
		typewriter {
			font-size: 1.3rem;
		}
		.animation,
		.welcome {
			margin: auto;
		}
		.animation {
			width: 80%;
		}
	}

	@media screen and (min-width: 768px) {
		height: 80vh;
		.welcome {
			text-align: center;
			align-content: center;
			margin: 7rem 0 0 0;
		}
		.animation {
			width: 50%;
		}
	}
	@media screen and (min-width: 900px) {
		height: 80vh;

		.link {
			font-size: 2rem;
			padding: 5px 20px;
		}
		.content {
			display: grid;
		}
		.welcomeMessage {
			font-size: 2.5rem;
		}
		.animation {
			width: 80%;
			margin: auto;
		}
	}
`

export default Welcome

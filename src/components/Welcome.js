import React from 'react'
import styled from 'styled-components'
import Certification from './CertificationMessage'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Welcome = () => {
	return (
		<Wrapper className='body'>
			<article className='content'>
				<div>
					<h1 className='welcomeMessage'>Welcome! I'm George,</h1>
					<h2 className='welcomeMessage'>Software Engineer based in Virginia!</h2>
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
	  }
	  @media screen and (max-width: 425px) {
		h1 {
			padding-top: 6em;
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
	  }
`

export default Welcome

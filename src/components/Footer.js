import React from 'react'
import styled from 'styled-components'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
	return (
		<Wrapper>
			<h5 className='container'>
				&copy; {new Date().getFullYear()}
				<span> George Owusu</span> All rights reserved
			</h5>
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
					<a className='link' href='/#'>
						<BsInstagram />
					</a>
				</nav>
			</footer>
		</Wrapper>
	)
}

const Wrapper = styled.footer`
	height: 20vh;
	padding: 10px
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background:var(--body_background2);
	text-align: center;
	.container{
		padding:30px;
		margin-top: 20px
	}
	.link{
		font-size:1.5em;
		padding: 0px 20px;
	}
	
	span {
		color: var(--body_color_white);
		padding: 0 .5rem;
	}
	h5 {
		color: var(--body_color_brown);
		margin: 0.1rem;

		font-weight: 400;
		text-transform: none;
		line-height: 1.25;
	}
	@media (min-width: 776px) {
		flex-direction: row;
	}
	a{
		font-size: 2em;
		color: var(--clr-brown-dark);
	}
`

export default Footer

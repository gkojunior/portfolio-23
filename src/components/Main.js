import React from 'react'
import styled from 'styled-components'
import heroBcg from '../assets/ME.jpg'

const Main = () => {
	return (
		<Wrapper className='section-center'>
			<article className='content'>
				<p>
					I Love traveling and spending time with my family!
				</p>
			</article>

			<article className='img-container'>
				<img src={heroBcg} alt='George Owusu' className='main-img' />
			</article>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	background-image: url(/src/assets/bg.jpg);
	min-height: 50vh;
	display: grid;
	place-items: center;
	.img-container {
		display: none;
	}
	.btn {
		display: flex;
		justify-content: center;
		border: none;
		margin-top: 3rem;

	}
	.btn button {
		padding: 0.5rem;
		background-color: white;
		border: none;
		transition: 0.2s;
		margin-bottom: 0.5rem;
		border-radius: 3px;
	}
	.btn button:hover {
		background: rgba(27, 156, 252, 0.1);
		transform: scale();
	}
	a {
		text-transform: uppercase;
		color: brown;
		text-decoration: none;
		font-weight: bold;
	}
	p {
		line-height: 2;
		max-width: 45em;
		margin-bottom: 2rem;
		color: var(--body_color_brown);
		font-size: 1rem;
		padding-top: 20px;
	}
	.underline {
		margin-left: 0;
		margin-top: 10px;
		color: black;
	  }

	@media (min-width: 992px) {
		height: calc(100vh - 5rem);
		grid-template-columns: 1fr 1fr;
		gap: 8rem;
		h2 {
			margin-bottom: 2rem;
		}
		p {
			font-size: 1.25rem;
		}
		.hero-btn {
			padding: 0.75rem 1.5rem;
			font-size: 1rem;
		}
		.img-container {
			display: block;
			position: relative;
		}
		.main-img {
			width: 100%;
			height: 550px;
			position: relative;
			border-radius: var(--radius);
			display: block;
			object-fit: cover;
		}
		.img-container::before {
			content: '';
			position: absolute;
			width: 10%;
			height: 80%;
			background: var(--clr-primary-9);
			bottom: 0%;
			left: -8%;
			border-radius: var(--radius);
		}
	}
`

export default Main

import React from 'react'
import styled from 'styled-components'
import Title from './Title'

// Animation
// import Lottie from 'lottie-react'
// import animationData from '../assets/bg1.json'

const Skills = () => {
	return (
		<Wrapper>
			<div>
				<section className='section skills'>
					<div className='section-title'>
						<Title title='my' subTitle='skills' />
					</div>

					<div className='section-center skills-center'>
						<article>
							<h3>Front end</h3>
							<div className='skill'>
								<p>HTML/CSS</p>
								<div className='skill-container'>
									<div className='skill-value value-90'></div>
									<p className='skill-text skill-text-90'>90%</p>
								</div>
							</div>

							<div className='skill'>
								<p>Javascript</p>
								<div className='skill-container'>
									<div className='skill-value value-80'></div>
									<p className='skill-text skill-text-80'>80%</p>
								</div>
							</div>

							<div className='skill'>
								<p>React</p>
								<div className='skill-container'>
									<div className='skill-value value-80'></div>
									<p className='skill-text skill-text-80'>80%</p>
								</div>
							</div>
						</article>
						<article>
							<h3>Back end</h3>

							<div className='skill'>
								<p>Node</p>
								<div className='skill-container'>
									<div className='skill-value value-80'></div>
									<p className='skill-text skill-text-80'>80%</p>
								</div>
							</div>

							<div className='skill'>
								<p>Ruby on Rails</p>
								<div className='skill-container'>
									<div className='skill-value value-50'></div>
									<p className='skill-text skill-text-50'>50%</p>
								</div>
							</div>

							<div className='skill'>
								<p>Python</p>
								<div className='skill-container'>
									<div className='skill-value value-30'></div>
									<p className='skill-text skill-text-30'>30%</p>
								</div>
							</div>
						</article>
					</div>
				</section>
			</div>
		</Wrapper>
	)
}
const Wrapper = styled.section`
	background: var(--body_background2);
	transition: 0.5s height ease-in-out;

.skills{
	height:100vh;
}
	.section-title {
		margin-bottom: 0.5rem;
		text-align: center;
	}
	.section-title h2 {
		padding-top: 10rem;
	}
	@media screen and (min-width: 320px) {
		.skills{
			height:100vh;
	
		}
	}

	@media screen and (min-width: 768px) {
		height: 100vh;

		.skills-center {
			display: grid;
			grid-template-columns: 1fr 1fr;
			-webkit-column-gap: 2rem;
			-moz-column-gap: 2rem;
			column-gap: 2rem;
		}
	}
	.skills h3 {
		margin: 1.5rem 0;
		color: var(--revert);
	}
	.skill {
		margin-bottom: 1.25rem;
	}
	.skill p {
		margin-bottom: 0.5rem;
		text-transform: capitalize;
		color: var(--body_color_grey);

	}
	.skill-container {
		height: 1rem;
		width: 100%;
		border-radius: 50px;
		position: relative;
		background: var(--body_background);
	}
	.skill-value {
		position: absolute;
		top: 0;
		left: 0;
		background: var(--bm_brown);
		height: 100%;
		width: 90%;
		border-radius: 50px;
	}
	.value-30 {
		width: 30%;
		color: var(--body_background);
	}
	.value-50 {
		width: 50%;
	}
	.value-70 {
		width: 70%;
	}
	.value-80 {
		width: 80%;
	}
	.underline {
		width: 6rem;
		height: 0.25rem;
		background: blue;
		margin-left: auto;
		margin-right: auto;
	}
	.skill-text {
		position: absolute;
		top: -2rem;
		left: 50%;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
	}
	.skill-text-30 {
		left: 30%;
	}
	.skill-text-50 {
		left: 50%;
	}
	.skill-text-80 {
		left: 80%;
	}
	.skill-text-90 {
		left: 90%;
	}
`
export default Skills

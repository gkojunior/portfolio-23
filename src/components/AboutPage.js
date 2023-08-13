import React from 'react'
import styled from 'styled-components'
import aboutImg from '../assets/photo.jpeg'
import Title from './Title'

const AboutPage = () => {
	return (
		<main>
			<Wrapper className='page section section-center'>
				<img src={aboutImg} alt='lady in beads' />
				<article>
					<div>
						<Title title='about' subTitle='me' />
						<div className='underline'></div>
					</div>

					<p>
						Hi! I am George Owusu, a Full-Stack Software Developer. I am an
						aspiring web/mobile developer seeking an entry-level engineering
						position that leverages my educational background, knowledge, skill
						set, and passion for software development. With my current knowlegde
						and recent certifications, my goal is to add value to any business
						and contribute to organizational operations.
					</p>
				</article>
			</Wrapper>
			
		</main>
	)
}
const Wrapper = styled.section`
	margin-top: 8rem;
	display: grid;
	gap: 4rem;
	img {
		width: 100%;
		display: block;
		border-radius: var(--radius);
		height: 500px;
		object-fit: cover;
	}
	p {
		line-height: 2;
		max-width: 45em;
		margin: 0 auto;
		margin-top: 2rem;
		color: var(--body_color_brown);
	}
	.title {
		text-align: left;
		padding-bottom: 10px;
		color: var(--body_color_white);
	}
	.underline {
		margin-left: 0;
		margin-top: 10px;
	}
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
`
export default AboutPage

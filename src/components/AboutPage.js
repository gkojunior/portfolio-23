import React from 'react'
import styled from 'styled-components'
import aboutImg from '../assets/photo.jpeg'
import Certifications from './Certifications'
import Skills from './Skills'
import Title from './Title'

const AboutPage = () => {
	return (
		<main>
			<Wrapper className='page section section-center'>
				<img src={aboutImg} alt='lady in beads' />
				<article>
					<div>
						<Title title='about' subTitle='me' />
					</div>

					<p>
						Hi! I am George Owusu, a Software Developer. I am a web developer
						seeking an entry-level engineering position that leverages my
						educational background, knowledge, skill set, and passion for
						software development. With my current knowlegde and recent
						certifications, my goal is to add value to any business and
						contribute to organizational operations.
					</p>
				</article>
			</Wrapper>
			<Skills />
			<Certifications />
		</main>
	)
}
const Wrapper = styled.section`
	height: 100vh;
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
		color: var(--body_color_grey);
	}
	.title {
		text-align: left;
		padding-bottom: 10px;
		color: var(--body_color_white);
	}

	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
`
export default AboutPage

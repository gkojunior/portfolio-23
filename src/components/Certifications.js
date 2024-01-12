import React from 'react'
import { certifications } from './utils/constants'
import Title from './Title.js'
import styled from 'styled-components'

const Certifications = () => {
	return (
		<Wrapper>
			<div className='section-center'>
				<Title title='my' subTitle='certifications' />

				<div className='services-center'>
					{certifications.map((service) => {
						const { id, icon, title, text } = service
						return (
							<article className='service' key={id}>
								<span className='icon'>{icon}</span>
								<h4>{title}</h4>
								<p>{text}</p>
							</article>
						)
					})}
				</div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	height: 100vh;
	padding: 5rem 0;
	background: var(--body_background);

	.section-title h2 {
		padding: 1rem;
		text-transform: uppercase;
	}
	p {
		margin-bottom: 0;
		line-height: 1.8;
		// color: var(--bm_brown);
	}
	.services-center {
		display: grid;
		gap: 2.5rem;
	}
	.service {
		background: var(--brown);
		text-align: center;
		padding: 2.5rem 2rem;
		border-radius: var(--radius);
		p {
			color: var(--body_color);
		}
	}
	.service:hover {
		background: var(--black);
		color: var(--white);
	}
	.service:hover p {
		color: var(--white);
	}
	@media (min-width: 768px) {
		height: 100vh;
	}
	@media (min-width: 992px) {
		.header {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (min-width: 576px) {
		.services-center {
			grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		}
	}
	@media (min-width: 1280px) {
		padding: 0;
		.section-center {
			transform: translateY(5rem);
		}
	}
`

export default Certifications

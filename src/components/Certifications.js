import React from 'react'
import { certifications } from './utils/constants'

import styled from 'styled-components'

const Certifications = () => {
	return (
		<Wrapper>
			<div className='section-center'>
			<div className='section-title'>
						<h2>Certifications</h2>
						<div className='underline'></div>
					</div>
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
	padding: 5rem 0;
	background: var(--body_background2);
	.section-title {
		margin-bottom: 4rem;
		text-align: center;
		color: var(--body_color_white);
	  
	  }
	.section-title h2{
		  padding: 1rem;
	  }
	p {
		margin-bottom: 0;
		line-height: 1.8;
		color: var(--body_color);
	}
	.services-center {
		display: grid;
		gap: 2.5rem;
	}
	.service {
		background: hsl(21, 28%, 58%);
		text-align: center;
		padding: 2.5rem 2rem;
		border-radius: var(--radius);
		p {
			color: var(--body_color);
		}
	}
	.service:hover {
		background: var(--body_color);
		color: var(--clr-white);
	  }
	.service:hover p {
		color: var(--clr-white);
	  }
	span {
		width: 4rem;
		height: 4rem;
		display: grid;
		margin: 0 auto;
		place-items: center;
		margin-bottom: 1rem;
		border-radius: 50%;
		background: hsl(21, 46%, 47%);
		color: var(--body_color);
		svg {
			font-size: 2rem;
		}
	}

	.underline {
		width: 6rem;
		height: 0.25rem;
		background: #49a6e9;
		background: var(--clr-brown);
		margin-left: auto;
		margin-right: auto;
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

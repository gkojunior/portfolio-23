import React from 'react'
import styled from 'styled-components'
import Title from './Title'

const ContactPage = () => {
	return (
		<Wrapper>
			<section className='section single-page'>
				<Title title='contact' subTitle='me'/>

				<div className='section-center page-info'>
					<p>
						For business inquiries and collaborations please reach out to me
						via email or on any of my social websites. I am looking forward to
						hearing from you!
						<a href='mailto:gkojunior@gmail.com'>
							<button>Email Me</button>
						</a>
					</p>
				</div>
			</section>
		</Wrapper>
	)
}
const Wrapper = styled.section`
	.section {
		margin-top: 5rem;
	}
	.single-page {
		background: var(--body_background);
		min-height: calc(100vh - 5rem - 198px);
	}
	.page-info {
		max-width: 700px;
	}
	.page-info a {
		text-transform: uppercase;
		color: var(--body_color_brown);
		-webkit-transition: var(--transition);
		transition: var(--transition);
	}
	.page-info a:hover {
		color: var(--body_color_brown);
	}
	.section-title {
		text-align: center;
	}
	.underline {
		width: 6rem;
		height: 0.25rem;
		background: #49a6e9;
		background: var(--clr-brown);
		margin-left: auto;
		margin-right: auto;
	}
	button {
		padding: 0.25rem;
		margin-left: 1rem;
	}
`
export default ContactPage

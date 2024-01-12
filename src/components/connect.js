import React from 'react'
import styled from 'styled-components'
import video from '../assets/video/Vid.mp4'
const Connect = () => {
	return (
		<Wrapper>
			<section className='connect'>
				<video
					src={video}
					type='video/mp4'
					autoPlay
					muted
					loop
					className='video-container'
				/>
				<div className='video-banner'>
					<div className='section-title'>
						<h2>Get in touch</h2>
						<div className='underline'></div>
					</div>

					<p className='video-text'>
						For business inquiries and collaborations please contact me on any
						of my social websites. I am looking forward to hearing from you!
					</p>
					<a href='/contact' className='btn'>
						contact me
					</a>
				</div>
			</section>
		</Wrapper>
	)
}
const Wrapper = styled.section`
height:100vh
background:var(--brown);
	.connect {
		position: relative;
		padding: 10rem 0 5rem 0;
		margin: 5rem 0;
	}
	.video-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		-o-object-fit: cover;
		object-fit: cover;
		z-index: -2;
	}
	.connect::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.7;
		z-index: -1;
	}
	.connect {
		display: grid;
		place-items: center;
	}
	.video-banner .section-title {
		margin-bottom: 2rem;
	}
	.video-text {
		max-width: 30rem;
	}
	.video-banner {
		background: hsl(21, 28%, 58%, 0.88);
		padding: 2rem 4rem 11rem 4rem;
		text-align: center;

		-webkit-clip-path: polygon(
			0% 0%,
			100% 0%,
			100% 75%,
			75% 75%,
			75% 100%,
			50% 75%,
			0% 75%
		);
		clip-path: polygon(
			0% 0%,
			100% 0%,
			100% 75%,
			75% 75%,
			75% 100%,
			50% 75%,
			0% 75%
		);
	}
	.connect {
		-webkit-clip-path: polygon(
			50% 0%,
			100% 10%,
			100% 90%,
			50% 100%,
			0 90%,
			0 10%
		);
		clip-path: polygon(50% 0%, 100% 10%, 100% 90%, 50% 100%, 0 90%, 0 10%);
	}
	@media only screen and (max-width: 425px) {
		.video-container {
			display: none;
		}
	}

	@media screen and (min-width: 768px) {
		margin-top:5rem;
	}

`

export default Connect

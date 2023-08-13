import React, { useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import { people } from './utils/data'
import styled from 'styled-components'

function Slider() {
	const [index, setIndex] = React.useState(0)

	useEffect(() => {
		const lastIndex = people.length - 1
		if (index < 0) {
			setIndex(lastIndex)
		}
		if (index > lastIndex) {
			setIndex(0)
		}
	}, [index])

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1)
		}, 5000)
		return () => {
			clearInterval(slider)
		}
	}, [index])

	return (
		<Wrapper className='section'>
			<div className='title'>
				<h2>
					<span>/</span>Family
				</h2>
			</div>
			<div className='section-center'>
				{people.map((person, personIndex) => {
					const { id, image, name, title, quote } = person

					let position = 'nextSlide'
					if (personIndex === index) {
						position = 'activeSlide'
					}
					if (
						personIndex === index - 1 ||
						(index === 0 && personIndex === people.length - 1)
					) {
						position = 'lastSlide'
					}

					return (
						<article className={position} key={id}>
							<img src={image} alt={name} className='person-img' />
							<h4>{name}</h4>
							<p className='title'>{title}</p>
							<p className='text'>{quote}</p>
							<FaQuoteRight className='icon' />
						</article>
					)
				})}
				<button className='prev' onClick={() => setIndex(index - 1)}>
					<FiChevronLeft />
				</button>
				<button className='next' onClick={() => setIndex(index + 1)}>
					<FiChevronRight />
				</button>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.section`
margin-top:5rem;
	.title {
		text-align: center;
		margin-bottom: 2rem;
	}
	.title h2 {
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 500;
	}
	.title span {
		font-size: 0.85em;
		color: var(--clr-brown);
		margin-right: 1rem;
		font-weight: 700;
	}
	.section-center {
		margin: 0 auto;
		margin-top: 4rem;
		width: 80vw;
		height: 450px;
		max-width: 800px;
		text-align: center;
		position: relative;
		display: flex;
		overflow: hidden;
	}
	.person-img {
		border-radius: 50%;
		margin-bottom: 1rem;
		width: 200px;
		height: 200px;
		object-fit: cover;
		border: 4px solid var(--clr-brown);
		box-shadow: var(--dark-shadow);
	}
	article h4 {
		text-transform: uppercase;
		color: var(--body_color_brown);
		margin-bottom: 0.25rem;
	}
	.title {
		text-transform: capitalize;
		margin-bottom: 0.75rem;
		color: var(--body_color_white);
	}
	.text {
		max-width: 35em;
		margin: 0 auto;
		margin-top: 2rem;
		line-height: 2;
		color: var(--body_color_white);

	}
	.icon {
		font-size: 3rem;
		margin-top: 1rem;
		color: var(--body_color_brown);
	}
	.prev,
	.next {
		position: absolute;
		top: 200px;
		transform: translateY(-50%);
		background: var(--body_color_black);
		color: var(--clr-brown);
		width: 1.25rem;
		height: 1.25rem;
		display: grid;
		place-items: center;
		border-color: transparent;
		font-size: 1rem;
		border-radius: 50%;
		cursor: pointer;
		transition: var(--transition);
	}
	.prev:hover,
	.next:hover {
		background: var(--var(--body_background));
	}
	.prev {
		left: 0;
	}
	.next {
		right: 0;
	}
	@media (min-width: 800px) {
		.text {
			max-width: 45em;
		}
		.prev,
		.next {
			width: 2rem;
			height: 2rem;
			font-size: 1.5rem;
		}
	}
	article {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: var(--transition);
	}
	article.activeSlide {
		opacity: 1;
		transform: translateX(0);
	}
	article.lastSlide {
		transform: translateX(-100%);
	}
	article.nextSlide {
		transform: translateX(100%);
	}
`
export default Slider
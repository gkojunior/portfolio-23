import { useState } from 'react'
import { projects } from './utils/data'
import Title from './Title'
import Menu from './Menu'
import Categories from './Categories'
import styled from 'styled-components'

const allCategories = ['all', ...new Set(projects.map((item) => item.category))]

const Projects = () => {
	const [menuItems, setMenuItems] = useState(projects)
	console.log(projects)
	const [categories, ] = useState(allCategories)

	const filterItems = (category) => {
		if (category === 'all') {
			setMenuItems(projects)
			return
		}
		const newItems = projects.filter((item) => item.category === category)
		setMenuItems(newItems)
	}

	return (
		<Wrapper>
			<section className='menu'>
				<Title title='my' subTitle='projects' />
				<Categories categories={categories} filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</Wrapper>
	)
}

export default Projects

const Wrapper = styled.section`
	.menu {
		margin-top: 8rem;
	}
	.btn-container {
		margin: 2rem 0 4rem 0;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
	}
	.project-section-center {
		width: 90vw;
		margin: 0 auto;
		max-width: var(--max-width);
		display: grid;
		gap: 2rem;
	}

	.menu-item {
		background: var(--white);
		border-radius: var(--borderRadius);
	}
	.menu-item .img {
		height: 15rem;
		border-top-right-radius: var(--borderRadius);
		border-top-left-radius: var(--borderRadius);
	}
	.item-info {
		padding: 1.5rem;
	}
	.item-info header {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 1.25rem;
	}

	.item-info h5 {
		font-weight: 500;
	}
	.item-price {
		background: var(--primary-500);
		color: var(--white);
		padding: 0.25rem 0.5rem;
		letter-spacing: var(--letterSpacing);
		border-radius: var(--borderRadius);
	}

	.item-text {
		line-height: 2;
		color: var(--grey-500);
	}

	.project-section-center {
		justify-items: center;
	}
	.menu-item {
		max-width: 25rem;
	}

	@media screen and (min-width: 992px) {
		.project-section-center {
			grid-template-columns: 1fr 1fr;
			align-items: start;
		}
	}
	@media screen and (min-width: 1170px) {
		.project-section-center {
			width: 95vw;
			grid-template-columns: repeat(3, 1fr);
		}
	}
`

import React from 'react'
import styled from 'styled-components'

// Shows the different type of lanaguages on my portfolio page
const Categories = ({ categories, filterItems }) => {
	return (
		<Wrapper>
			<div className='btn-container'>
				{categories.map((category) => {
					return (
						<button
							type='button'
							key={category}
							className='btn'
							onClick={() => filterItems(category)}
						>
							{category}
						</button>
					)
				})}
			</div>
		</Wrapper>
	)
}

export default Categories

const Wrapper = styled.section``

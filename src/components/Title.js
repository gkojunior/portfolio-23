import styled from 'styled-components'

const Title = ({ title, subTitle }) => {
	return (
		<Wrapper className='section-title'>
			<h2>
				{title} <span>{subTitle}</span>
				<div className='underline'></div>
			</h2>
		</Wrapper>
	)
}
export default Title

const Wrapper = styled.section`
	.underline {
		width: 8rem;
		height: 0.25rem;
		background: blue;
		margin-left: auto;
		margin-right: auto;
		margin-top: 1rem;
	}
`

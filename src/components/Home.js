import styled from 'styled-components'
import Welcome from './Welcome'

function Home() {
	return (
		<Wrapper>
			<Welcome />
		</Wrapper>
	)
}

export default Home

const Wrapper = styled.section`
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`

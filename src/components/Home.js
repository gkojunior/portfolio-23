import Certifications from './Certifications'
import styled from 'styled-components'
import Welcome from './Welcome'
import Skills from './Skills'
import Connect from './connect'

function Home() {
	return (
		<Wrapper>
			<Welcome />
			<Skills />
			<Certifications />
			<Connect />
		</Wrapper>
	)
}

export default Home

const Wrapper = styled.section`
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
	overflow-y: auto;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`

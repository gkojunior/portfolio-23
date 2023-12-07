import Certifications from './Certifications'
import styled from 'styled-components'
import Welcome from './Welcome'
import Skills from './Skills'
import Connect from './connect'
import Projects from './Projects'

function Home() {
	return (
		<Wrapper>
			<main>
				<Welcome />
				<Skills />
				<Certifications />
				<Projects/>
				<Connect />
			</main>
		</Wrapper>
	)
}

export default Home

const Wrapper = styled.section``

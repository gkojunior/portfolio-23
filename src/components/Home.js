import Certifications from './Certifications'
import styled from 'styled-components'
import Welcome from './Welcome'
import Skills from './Skills'
import Connect from './connect'
import Projects from './Projects'
import ContactPage from './ContactPage'

function Home() {
	return (
		<Wrapper>
			<main>
				<Welcome />
				<Skills />
				<Certifications />
				<Projects/>
				<Connect />
				<ContactPage/>
			</main>
		</Wrapper>
	)
}

export default Home

const Wrapper = styled.section``

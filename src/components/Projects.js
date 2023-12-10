import { project } from './utils/data'
import Project from './Project'
import Title from './Title'

const Projects = () => {
	return (
		<section className='project-container'>
			<div className='section-title'>
				<Title title='My' subTitle='projects' />
				<div className='underline'></div>
			</div>
			<div className='section-center featured-center'>
				{project.map((project) => {
					return <Project {...project} key={project.id} />
				})}
			</div>

			
		</section>
	)
}

export default Projects

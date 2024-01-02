import { useState } from 'react'
import { projects } from './utils/data'
import Project from './Project'
import Title from './Title'

const Projects = () => {
	return (
		<section className='project-container'>
			<div className='section-title'>
				<Title title='My' subTitle='Portfolio' />
				<div className='underline'></div>
			</div>
			<div className='section-center featured-center'>
				{projects.map((project) => {
					return <Project {...project} key={project.id} />
				})}
			</div>

			
		</section>
	)
}

export default Projects

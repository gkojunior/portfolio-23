import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Project = ({ image, title, info, language, date, href }) => {
	const [showInfo, setShowInfo] = useState(false)

	return (
		<article className='project-card'>
			<div className='project-img-container'>
				<a href={href}>
					<img src={image} className='project-img' alt={title} />
				</a>

				<p className='project-date'>{date}</p>
			</div>
			<div className='project-info'>
				<div className='project-title'>
					<h4>{title}</h4>
					<button
						className='question-btn'
						onClick={() => {
							setShowInfo(!showInfo)
						}}
					>
						{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
					</button>
				</div>
				{showInfo && <p>{info}</p>}

				{showInfo && (
					<div className='project-footer'>
						<p>
							<span>
								<i className='fas fa-map'></i>
							</span>
							{language}
						</p>
					</div>
				)}
			</div>
		</article>
	)
}
export default Project

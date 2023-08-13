const Project = ({ image, title, info, language, date }) => {
  return (
    <article className='project-card'>
      <div className='project-img-container'>
        <img src={image} className='project-img' alt={title} />
        <p className='project-date'>{date}</p>

      </div>
      <div className='project-info'>
        <div className='project-title'>
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className='project-footer'>
          <p>
            <span>
              <i className='fas fa-map'></i>
            </span>
            {language}
          </p>
        </div>
      </div>
    </article>
  )
}
export default Project

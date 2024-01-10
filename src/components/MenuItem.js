const MenuItem = ({ image, title, category, info, href }) => {
	return (
		<article className='menu-item'>
			<a href={href}>
				<img src={image} alt={title} className='img' />
			</a>
			<div className='item-info'>
				<header>
					<h5>{title}</h5>
					<span className='item-price'>{category}</span>
				</header>
				<p className='item-text'>{info}</p>
			</div>
		</article>
	)
}
export default MenuItem

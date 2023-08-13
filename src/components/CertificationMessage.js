import React from 'react'
import Typed from 'typed.js'

function Certification() {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null)

	React.useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ['Node.JS', 'Express', 'React.JS', 'HTML', 'CSS', 'JavaScript'],
			typeSpeed: 150,
			backSpeed: 150,
			loop: true,
		})

		return () => {
			// Destroy Typed instance during cleanup to stop animation
			typed.destroy()
		}
	}, [])

	return (
		<div>
			<h3 className='welcomeMessage'>
				I have Certification in <span ref={el} />
			</h3>
		</div>
	)
}

export default Certification

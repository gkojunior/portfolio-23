import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'

export const links = [
    {
      id: 1,
      text: 'home',
      url: '/',
    },
    {
      id: 2,
      text: 'about',
      url: '/about',
	},
	{
		id: 3,
		text: 'projects',
		url: '/projects',
	},
	{
		id: 4,
		text: 'contact',
		url: '/contact',
	},

]

export const certifications = [
	{
		id: 1,
		icon: <GiCompass />,
		title: 'Node',
		text: " I am a Full Stack Software Engineering. I wish to use my experience and knowledge to help any one in need.I am currently furthering my back-end knowledge by learning Python and Ruby on Rails",
	},
	{
		id: 2,
		icon: <GiDiamondHard />,
		title: 'React',
		text: "I strive to exceed our customers' expecations with wonderful websites. Highly skilled in front-end web development and UI.",
	},
	{
		id: 3,
		icon: <GiStabbedNote />,
		title: 'JavaScript',
		text: "Skilled in design systems & UI Engineering. As a Software Developer I love creating beautiful digital experiences "
		
	}

]

export const socialLinks = [
	{ id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
	{ id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
	{ id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
  ];
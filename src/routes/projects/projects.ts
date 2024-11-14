import type { Project } from '@lib/types';
import homethings from '@lib/img/homethings.webp';
import webiliti from '@lib/img/webiliti.png';

export const projects: Project[] = [
	{
		name: 'Homethings',
		id: 1,
		img: homethings,
		description:
			'The home & personal playground built using TypeScript, Svelte, SvelteKit & SQLite. The app features a number of hobby projects including a personal note taking app, document storage, a personalised AI Chatbot as well as others.',
		technologies: [
			'TypeScript',
			'Svelte',
			'SvelteKit',
			'Tailwind CSS',
			'Cloudflare',
			'Drizzle',
			'SQLite'
		],
		link: {
			url: 'https://homethings.ytsruh.com/',
			text: 'Visit'
		},
		github: {
			url: 'https://github.com/ytsruh/homethings',
			text: 'Github'
		}
	},
	{
		name: 'Webiliti',
		id: 2,
		img: webiliti,
		description:
			'The web testing app built using TypeScript & React. The Hono app has the majority of the functionality The Hono app has the majority of the functionality, there are api routes to handle a few specific browser based tasks and the main app CRYD functionality including auth. The app runs a number of browser based tests on a given page to allow a user to track web performance over time.',
		technologies: [
			'Typescript',
			'React',
			'Tailwind CSS',
			'HonoJs',
			'Cloudflare',
			'Koyeb',
			'SQlite'
		],
		link: {
			url: 'https://www.webiliti.com/',
			text: 'Visit'
		},
		github: null
	},
	{
		name: 'Finly',
		id: 3,
		img: 'https://placehold.co/600x400?text=Coming+Soon',
		description:
			'Finly is a market data app built using Go, Echo & Postgres. The app is an API that holds relevant market data from over 25+ sources and aggregates it into a single scalable format. HTMX is used to create a small loggedin section to allow users to manage API keys.',
		technologies: ['Go / Golang', 'Echo', 'HTMX', 'Tailwind CSS', 'Koyeb', 'SQLite'],
		link: {
			url: 'https://www.finly.cc',
			text: 'Visit'
		},
		github: null
	}
];

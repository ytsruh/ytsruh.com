export type Categories = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};

export type Job = {
	name: string;
	logo: string;
	jobTitle: string;
	date: string;
	description: string;
};

type Link = {
	url: string;
	text: string;
};

export type Project = {
	name: string;
	id: number;
	img: string;
	description: string;
	technologies: string[];
	link: Link | null;
	github: Link | null;
};

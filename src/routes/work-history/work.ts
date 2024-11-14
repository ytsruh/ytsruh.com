import type { Job } from '@lib/types';
import latitude from '@lib/img/latitude.webp';
import thomsonreuters from '@lib/img/thomson-reuters.webp';
import refinitiv from '@lib/img/refinitiv.webp';
import lseg from '@lib/img/lseg.webp';

export const work: Job[] = [
	{
		name: 'London Stock Exchange Group',
		logo: lseg,
		jobTitle: 'Digital Strategy & Enablement Manager',
		date: 'Dec 16 - Oct 18',
		description:
			'Acting as product owner for all marketing websites in the group. Working with multiple development teams to support, maintain & enhance the Adobe & Drupal platforms.'
	},
	{
		name: 'Refinitiv',
		logo: refinitiv,
		jobTitle: 'Senior Manager, Digital Localisation',
		date: 'Oct 18 - Sep 21',
		description:
			'Responsible for management of 6 local language websites built using Adobe Experience Manager. Secondary responsibility for website performance channels such as SEO, Paid Search & Social.'
	},
	{
		name: 'Thomson Reuters',
		logo: thomsonreuters,
		jobTitle: 'Head of Digital - Middle East',
		date: 'Dec 16 - Oct 18',
		description:
			'Lead & revenue generating responsibility for the MENA region of Thomson Reuters using all available digital channels. Digital analytics and reporting dashboard integrated into CRM and sales dashboards.'
	},
	{
		name: 'Latitude Digital Marketing',
		logo: latitude,
		jobTitle: 'Account Manager - Middle East',
		date: 'Jun 12 - Dec 15',
		description:
			'Responsible for account management for a selection of key strategic accounts in the region across Travel, Ecommerce & Financial sectors. Advising clients on all Paid & Organic Digital channels to increase business & website performance.'
	}
];

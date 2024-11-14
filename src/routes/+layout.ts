export const prerender = true;

import posthog from 'posthog-js';
import { browser } from '$app/environment';

export const load = async () => {
	if (browser) {
		posthog.init('phc_QAuZprs41QP8T9M2q1zC1Z1gMhLGMPItCF2bg91MyFv', {
			api_host: 'https://eu.i.posthog.com',
			person_profiles: 'identified_only'
		});
	}
	return;
};

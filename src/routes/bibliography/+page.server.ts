import type { PageServerLoad } from './$types';

import { loadBibliographies } from 'kodon';

export const prerender = true;

export const load: PageServerLoad = async ({ parent }) => {
	const parentData = await parent();

	const { bibliographies, csls } = loadBibliographies(parentData.config.bibliographies_directory);
	const data = (await import('$lib/assets/wikidata_citations.json')).default;

	const wikidataCitations = data.map((citation: any) => {
		const citedBy = citation.citedBy.map((citedBy: any) => {
			return {
				id: citedBy.cited.value.split('/').at(-1),
				author: citedBy.authorLabel.value,
				place: citedBy.placeLabel?.value,
				pubdate: citedBy.pubdate.value,
				publisher: citedBy.publisherLabel?.value,
				title: citedBy.title.value
			};
		});

		return {
			...citation,
			citedBy
		};
	});

	return { bibliographies, csls, wikidataCitations };
};

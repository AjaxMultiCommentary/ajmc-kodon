<script lang="ts">
	import type { Comment, PassageConfig, TextContainer } from 'kodon';
	import { page } from '$app/stores';
	import { ReadingEnvironment } from 'kodon';

	let { data } = $props();

	let comments = $derived(data.comments as unknown as Comment[]);
	let currentPassage = $derived(data.currentPassage as unknown as PassageConfig);
	let metadata = $derived(data.metadata);
	let passages = $derived(data.passages as unknown as PassageConfig[]);
	let textContainers = $derived(data.textContainers as unknown as TextContainer[]);

	function stripMarkdown(s: string): string {
		return s.replace(/_|\*/gi, '');
	}

	const heatmapTooltip = `The highlights below illustrate the "density" of
comments on a particular lemma or line.
Darker shades of blue indicate a greater number of glosses on the
highlighted portion of the text.`;
	const filterListTooltip = `Use this filter to show or hide comments on the right. You can search for a commentary by name using the text box.`;
	const navigationTooltip = `This synopsis is based on the Lloyd-Jones edition of the text,
                    and the line numbers might not line up exactly with other editions.
                    Click on a section of the synopsis to view it in the critical text area.`;
	const tableViewTooltip = `Use this view to show a tabular layout of each token along with its number of glossae and their URNs.`;
</script>

<svelte:head>
	<title>{stripMarkdown(metadata.title)}</title>
</svelte:head>

<ReadingEnvironment
	currentURL={$page.url}
	{comments}
	{currentPassage}
	{heatmapTooltip}
	{filterListTooltip}
	{navigationTooltip}
	{passages}
	{textContainers}
	{tableViewTooltip}
	iiifURL="https://iiif.ajmc.ch/"
/>

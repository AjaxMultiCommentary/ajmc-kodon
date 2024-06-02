<script lang="ts">
	import type { Comment, PassageConfig, TextContainer } from 'kodon';
	import { ReadingEnvironment } from 'kodon';

	export let data;

	$: comments = data.comments as Comment[];
	$: currentPassage = data.currentPassage as PassageConfig;
	$: metadata = data.metadata;
	$: passages = data.passages as PassageConfig[];
	$: textContainers = data.textContainers as TextContainer[];

	function stripMarkdown(s: string): string {
		return s.replace(/_|\*/gi, '');
	}
</script>

<svelte:head>
	<title>{stripMarkdown(metadata.title)}</title>
</svelte:head>
<ReadingEnvironment
	{comments}
	{currentPassage}
	{metadata}
	iiifURL="https://raw.githubusercontent.com/AjaxMultiCommentary/ajmc_iiif/main/docs"
	{passages}
	{textContainers}
/>

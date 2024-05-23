<script lang="ts">
	import type { Comment, PassageConfig, TextContainer } from '$lib/types';

	import ReadingEnvironment from '$lib/components/ReadingEnvironment.svelte';

	export let data;

	$: comments = data.comments as Comment[];
	$: currentPassage = data.currentPassage as unknown as PassageConfig;
	$: metadata = data.metadata;
	$: passages = data.passages as unknown as PassageConfig[];
	$: textContainers = data.textContainers as TextContainer[];

	function stripMarkdown(s: string): string {
		return s.replace(/_|\*/gi, '');
	}
</script>

<svelte:head>
	<title>{stripMarkdown(metadata.title)}</title>
</svelte:head>
<ReadingEnvironment {comments} {currentPassage} {metadata} {passages} {textContainers} />

<script lang="ts">
	import type { Comment, PassageConfig, TextContainer } from '$lib/types';

	import { page } from '$app/stores';
	import ReadingEnvironment from '$lib/components/ReadingEnvironment.svelte';

	export let data;

	const commentToHighlight = $page.url.searchParams.get('gloss');

    $: comments = (data.comments as Comment[]).map((comment: Comment) => {
        if (comment.citable_urn === commentToHighlight) {
            return {
                ...comment,
                isHighlighted: true
            };
        }

        return comment;
    });
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
<ReadingEnvironment
	{comments}
	{commentToHighlight}
	{currentPassage}
	{metadata}
	{passages}
	{textContainers}
/>

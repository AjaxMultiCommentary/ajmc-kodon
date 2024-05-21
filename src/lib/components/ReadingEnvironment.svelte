<script lang="ts">
	import type { Comment } from '$lib/types';

	import { page } from '$app/stores';
	import CitableTextContainer from '$lib/components/CitableTextContainer.svelte';
	import CollapsibleComment from '$lib/components/CollapsibleComment.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import { marked } from 'marked';
	import { onMount, tick } from 'svelte';
	import type { ChangeEventHandler } from 'svelte/elements';

	export let comments: Comment[];
	export let currentPassage;
	export let metadata;
	export let passages;
	export let textContainers;

	$: showHeatmap = true;

	onMount(() => {
		const commentToHighlight = $page.url.searchParams.get('gloss');

		if (commentToHighlight) {
			highlightComments([commentToHighlight]);
		}
	});

	function handleHighlightComments(e: CustomEvent) {
		highlightComments(e.detail);
	}

	async function highlightComments(commentsToHighlight: string[]) {
		let foundComment: Comment | undefined;

		comments = comments.map((comment: Comment) => {
			if (commentsToHighlight.includes(comment.citable_urn as string)) {
				if (!foundComment) {
					foundComment = comment;
				}

				return {
					...comment,
					isHighlighted: true
				};
			}

			return {
				...comment,
				isHighlighted: false
			};
		});

		if (foundComment && foundComment.citable_urn) {
			await tick();

			setTimeout(() => {
				// @ts-ignore
				document.getElementById(foundComment.citable_urn)?.scrollIntoView({ behavior: 'smooth' });
			}, 200);
		}
	}

	function toggleHeatmap() {
		showHeatmap = !showHeatmap;
	}
</script>

<article class="mx-auto w-full p-8">
	<div class="grid grid-cols-10 gap-x-8 gap-y-2 h-screen max-h-[64rem]">
		<div class="col-span-full flex justify-between">
			<div>
				<h1 class="text-2xl font-bold">{@html marked(metadata.title)}</h1>

				<p>{@html marked(metadata.description)}</p>
			</div>
			<div>
				<form on:submit={toggleHeatmap}>
					<div class="form-control">
						<label class="label cursor-pointer">
							<span class="label-text mr-2">Highlight lemmata</span>
							<input
								name="heatmap-toggle"
								type="checkbox"
								class="toggle"
								on:change={toggleHeatmap}
								checked={showHeatmap}
								value="1"
							/>
						</label>
					</div>
				</form>
			</div>
		</div>
		<section class="col-span-2">
			<Navigation {passages} currentPassageUrn={currentPassage.urn} />
		</section>
		<section class="col-span-5 overflow-y-scroll -mt-4">
			{#each textContainers as textContainer}
				<CitableTextContainer
					{textContainer}
					on:highlightComments={handleHighlightComments}
					{showHeatmap}
				/>
			{/each}
		</section>
		<section class="overflow-y-scroll col-span-3 max-h-screen">
			{#each comments as comment}
				<CollapsibleComment {comment} />
			{/each}
		</section>
	</div>
</article>

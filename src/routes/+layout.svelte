<script lang="ts">
	import type { LayoutData } from './$types';
	import '../app.css';

	import { base } from '$app/paths';

	import { Header } from 'kodon';

	interface Props {
		data: LayoutData;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();
</script>

<main class="px-4">
	<Header title={data.title} staticPages={data.staticPages}>
		<a href="{base}/passages" class="link link-hover">Multi-Commentary</a>
	</Header>
	{@render children?.()}
</main>

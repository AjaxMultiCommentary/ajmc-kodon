<script lang="ts">
	import { Header } from 'kodon';
	import '../app.css';

	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<main class="px-4">
	<Header title={data.title} staticPages={data.staticPages} />
	<slot />
</main>

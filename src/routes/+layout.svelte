<script lang="ts">
	import '../app.css';

	import { Header } from 'kodon';

	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<main class="px-4">
	<Header title={data.title} staticPages={data.staticPages} />
	<slot />
</main>

<script lang="ts">
	import { Bibliography } from 'kodon';

	export let data;

	$: bibliographies = data.bibliographies;
	$: csls = data.csls;
</script>

<Bibliography {bibliographies} {csls} />

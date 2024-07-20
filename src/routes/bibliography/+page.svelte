<script lang="ts">
	import { Bibliography, WikidataBibliography } from 'kodon';

	export let data;

	$: bibliographies = data.bibliographies;
	$: csls = data.csls;
	$: wikidataCitations = data.wikidataCitations;
	$: activeTab = 'core-bibliography';
</script>

<div role="tablist" class="tabs tabs-bordered">
	<input
		type="radio"
		name="bibliography"
		role="tab"
		class="tab"
		aria-label="Core Bibliography"
		checked={activeTab === 'core-bibliography'}
	/>
	<div role="tabpanel" class="tab-content">
		<Bibliography {bibliographies} {csls} />
	</div>

	<input
		type="radio"
		name="bibliography"
		role="tab"
		class="tab"
		aria-label="Extended Bibliography"
		checked={activeTab === 'extended-bibliography'}
	/>
	<div role="tabpanel" class="tab-content">
		<WikidataBibliography citations={wikidataCitations} />
	</div>
</div>

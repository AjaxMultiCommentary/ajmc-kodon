<script lang="ts">
	type Option = {
		extra?: string | number;
		label: string;
	};

	export let options: Option[] = [];
	export let inputName = 'filter-list';

	let searchValue = '';

	$: availableOptions =
		searchValue === ''
			? options
			: options.filter((o) => o.label.toLowerCase().includes(searchValue.toLowerCase()));
</script>

<div>
	<input
		type="text"
		name={inputName}
		class="w-full input input-secondary input-sm mb-2"
		placeholder="Filter commentaries"
		bind:value={searchValue}
	/>
	{#each availableOptions as option}
		{@const optionId = `${inputName}-option-${option.label}`}
		<div class="text-sm mb-1">
			<label for={optionId}>
				<input id={optionId} type="checkbox" />
				{option.label}
				{#if option.extra}
					<span class="base-content float-right">({option.extra})</span>
				{/if}
			</label>
		</div>
	{/each}
</div>

<script lang="ts">
    import { onMount } from "svelte";
    import type Project from "./Project";
    import Card from "./Card.svelte";

    let project: number = 0,
        projects: Project[] = [],
        selected: number[] = [0, 1, 2],
        innerWidth: number;

    $: if (project < 0) project = projects.length - 1;

    $: selected = [
        project % projects.length,
        (project + 1) % projects.length,
        (project + 2) % projects.length,
    ];

    onMount(
        async () => (projects = await (await fetch("projects.json")).json())
    );
</script>

<svelte:window bind:innerWidth />
{#if innerWidth > 1500}
    {#if projects.length}
        <div
            class="flex h-[50vh] gap-10 items-center justify-center max-w-full min-w-full"
        >
            <button on:click={() => (project -= 1)}>
                <img src="arrow.svg" alt="Left Arrow" class="w-20" />
            </button>
            {#each selected as project}
                <Card project={projects[project]} />
            {/each}
            <button on:click={() => (project += 1)}>
                <img src="chevron-right.svg" alt="Left Arrow" class="w-20" />
            </button>
        </div>
    {/if}
{:else if innerWidth > 1110}
    <div
        class="flex h-[50vh] gap-10 items-center justify-center max-w-full min-w-full"
    >
        <button on:click={() => (project -= 1)}>
            <img src="arrow.svg" alt="Left Arrow" class="w-20" />
        </button>
        <Card project={projects[selected[0]]} />
        <Card project={projects[selected[1]]} />
        <button on:click={() => (project += 1)}>
            <img src="chevron-right.svg" alt="Left Arrow" class="w-20" />
        </button>
    </div>
{:else}
    <div
        class="flex flex-col h-full gap-10 items-center justify-center max-w-full min-w-full"
    >
        {#each projects as project}
            <div class="w-full h-[50vh]">
                <Card {project} />
            </div>
        {/each}
    </div>
{/if}

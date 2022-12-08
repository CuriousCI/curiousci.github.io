<script lang="ts">
    import { onMount } from "svelte";
    import type Project from "./Project";

    let project: number = 0,
        projects: Project[] = [],
        selected: number[] = [0, 1, 2];

    $: if (project < 0) project = projects.length - 1;

    $: selected = [
        project % projects.length,
        (project + 1) % projects.length,
        (project + 2) % projects.length,
    ];

    $: console.log(selected);

    onMount(async () => {
        projects = await (await fetch("projects.json")).json();
        console.log(project);
    });
</script>

<div class="grid place-items-center">
    <div class="flex gap-10 items-center justify-center max-w-full min-w-full">
        {#if projects.length}
            <button on:click={() => (project -= 1)}>
                <img
                    src="arrow.svg"
                    alt="Left Arrow"
                    class="w-20 cursor-pointer"
                />
            </button>
            {#each selected as project}
                <div
                    class="w-[25vw] h-[50vh] p-10 box-border bg-dbg rounded-3xl shadow-2xl shadow-black max-w-xl flex flex-col items-center justify-between"
                >
                    <div
                        class="rounded-t-2xl w-full h-[75%] shadow-2xl shadow-black relative"
                        style="background-image: url({projects[project]
                            .assets[0]})"
                    >
                        <div
                            class="absolute right-6 bottom-4 flex items-center justify-end gap-4"
                        >
                            {#if projects[project].github}
                                <a href={projects[project].github}>
                                    <img
                                        src="github.svg"
                                        alt="GitHub"
                                        class="w-7"
                                    />
                                </a>
                            {/if}
                            {#if projects[project].website}
                                <a href={projects[project].website}>
                                    <img
                                        src="website.svg"
                                        alt="Website"
                                        class="w-8"
                                    />
                                </a>
                            {/if}
                        </div>
                    </div>
                    <div class="w-full h-20">
                        <h1 class="text-3xl text-dfg">
                            {projects[project].name}
                        </h1>
                        <p class="text-dfg1 text-xl font-light">
                            {projects[project].description}
                        </p>
                    </div>
                </div>
            {/each}
            <button on:click={() => (project += 1)}>
                <img
                    src="arrow.svg"
                    alt="Left Arrow"
                    class="w-20 rotate-180 cursor-pointer"
                />
            </button>
        {/if}
    </div>
</div>

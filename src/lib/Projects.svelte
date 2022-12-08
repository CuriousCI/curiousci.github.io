<script lang="ts">
    import { onMount } from "svelte";
    import type Project from "./Project";
    // import Project from "$lib/Project";

    let p: number = 0,
        projects: Project[] = [];

    onMount(async () => {
        projects = await (await fetch("projects.json")).json();
    });
</script>

<div>
    {#each projects as project}
        <div>
            {project.name}
            {project.description}
        </div>
    {/each}
    <!-- Project 1 {p % 10} -->
    <!-- Project 2 {(p + 1) % 10} -->
    <!-- Project 3 {(p + 2) % 10} -->
</div>

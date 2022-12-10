<script lang="ts">
    import type Project from "./Project";

    export let project: Project;
</script>

<div
    class="w-full h-full flex flex-col items-center justify-between box-border p-10 bg-dbg rounded-3xl shadow-2xl shadow-black transition-all hover:scale-105"
>
    <div
        class="rounded-t-2xl w-full h-[75%] shadow-2xl shadow-black relative bg-cover bg-center"
        style="background-image: url({project.assets[0]})"
    >
        <div
            class="absolute right-6 bottom-4 flex items-center justify-end gap-4"
        >
            {#if project.github}
                <a href={project.github}>
                    <img src="github.svg" alt="GitHub" class="w-7" />
                </a>
            {/if}
            {#if project.website}
                <a href={project.website}>
                    <img src="website.svg" alt="Website" class="w-8" />
                </a>
            {/if}
        </div>
    </div>
    <div class="w-full h-20">
        <h1 class="text-3xl text-dfg">
            {project.name}
        </h1>
        <p class="text-dfg1 text-xl font-light">
            {project.description}
        </p>
    </div>
</div>

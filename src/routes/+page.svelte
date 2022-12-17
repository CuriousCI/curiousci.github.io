<script lang="ts">
    import Projects from "$lib/Projects.svelte";
    let home: boolean = true;
</script>

{#if home}
    <div class="relative">
        <h1 class="text-8xl sm:text-9xl text-dfg text-center">Ionuţ Cicio</h1>
        <div class="flex items-center justify-between flex-col md:flex-row">
            <div
                class="flex items-center gap-4 justify-center sm:justify-start"
            >
                <a href="https://github.com/CuriousCI">
                    <img src="github.svg" alt="GitHub" class="w-14" />
                </a>
                <a href="https://www.linkedin.com/in/ionut-cicio-395541211/">
                    <img src="linkedin.svg" alt="LinkedIn" class="w-12" />
                </a>
                <a
                    href="https://en.wikipedia.org/wiki/Work_in_process"
                    target="_blank"
                >
                    <img src="resume.svg" alt="Resume" class="w-14" />
                </a>
            </div>
            <button on:click={() => (home = false)}>
                <span
                    class="text-white text-5xl sm:text-6xl text-center projects"
                >
                    PROJECTS!
                </span>
            </button>
        </div>
    </div>
{:else}
    <div class="relative w-full h-full box-border p-20 grid items-center">
        <button class="absolute top-8 right-8" on:click={() => (home = true)}>
            <img src="home.svg" alt="Home" class="w-12" />
        </button>
        <Projects />
    </div>
{/if}

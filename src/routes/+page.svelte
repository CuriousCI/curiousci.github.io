<script lang="ts">
    import Projects from "$lib/Projects.svelte";
    let showHome: boolean = true;
</script>

<div class="relative">
    {#if showHome}
        <h1 class="text-8xl sm:text-9xl text-dfg z-50 text-center">
            Ionuţ Cicio
        </h1>
        <div class="flex items-center justify-between flex-col md:flex-row">
            <div
                class="flex items-center gap-4 justify-center sm:justify-start"
            >
                <a href="https://github.com/CuriousCI">
                    <img src="github.svg" alt="GitHub" class="w-14" />
                </a>
                <a href="https://www.linkedin.com/in/ionut-cicio-395541211/">
                    <img src="linkedin.svg" alt="LinkedIn" class="w-16" />
                </a>
                <a href="ionut-cicio-cv.pdf" target="_blank">
                    <span
                        class="text-dfg text-4xl text-center underline underline-offset-8"
                    >
                        Resume
                    </span>
                </a>
            </div>
            <button on:click={() => (showHome = false)}>
                <span class="text-white text-6xl text-center projects">
                    PROJECTS!
                </span>
            </button>
        </div>
    {:else}
        <button
            class="absolute  top-0 right-4"
            on:click={() => (showHome = true)}
        >
            <img src="home.svg" alt="Home" class="w-14" />
        </button>
        <Projects />
    {/if}
</div>

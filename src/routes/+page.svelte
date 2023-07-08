<script lang="ts">
    import { page } from "$app/stores";
    import Projects from "$lib/Projects.svelte";
</script>

<a
    href="mailto:ionutcicio.dev@gmail.com"
    class="absolute right-0 bottom-0 w-[20vw]"
    target="_blank"
>
    <img src="octodex.png" alt="" />
</a>

{#if $page.url.hash == "#projects"}
    <div class="relative w-full h-full box-border p-20 grid items-center">
        <a data-sveltekit-reload href="/#home" class="absolute top-8 right-8">
            <img src="home.svg" alt="Home" class="w-12" />
        </a>
        <Projects />
    </div>
{:else}
    <div class="relative p-10 bg-black/20 backdrop-blur w-full">
        <h1
            class="relative z-10 px-10 text-[10vw] sm:text-9xl text-white text-center"
        >
            Ionuţ Cicio
        </h1>
        <div
            class="px-10 flex items-center justify-center gap-8 flex-col lg:flex-row"
        >
            <div
                class="flex items-center gap-4 justify-center sm:justify-start"
            >
                <a href="https://www.linkedin.com/in/ionut-cicio-395541211/">
                    <img src="linkedin.svg" alt="LinkedIn" class="w-12" />
                </a>
                <a href="https://github.com/CuriousCI">
                    <img src="github.svg" alt="GitHub" class="w-12" />
                </a>
                <a href="./ionut-cicio-cv.pdf" target="_blank">
                    <img src="resume.svg" alt="Resume" class="w-14" />
                </a>
            </div>
            <a data-sveltekit-reload href="#projects">
                <span
                    id="projects"
                    class="text-white text-[10vw] sm:text-6xl projects"
                >
                    PROJECTS!
                </span>
            </a>
        </div>
    </div>
{/if}

<!-- <button on:click={() => (home = false)}> -->
<!-- {:else} -->
<!--     <div class="relative w-full h-full box-border p-20 grid items-center"> -->
<!--         <button class="absolute top-8 right-8" on:click={() => (home = true)}> -->
<!--             <img src="home.svg" alt="Home" class="w-12" /> -->
<!--         </button> -->
<!--         <Projects /> -->
<!--     </div> -->
<!-- {/if} -->
<!-- // import Projects from "$lib/Projects.svelte"; -->
<!-- // import Store from "$lib/Store.svelte"; -->
<!-- // let home: boolean = true, -->
<!-- //     store: boolean = false; -->
<!-- <div class="relative z-50"> -->
<!--     <div id="my-store-85014551" /> -->
<!--     <div> -->
<!--         <script -->
<!--             data-cfasync="false" -->
<!--             type="text/javascript" -->
<!--             src="https://app.ecwid.com/script.js?85014551&data_platform=code&data_date=2023-02-28" -->
<!--             charset="utf-8" -->
<!--         ></script> -->
<!--         <script type="text/javascript"> -->
<!--             xProductBrowser( -->
<!--                 "categoriesPerRow=3", -->
<!--                 "views=grid(20,3) list(60) table(60)", -->
<!--                 "categoryView=grid", -->
<!--                 "searchView=list", -->
<!--                 "id=my-store-85014551" -->
<!--             ); -->
<!--         </script> -->
<!--     </div> -->
<!-- </div> -->
<!-- <button on:click={() => (store = true)}> -->
<!--     <img src="icon.svg" alt="Store" class="w-14" /> -->
<!-- </button> -->
<!-- {#if store} -->
<!--     <Store /> -->
<!-- {:else if home} -->

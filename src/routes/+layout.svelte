<script lang="ts">
    import "../app.css";
    import { onMount } from "svelte";
    import type p5 from "p5";
    import sketch from "../lib/sketch/waves";

    // https://github.com/tonyketcham/p5-svelte/blob/main/src/lib/P5.svelte

    let canvas: HTMLElement, project: p5;

    function augmentClasses<
        NativeClasses extends [string, Record<string, any>][]
    >(instance: p5, classes: NativeClasses) {
        classes.forEach(([key, value]) => (instance[key] = value));
        return instance;
    }

    onMount(async () => {
        // let test = document.createElement("canvas");
        // let help = document.getElementById("#body");
        // canvas?.appendChild(test);
        // canvas = document.getElementById("#sketch") || test;
        const library = await import("p5"),
            { default: p5 } = library,
            entries = Object.entries(library);

        const nativeClasses = entries.filter(
            ([key, value]) =>
                value instanceof Function && key[0] !== "_" && key !== "default"
        );

        project = new p5((instance: p5) => {
            instance = augmentClasses(instance, nativeClasses);

            // @ts-ignore
            // window._p5Instance = instance;
            return sketch(instance);
        }, canvas);
    });
</script>

<div bind:this={canvas} class="w-full h-full absolute top-0 left-0" />
<slot />

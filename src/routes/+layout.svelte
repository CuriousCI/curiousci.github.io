<script lang="ts">
    import "../app.css";
    import { onMount } from "svelte";

    // https://github.com/tonyketcham/p5-svelte/blob/main/src/lib/P5.svelte
    export const prerender = true

    onMount(async () => {
        const library = await import("p5");
        const sketch = await import("../lib/sketch/waves");

        const { default: p5 } = library;
        const entries = Object.entries(library);
        const nativeClasses = entries.filter(
            ([key, value]) =>
                value instanceof Function && key[0] !== "_" && key !== "default"
        );

        let canvas =
            document.getElementById("#sketch") ||
            document.createElement("canvas");
        let test = new p5(sketch, canvas);
    });
</script>

<canvas class="absolute top-0 left-0 w-screen h-screen" id="sketch" />
<slot />

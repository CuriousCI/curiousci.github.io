<script lang="ts">
    import "../app.css";
    import sketch from "$lib/sketch/waves";
    import P5 from "p5-svelte";

    export const prerender = true;
    export const trailingSlash = "always";
</script>

<P5 {sketch} parentDivStyle="position: absolute" />
<slot />

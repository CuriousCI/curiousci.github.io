<script lang="ts">
    import "../app.css";
    import sketch from "$lib/sketch/fields";
    import P5 from "p5-svelte";
</script>

<P5 {sketch} parentDivStyle="position: absolute" />
<slot />

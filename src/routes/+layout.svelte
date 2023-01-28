<script>
    import "../style/global.css";

    import Header from "../lib/Header.svelte";
</script>

<Header --padding="0 10vw" />
<main>
    <slot />
</main>

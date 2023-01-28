<script>
    import "../style/global.css";

    import Header from "../lib/Header.svelte";
</script>

<Header />
<main>
    <slot />
</main>


<style>
    main {
        padding: var(--padding);
        padding-top: 83px;
    }
</style>
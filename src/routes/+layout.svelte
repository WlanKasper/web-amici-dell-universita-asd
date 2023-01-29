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
        padding-top: calc(8vh + 4px);
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        main {
            padding: 0;

            padding-top: calc(6vh + 2px);
        }
    }
</style>

<script>
    import "../style/global.css";

    import Header from "../lib/Header.svelte";
    import Footer from "../lib/Footer.svelte";
    import { page } from "$app/stores";
</script>

<Header />
<main>
    <slot />
</main>
{#if !$page.error}
    <Footer />
{/if}

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

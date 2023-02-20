<script>
    import "../style/global.css";

    import Header from "../lib/Header.svelte";
    import Footer from "../lib/Footer.svelte";
    import { page } from "$app/stores";
</script>

<svelte:head>
    <link rel="icon" type="image/svg" href="/images/favicon.svg" />
    <title>Amici dell'università</title>
</svelte:head>

<Header />
<main>
    <slot />
</main>
{#if !$page.error}
    <Footer />
{/if}

<style>
    main {
        padding: 1rem;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        main {
            padding: 0.25rem;
        }
    }
</style>

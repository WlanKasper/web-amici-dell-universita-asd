<script>
    import "../style/global.css";

    import Header from "../lib/Header.svelte";
    import Footer from "../lib/Footer.svelte";
</script>

<Header />
<main>
    <slot />
</main>
<Footer />

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

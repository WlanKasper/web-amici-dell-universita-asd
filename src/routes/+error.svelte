<script>
    import { page } from "$app/stores";
</script>

<section class="container">
    <h1 class="text text-heading text-accent">
        Opsss, qualcosa si e rotto 😅
    </h1>
    <h2 class="text text-heading">{$page.error.message}</h2>
</section>

<style>
    section.container {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        padding: 30vh 5vw;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        section.container {
            padding: 30vh 20vw;
        }
    }
</style>

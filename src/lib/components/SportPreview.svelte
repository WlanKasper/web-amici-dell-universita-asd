<script>
    import { addEllipsis } from "$lib/utils/util-text.js";

    export let title;
    export let text;
    export let href;
    export let imgURL;

    if (text) {
        text = addEllipsis(text, 80);
    }
</script>

<a {href}>
    <div
        class="container"
        style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%), url({imgURL});"
    >
        <div class="heading">
            <h2 class="text-extend text-heading">{title}</h2>
            {#if text}
                <h4 class="text-extend text-link">
                    {text}
                </h4>
            {/if}
        </div>
    </div>
</a>

<style>
    div.container {
        height: 40rem;

        display: flex;
        align-items: flex-end;

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        border-radius: 8px;

        transition: all 0.1s ease-in-out;
    }

    div.container:hover {
        filter: drop-shadow(0px 5px 15px gray);
        transition: all 0.2s ease-in-out;
    }

    @media screen and (min-width: 1px) and (max-width: 600px) {
        div.container {
            height: 20rem;
        }
    }

    div.heading {
        max-width: 30vw;

        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 10px;

        padding: 10px 20px;
    }

    @media screen and (min-width: 1px) and (max-width: 600px) {
        div.heading {
            max-width: 40vw;
            padding: 10px 10px;
            gap: 2px;
        }
    }
</style>

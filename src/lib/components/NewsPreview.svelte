<script>
    import { format } from "$lib/utils/util-date.js";
    import { addEllipsis } from "$lib/utils/util-text.js";

    export let title;
    export let date;
    export let text;
    export let href;

    const ftmDate = format(new Date(date));
    const ftmText = addEllipsis(
        text,
        Math.floor(Math.random() * (160 - 100 + 1)) + 100
    );
</script>

<div class="container">
    <a {href}>
        <div class="heading">
            <h2 class="text text-heading">{title}</h2>
        </div>
        <div class="description">
            <h4 class="text text-link">
                {ftmText}
            </h4>
        </div>
    </a>
    <h5 class="text text-date">{ftmDate}</h5>
</div>

<style>
    div.container {
        width: fit-content;
        max-width: 25vw;

        display: flex;
        align-items: stretch;
        justify-content: flex-start;
        flex-direction: column;
    }

    @media screen and (min-width: 1px) and (max-width: 600px) {
        div.container {
            max-width: 50vw;
        }
    }

    div.heading {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 30px;

        padding: 10px 0;
        border-top: 1px solid var(--line-extend);
    }

    @media screen and (min-width: 1px) and (max-width: 600px) {
        div.heading {
            gap: 4px;
            flex-direction: column;
            align-items: flex-start;

            padding: 5px 0;
        }
    }

    .text-heading {
        width: auto;
    }

    div.description {
        margin-top: 10px;
    }

    @media screen and (min-width: 1px) and (max-width: 600px) {
        div.description {
            margin-top: 5px;
        }
    }

    .text-date {
        width: min-content;
        text-align: left;
        margin-top: 1rem;
        border-bottom: 1px solid var(--line-extend);
    }
</style>

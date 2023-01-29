<script>
    import { format } from "$lib/utils/util-date.js";
    import { addEllipsis } from "$lib/utils/util-text.js";

    export let title;
    export let date;
    export let text;
    export let href;

    const ftmDate = format(new Date(date));
    const ftmText = addEllipsis(text, 364);
</script>

<div class="container">
    <div class="heading">
        <h2 class="text text-heading">{title}</h2>
        <div class="line-split" />
        <h4 class="text">{ftmDate}</h4>
    </div>
    <div class="description">
        <h4 class="text text-link">
            <a {href}>
                {ftmText}
            </a>
        </h4>
    </div>
</div>

<style>
    div.container {
        width: fit-content;
        max-width: 35vw;

        display: flex;
        align-items: stretch;
        justify-content: flex-start;
        flex-direction: column;
    }

    @media screen and (min-width: 1px) and (max-width: 600px) {
        div.container {
            max-width: 90vw;
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
            gap: 15px;

            padding: 5px 0;
        }
    }

    div.line-split {
        width: 1px;
        height: 35px;

        background-color: var(--line);
    }

    @media screen and (min-width: 1px) and (max-width: 600px) {
        div.line-split {
            height: 25px;
        }
    }

    div.description {
        margin-top: 10px;
    }

    @media screen and (min-width: 1px) and (max-width: 600px) {
        div.description {
            margin-top: 5px;
        }
    }
</style>

<script>
    export let title;
    export let text;
    export let href;
    export let imgURL;
</script>

<div
    class="container"
    style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%), url({imgURL});"
>
    <div class="heading">
        <h2 class="text-extend text-heading">{title}</h2>
        <h4 class="text-extend text-link">
            <a {href}>
                {text}
            </a>
        </h4>
    </div>
</div>

<style>
    div.container {
        display: flex;
        align-items: flex-end;

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    div.heading {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 10px;

        padding: 40px 20px;
    }

    @media screen and (min-width: 1px) and (max-width: 600px) {
        div.heading {
            gap: 2px;

            padding: 18px 10px;
        }
    }
</style>

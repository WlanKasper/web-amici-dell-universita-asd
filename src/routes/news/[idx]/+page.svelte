<script>
    import { format } from "$lib/utils/util-date.js";

    export let data;

    console.log(data);

    const props = {
        title: data.newsSection[0].title,
        titleSport: data.newsSection[0].sportSection.title,
        date: format(new Date(data.newsSection[0].date)),
        text: data.newsSection[0].text.json.content[0].content[0].value,
    };
</script>

<section class="container">
    <div class="heading">
        <h2 class="text text-heading">
            {props.title}
        </h2>
        <div class="line-split" />
        <h4 class="text">
            {props.titleSport}
        </h4>
        <div class="line-split" />
        <h4 class="text">
            {props.date}
        </h4>
    </div>
    <div class="news-text">
        <h4 class="text">
            {props.text}
        </h4>
    </div>
</section>

<style>
    section.container {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        gap: 6vh 0;
        
        padding: 10vh 0;
    }

    div.heading {
        width: fit-content;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        gap: 20px;

        padding: 10px 0;
        border-bottom: 1px solid var(--line-extend);
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

    div.news-text {
        max-width: 70vw;
    }
</style>

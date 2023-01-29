<script>
    import NewsPreview from "$lib/components/NewsPreview.svelte";
    import SportPreview from "$lib/components/SportPreview.svelte";

    export let data;

    const sportPreview = {
        heading: data.sportSection.slice(0, 4),
        all: data.sportSection.slice(4),
    };

    const newsPreview = {
        heading: data.newsSection.slice(0, 4),
        all: data.newsSection.slice(4),
    };
</script>

<div class="container">
    <section class="sport-preview">
        {#each sportPreview.heading as sport}
            <SportPreview
                title={sport.title}
                text={sport.description}
                href="/"
                imgURL={sport.imageHero.url}
            />
        {/each}
    </section>
    <section class="news-preview">
        {#each newsPreview.heading as news}
            <NewsPreview
                title={news.sportSection.title}
                date={news.date}
                text="This is a sport game for cool persons how realy loves to enjoy playing something"
                href="/"
            />
        {/each}
    </section>
    <section class="sport-preview">
        {#each sportPreview.all as sport}
            <SportPreview
                title={sport.title}
                text={sport.description}
                href="/"
                imgURL={sport.imageHero.url}
            />
        {/each}
    </section>
    <section class="news-preview">
        {#each newsPreview.all as news}
            <NewsPreview
                title={news.sportSection.title}
                date={news.date}
                text="This is a sport game for cool persons how realy loves to enjoy playing something"
                href="/"
            />
        {/each}
    </section>
</div>

<style>
    div.container {
        display: flex;
        flex-direction: column;
        gap: 10rem;
    }

    section.sport-preview {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.25rem;
    }

    section.news-preview {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 5rem 0;
    }
</style>

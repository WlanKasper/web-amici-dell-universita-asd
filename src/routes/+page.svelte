<script>
    import NewsPreview from "$lib/NewsPreview.svelte";
    import SportPreview from "$lib/SportPreview.svelte";

    export let data;

    const sportPreview4 = data.sportSection.slice(0, 4);
    const sportPreviewAll = data.sportSection.slice(4);

    const newsPreview4 = data.newsSection.slice(0, 4);
    const newsPreviewAll = data.newsSection.slice(4);
</script>

<div class="container">
    <section class="sport-preview">
        {#each sportPreview4 as sport}
            <SportPreview
                title={sport.title}
                text={sport.description}
                href="/"
                imgURL={sport.imageHero.url}
            />
        {/each}
    </section>
    <section class="news-preview">
        {#each newsPreview4 as news}
            <NewsPreview
                title={news.sportSection.title}
                date={news.date}
                text="This is a sport game for cool persons how realy loves to enjoy playing something"
                href="/"
            />
        {/each}
    </section>
    <section class="sport-preview">
        {#each sportPreviewAll as sport}
            <SportPreview
                title={sport.title}
                text={sport.description}
                href="/"
                imgURL={sport.imageHero.url}
            />
        {/each}
    </section>
    <section class="news-preview">
        {#each newsPreviewAll as news}
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

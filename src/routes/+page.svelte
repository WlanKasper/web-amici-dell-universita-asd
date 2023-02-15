<script>
    import NewsPreview from "$lib/components/NewsPreview.svelte";
    import SportPreview from "$lib/components/SportPreview.svelte";

    export let data;

    const sportPreview = {
        heading: data.sportSection.slice(0, 4),
        all: data.sportSection.slice(4),
    };

    const newsPreview = {
        heading: data.newsSection.slice(0, 8),
        all: data.newsSection.slice(8, 12),
        length: data.newsSection.length,
        gap: 8,
    };

    let count = 0;

    const heandlerClickShow = () => {
        const idx = count * newsPreview.gap + 10 + newsPreview.gap;

        newsPreview.all = [
            ...newsPreview.all,
            ...data.newsSection.slice(idx - newsPreview.gap, idx),
        ];

        count += 1;
    };
</script>

<div class="container">
    <section class="sport-preview">
        {#each sportPreview.heading as sport}
            <SportPreview
                title={sport.title}
                href="/sport/{sport.sys.id}"
                imgURL={sport.imageHero.url}
            />
        {/each}
    </section>
    <section class="news-preview">
        {#each newsPreview.heading as news}
            <NewsPreview
                title={news.title}
                date={news.date}
                text={news.text}
                href="/news/{news.sys.id}"
            />
        {/each}
    </section>
    <section class="sport-preview sport-preview-extend">
        {#each sportPreview.all as sport}
            <SportPreview
                title={sport.title}
                href="/sport/{sport.sys.id}"
                imgURL={sport.imageHero.url}
            />
        {/each}
    </section>
    {#if newsPreview.all.length > 0}
        <section class="news-preview">
            {#each newsPreview.all as news}
                <NewsPreview
                    title={news.title}
                    date={news.date}
                    text={news.text}
                    href="/news/{news.sys.id}"
                />
            {/each}
        </section>
        {#if (newsPreview.length) >= 12 + (count * newsPreview.gap)}
            <section class="show">
                <button class="show-more" on:click={heandlerClickShow}>
                    <h2 class="text-heading text-extend">Mostra di piu</h2>
                </button>
            </section>
        {/if}
    {/if}
</div>

<style>
    div.container {
        display: flex;
        flex-direction: column;
        gap: 5rem;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        div.container {
            display: flex;
            flex-direction: column;
            gap: 3rem;
        }
    }

    section.sport-preview {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 0.5rem;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        section.sport-preview {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.25rem;
        }
    }

    section.sport-preview-extend {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    section.news-preview {
        padding: 0 4vw;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 5rem;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        section.news-preview {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 3rem;
        }
    }

    section.show {
        padding: var(--padding-section);
    }

    button.show-more {
        width: 100%;
        height: 7vh;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 8px;

        cursor: pointer;

        background-color: var(--background-accent);
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        button.show-more {
            height: 5vh;
        }
    }

    button.show-more:hover {
        background-color: var(--background-extend);
    }
</style>

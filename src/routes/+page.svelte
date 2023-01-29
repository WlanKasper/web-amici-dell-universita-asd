<script>
    import NewsPreview from "$lib/components/NewsPreview.svelte";
    import SportPreview from "$lib/components/SportPreview.svelte";

    export let data;

    const sportPreview = {
        heading: data.sportSection.slice(0, 4),
        all: data.sportSection.slice(4, 6),
    };

    const newsPreview = {
        heading: data.newsSection.slice(0, 4),
        all: data.newsSection.slice(4, 10),
        length: data.newsSection.length,
        gap: 6,
    };

    let count = 0;

    const heandlerClickShow = () => {
        const idx = (count * newsPreview.gap) + 10 + newsPreview.gap;

        newsPreview.all = [
            ...newsPreview.all,
            ...data.newsSection.slice(idx - newsPreview.gap, idx),
        ];

        if (idx > newsPreview.length) {
            const section = document.querySelector('section.show');
            section.classList.toggle('hidden', true);
        }

        count += 1;
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
    <section class="show">
        <button class="show-more" on:click={heandlerClickShow}>
            <h2 class="text-heading text-extend">Mostra di piu</h2>
        </button>
    </section>
</div>

<style>
    div.container {
        display: flex;
        flex-direction: column;
        gap: 10rem;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        div.container {
            display: flex;
            flex-direction: column;
            gap: 6rem;
        }
    }

    section.sport-preview {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.25rem;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        section.sport-preview {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.125rem;
        }
    }

    section.news-preview {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 5rem 0;

        padding: var(--padding-section);
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        section.news-preview {
            grid-template-columns: repeat(1, minmax(0, 1fr));
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

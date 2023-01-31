<script>
    import NewsPreview from "$lib/components/NewsPreview.svelte";

    export let data;

    const props = {
        sport: {
            title: data.sportSection[0].title,
            url: data.sportSection[0].imageHero.url,
            description: data.sportSection[0].description,
        },
        photo: {
            collection: data.photoCollection,
        },
        news: {
            collection: data.newsCollection,
        },
    };
</script>

<section>
    <div
        class="heading"
        style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%), url({props
            .sport.url});"
    >
        <h1 class="text text-heading text-extend">
            {props.sport.title}
        </h1>
    </div>
    <div class="container">
        <div class="wrapper">
            <section id="description">
                <h2 class="text text-heading text-accent">Descrizione</h2>
                <h4 class="text text-dercription">
                    {props.sport.description}
                </h4>
            </section>
            <section id="photo">
                {#if props.photo.collection.length > 0}
                    <h2 class="text text-heading text-accent">Photo</h2>
                {/if}
                <div class="photo-container">
                    {#each props.photo.collection as photo}
                        <div
                            class="photo"
                            style="background-image: url({photo.url});"
                        />
                    {/each}
                </div>
            </section>
        </div>
        <section id="news">
            {#each props.news.collection as news}
                <NewsPreview
                    title={news.sportSection.title}
                    date={news.date}
                    text={news.text.json.content[0].content[0].value}
                    href="/news/{news.sys.id}"
                />{/each}
        </section>
    </div>
</section>

<style>
    div.heading {
        height: 40vh;

        display: flex;
        align-items: flex-end;
        justify-content: flex-start;

        padding: 8px 24px;

        /* background-repeat: no-repeat; */
        background-position: center;
    }

    div.container {
        display: flex;
        align-items: flex-start;
        flex-direction: row;
        gap: 6rem;

        padding-top: 5vh;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        div.container {
            flex-direction: column;

            padding: var(--padding-section);
            padding-top: 5vh;
        }
    }

    div.wrapper {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }

    h2.text-heading {
        margin-bottom: 1rem;
    }

    .text-dercription {
        max-width: 40vw;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        .text-dercription {
            max-width: 80vw;
        }
    }

    div.photo-container {
        max-width: 30vw;

        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        div.photo-container {
            max-width: 80vw;

            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 5rem;
        }
    }

    div.photo {
        width: 200px;
        height: 120px;

        border-radius: 4px;

        background-position: center;
        background-size: cover;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        div.photo {
            width: 40vw;
            height: 15vh;

            border-radius: 4px;

            background-position: center;
            background-size: cover;
        }
    }

    section#news {
        display: grid;
        gap: 5rem 0;
    }
</style>

<script>
    import { Fancybox } from "@fancyapps/ui";
    import { format } from "$lib/utils/util-date.js";
    import { onMount } from "svelte";
    import { element } from "svelte/internal";

    export let data;

    onMount(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {
            dragToClose: false,
            preload: 3,
            Toolbar: {
                display: ["download", { id: "clouse", position: "top" }],
            },
            closeButton: "top",
            download: true,
            Image: {
                zoom: false,
            },
            on: {
                initCarousel: (fancybox) => {
                    const slide =
                        fancybox.Carousel.slides[fancybox.Carousel.page];

                    fancybox.$container.style.setProperty(
                        "--bg-image",
                        `url("${slide.$thumb.src}")`
                    );
                },
                "Carousel.change": (fancybox, carousel, to, from) => {
                    const slide = carousel.slides[to];

                    fancybox.$container.style.setProperty(
                        "--bg-image",
                        `url("${slide.$thumb.src}")`
                    );
                },
            },
        });
    });

    const props = {
        title: data.newsSection[0].title,
        titleSport: data.newsSection[0].sportSection.title,
        date: format(new Date(data.newsSection[0].date)),
        text: data.newsSection[0].text,
        assets: data.newsSection[0].imagesFilesCollection.items,
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
        {@html props.text}
    </div>
    <div class="assets">
        {#each props.assets as asset}
            {#if asset.url.includes(".pdf")}
                <object
                    title={asset.title}
                    data={asset.url}
                    type="application/pdf"
                    width="100%"
                    height="500px"
                >
                    <h4 class="text">
                        Unable to display PDF file. <a href={asset.url}
                            >Download</a
                        > instead.
                    </h4>
                </object>
            {:else if asset.url.includes("https://videos.")}
                <a data-fancybox="gallery" href={asset.url}>
                    <video class="asset" width="320" height="240">
                        <source src={asset.url} />
                    </video>
                    <img
                        class="asset hidden"
                        src={asset.url}
                        alt={asset.title}
                    />
                </a>
            {:else}
                <a data-fancybox="gallery" href={asset.url}>
                    <img class="asset" src={asset.url} alt={asset.title} />
                </a>
            {/if}
        {/each}
    </div>
</section>

<style>
    section.container {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        gap: 6vh 0;

        padding: 4rem 6rem;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        section.container {
            padding: 2rem 1rem;
            gap: 3vh 0;
        }
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

        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 2rem;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        div.news-text {
            max-width: 90vw;
        }
    }

    div.assets {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
    }

    .asset {
        border-radius: 4px;
        height: 20vh;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        .asset {
            height: 15vh;
        }
    }

    a[data-fancybox] img {
        cursor: zoom-in;
    }
</style>

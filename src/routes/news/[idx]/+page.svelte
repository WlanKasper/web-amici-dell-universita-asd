<script>
    import { Fancybox } from "@fancyapps/ui";
    import { format } from "$lib/utils/util-date.js";

    export let data;

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
                const slide = fancybox.Carousel.slides[fancybox.Carousel.page];

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

    const props = {
        title: data.newsSection[0].title,
        titleSport: data.newsSection[0].sportSection.title,
        date: format(new Date(data.newsSection[0].date)),
        assets: data.newsSection[0].imagesFilesCollection.items,
    };

    const text = data.newsSection[0].text.json.content.reduce(
        (html, content) => {
            switch (content.nodeType) {
                case "heading-1":
                case "heading-2":
                case "heading-3":
                case "heading-4":
                    return (
                        html +
                        `<h2 class="text">${content.content[0].value}</h2>`
                    );
                case "paragraph":
                    return (
                        html +
                        `<h4 class="text">${content.content
                            .map((c) => {
                                let value = c.value;
                                if (
                                    c.marks.find((mark) => mark.type === "bold")
                                ) {
                                    value = `<span class="text-heading">${value}</span>`;
                                }
                                return value;
                            })
                            .join("")}</h4>`
                    );
                case "unordered-list":
                    return (
                        html +
                        `<ul>${content.content
                            .map(
                                (c) =>
                                    `<li>
                                        <h4 class"text">
                                            ${c.content[0].content[0].value}
                                        </h4>
                                    </li>`
                            )
                            .join("")}</ul>`
                    );
                default:
                    return html;
            }
        },
        ""
    );
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
        {@html text}
    </div>
    <div class="assets">
        {#each props.assets as asset}
            <a data-fancybox="gallery" href={asset.url}>
                <img class="asset" src={asset.url} alt={asset.title} />
            </a>
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

        padding: 10vh 0;

        padding: var(--padding-section);
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        section.container {
            margin-top: 3vh;
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

    div.assets {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
    }

    img.asset {
        border-radius: 4px;
        height: 20vh;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        img.asset {
            height: 15vh;
        }
    }

    a[data-fancybox] img {
        cursor: zoom-in;
    }
</style>

<script>
    export let data;

    const props = {
        title: data.sportSection[0].title,
        url: data.sportSection[0].imageHero.url,
        description: data.sportSection[0].description,
    };
    console.log(data);
</script>

<section>
    <div class="heading" style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%), url({props.url});">
        <h1 class="text text-heading text-extend">
            {props.title}
        </h1>
    </div>
    <div class="container">
        <div class="menu">
            <a href="#description">
                <h3>
                    Descrizione
                </h3>
            </a>
            <a href="#photo">
                <h3>
                    Photo
                </h3>
            </a>
            <a href="#news">
                <h3>
                    News
                </h3>
            </a>
        </div>
        <div class="line-split" />
        <div class="sport">
            <section id="description">
                <h2 class="text">
                    Descrizione
                </h2>
                <h4 class="text">
                    {props.description}
                </h4>
            </section>
            <section id="photo">

            </section>
            <section id="news">

            </section>
        </div>
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
        gap: 5rem;
    }

    div.menu {
        width: 20vw;
    }

    div.line-split {
        width: 1px;
        height: 200px;

        background-color: var(--line);
    }
</style>

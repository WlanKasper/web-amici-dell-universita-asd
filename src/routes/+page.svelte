<script>
    import NewsPreview from "$lib/NewsPreview.svelte";
    import SportPreview from "$lib/SportPreview.svelte";
</script>

<div class="container">
    <section class="sport-preview">
        <SportPreview
            title="PingPong"
            text="Ping pong, also known as table tennis, is a fast-paced sport that requires quick reflexes and precise hand-eye coordination. It can be played individually or in teams, and is enjoyed by people of all ages and skill levels."
            href="/"
            imgURL="/images/pingpong-ia.jpeg"
        />
        <SportPreview
            title="Dragon Boat"
            text="Dragon boat racing is a traditional Chinese sport that has gained popularity around the world. It involves teams of paddlers racing in long boats decorated with dragon heads and tails. It is a physically demanding sport that requires teamwork, strength, and endurance."
            href="/"
            imgURL="/images/dragonboat-ia.jpg"
        />
        <SportPreview
            title="Basketball"
            text="Basketball is a popular team sport that is played on a rectangular court. The objective of the game is to score points by throwing a ball through a hoop that is 10 feet high. The game can be played indoors or outdoors, and is enjoyed by people of all ages and skill levels."
            href="/"
            imgURL="/images/basketball-ia.jpg"
        />
        <SportPreview
            title="Danza Sportiva"
            text="Sport dance is a style of competitive ballroom dancing that combines elements of ballroom and Latin dance styles. It is characterized by its high level of athleticism and precision, and requires a great deal of training and dedication. It can be enjoyed both as a competitive sport and a form of artistic expression."
            href="/"
            imgURL="/images/dance-ia.jpg"
        />
    </section>
    <section class="news-preview">
        <NewsPreview
            title="Dragon Boat"
            date="15/01/2023"
            text="This is a sport game for cool persons how realy loves to enjoy playing something"
            href="/"
        />
        <NewsPreview
            title="Dragon Boat"
            date="15/01/2023"
            text="This is a sport game for cool persons how realy loves to enjoy playing something"
            href="/"
        />
        <NewsPreview
            title="Dragon Boat"
            date="15/01/2023"
            text="This is a sport game for cool persons how realy loves to enjoy playing something"
            href="/"
        />
        <NewsPreview
            title="Dragon Boat"
            date="15/01/2023"
            text="This is a sport game for cool persons how realy loves to enjoy playing something"
            href="/"
        />
    </section>
    <section class="sport-preview">
        <SportPreview
            title="Sci Nordico"
            text="This is a sport game for cool persons how realy loves to enjoy playing something"
            href="/"
            imgURL="/images/ski-nordique-ia.jpg"
        />
        <SportPreview
            title="Bowling"
            text="This is a sport game for cool persons how realy loves to enjoy playing something"
            href="/"
            imgURL="/images/bowling-ia.jpg"
        />
    </section>
    <section class="news-preview">
        <NewsPreview
            title="Dragon Boat"
            date="15/01/2023"
            text="This is a sport game for cool persons how realy loves to enjoy playing something"
            href="/"
        />
        <NewsPreview
            title="Dragon Boat"
            date="15/01/2023"
            text="This is a sport game for cool persons how realy loves to enjoy playing something"
            href="/"
        />
        <NewsPreview
            title="Dragon Boat"
            date="15/01/2023"
            text="This is a sport game for cool persons how realy loves to enjoy playing something"
            href="/"
        />
        <NewsPreview
            title="Dragon Boat"
            date="15/01/2023"
            text="This is a sport game for cool persons how realy loves to enjoy playing something"
            href="/"
        />
        <NewsPreview
            title="Dragon Boat"
            date="15/01/2023"
            text="This is a sport game for cool persons how realy loves to enjoy playing something"
            href="/"
        />
        <NewsPreview
            title="Dragon Boat"
            date="15/01/2023"
            text="This is a sport game for cool persons how realy loves to enjoy playing something"
            href="/"
        />
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

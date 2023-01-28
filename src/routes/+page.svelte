<script>
    import NewsPreview from "$lib/NewsPreview.svelte";
    import SportPreview from "$lib/SportPreview.svelte";
</script>

<section>
    <SportPreview
        title="PingPong"
        text="This is a sport game for cool persons how realy loves to enjoy playing something"
        href="/"
        imgURL="/images/pingpong_IA.jpeg"
    />
    <SportPreview
        title="PingPong"
        text="This is a sport game for cool persons how realy loves to enjoy playing something"
        href="/"
        imgURL="/images/pingpong_IA.jpeg"
    />
    <SportPreview
        title="PingPong"
        text="This is a sport game for cool persons how realy loves to enjoy playing something"
        href="/"
        imgURL="/images/pingpong_IA.jpeg"
    />
    <SportPreview
        title="PingPong"
        text="This is a sport game for cool persons how realy loves to enjoy playing something"
        href="/"
        imgURL="/images/pingpong_IA.jpeg"
    />
</section>

<style>
    section {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        padding: 100px;
    }
</style>

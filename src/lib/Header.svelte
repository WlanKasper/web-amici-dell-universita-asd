<script>
</script>

<header>
    <a href="/">
        <img
            class="logo-asd"
            src="/images/logo-asd.svg"
            alt="logo (Amici dell'universita A.S.D.)"
            srcset=""
        />
    </a>
    <a href="https://www.units.it/">
        <img
            class="logo-units"
            src="/images/logo-units.svg"
            alt="logo (UniTS: universita di Trieste)"
            srcset=""
        />
    </a>
</header>

<style>
    header {
        width: 80vw;
        height: 10vh;

        padding: var(--padding);

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 2rem;

        background-color: var(--background);
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        header {
            width: 90vw;
            height: 8vh;

            padding: var(--padding-section);
        }
    }

    img.logo-asd {
        height: 50px;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        img.logo-asd {
            height: 32px;
        }
    }

    img.logo-units {
        height: 64px;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        img.logo-units {
            height: 38px;
        }
    }
</style>

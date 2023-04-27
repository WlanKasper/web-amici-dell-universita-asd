<script>
</script>

<header>
    <a href="https://www.units.it/">
        <img
            class="logo-units"
            src="/images/logo-units.webp"
            alt="logo (UniTS: universita di Trieste)"
            srcset=""
        />
    </a>
    <a href="/">
        <img
            class="logo-asd"
            src="/images/logo-asd.svg"
            alt="logo (Amici dell'universita A.S.D.)"
            srcset=""
        />
    </a>
    <a href="/">
        <img
            class="logo-fav"
            src="/images/logo.svg"
            alt="logo (Amici dell'universita A.S.D.)"
            srcset=""
        />
    </a>
</header>

<style>
    header {
        height: 10vh;

        padding: var(--padding);

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 4rem;

        background-color: var(--background);
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        header {
            width: 90vw;
            height: 8vh;

            gap: 3rem;

            padding: var(--padding-section);
        }
    }

    img.logo-asd {
        height: 68px;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        img.logo-asd {
            height: 46px;
        }
    }

    img.logo-units {
        height: 64px;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        img.logo-units {
            height: 42px;
        }
    }

    img.logo-fav {
        height: 74px;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        img.logo-fav {
            height: 52px;
        }
    }
</style>

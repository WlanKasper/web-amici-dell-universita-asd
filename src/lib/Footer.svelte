<script>
</script>

<footer>
    <div class="container">
        <div class="links">
            <div class="heading">
                <h2 class="text text-heading">Links</h2>
                <a href="https://www.facebook.com/crutsport">
                    <img
                        class="link link-fb"
                        src="/images/icon-facebook.svg"
                        alt="icon link to facebook page"
                        srcset=""
                    />
                </a>
                <a href="https://www.units.it/">
                    <img
                        class="link link-units"
                        src="/images/logo-units.webp"
                        alt="icon link to UniTS (universita di Trieste)"
                        srcset=""
                    />
                </a>
            </div>
            <h6 class="text">
                Amici dell'università A.S.D (Associazione Sportiva
                Dilettantistica)
            </h6>
        </div>
        <div class="contacts">
            <h2 class="text text-heading">Contatti</h2>
            <h6 class="text">
                email: amici.universita@units.it
                <br />
                cell: +39 3389794455
                <br />
                cell: +39 3347605910
                <br />
                CF: 90106730329
            </h6>
        </div>
    </div>
    <div class="copyright">
        <h6 class="text">Copyright © 2023 | Laryyokkk</h6>
    </div>
</footer>

<style>
    footer {
        width: 80vw;
        height: 160px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;

        margin-top: 12vh;
        padding: var(--padding);
        border-top: 1px solid var(--line);
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        footer {
            width: 90vw;
            margin-top: 8vh;
            padding: var(--padding-section);
        }
    }

    div.container {
        width: 80vw;

        padding: 1vh 0;

        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: row;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        div.container {
            width: 90vw;

            margin-bottom: 3vh;

            flex-direction: column;
            gap: 5vh;
        }
    }

    div.links,
    div.contacts {
        width: 15vw;

        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: row;

        gap: 2vh;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        div.links,
        div.contacts {
            width: 80vw;

            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: row;

            gap: 2vh;
        }
    }

    div.links,
    div.contacts {
        flex-direction: column;
    }

    div.heading {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 20px;
    }

    img.link-fb {
        height: 40px;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        img.link-fb {
            height: 30px;
        }
    }

    img.link-units {
        height: 46px;
    }

    @media screen and (min-width: 100px) and (max-width: 1140px) {
        img.link-units {
            height: 36px;
        }
    }
</style>

<script>
</script>

<header>
    <div class="left">
        <a href="/">
            <!-- Todo -->
            <!-- srcset -->
            <img
                class="logo-asd"
                src="/images/logo-asd.svg"
                alt="logo (Amici dell'universita A.S.D.)"
                srcset=""
            />
        </a>
        <a href="https://www.units.it/">
            <!-- Todo -->
            <!-- srcset -->
            <img
                class="logo-units"
                src="/images/logo-units.svg"
                alt="logo (UniTS: universita di Trieste)"
                srcset=""
            />
        </a>
    </div>
    <div class="right">
        <div class="container-menu">
            <div class="menu-line line-1" />
            <div class="menu-line line-2" />
            <div class="menu-line line-3" />
        </div>
    </div>
</header>

<style>
    header {
        width: 80vw;
        height: 8vh;

        position: fixed;

        padding: var(--padding);

        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;

        border-bottom: 1px solid var(--line);
    }

    div.left {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 40px;
    }

    img.logo-asd {
        height: 50px;
    }

    img.logo-units {
        height: 64px;
    }

    div.container-menu {
        width: 50px;
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 15px;

        cursor: pointer;

        /* transition: all 0.2s ease-in-out; */
    }

    div.menu-line {
        width: 50px;
        height: 1px;

        background-color: var(--line);
    }

    /* div.line-1,
    div.line-2,
    div.line-3 {
        transition: all 0.2s ease-in-out;
    }

    div.container-menu:hover {
        gap: 0;
    }

    div.container-menu:hover > div.line-1 {
        transform: rotate(45deg);
        transition: all 0.2s ease-in-out;
    }

    div.container-menu:hover > div.line-2 {
        opacity: 0;
        transition: all 0.2s ease-in-out;
    }

    div.container-menu:hover > div.line-3 {
        transform: rotate(-45deg);
        transition: all 0.2s ease-in-out;
    } */
</style>

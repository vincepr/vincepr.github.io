<script lang="ts">
    import Fa from "svelte-fa";
    import { faGithub, faLinkedin, faXing } from "@fortawesome/free-brands-svg-icons";
    import { browser } from "$app/environment";
    import Project from "$lib/Project.svelte";
    import { onMount } from "svelte";
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    import { faCode, faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";

    let mount = false;
    onMount(() => (mount = browser && true));

    let path =
        "0,0 22.8354941,-31.58985 40.3040271,-35.83995 18.234713,-4.4365 35.818903,14.94595 54.556512,13.90226 21.351405,-1.18928 38.709505,-20.9064 60.023005,-22.64756 19.25633,-1.57311 56.83154,11.38871 56.83154,11.38871";

    let start = [-1.6702741, 163.66963];

    let points = path.split(" ").map((e) => e.split(",").map(parseFloat));
    let curves = points.reduce(
        (p, v) => (
            p[p.length - 1].length < 3 ? p[p.length - 1].push(v) : p.push([v]),
            p
        ),
        [[]] as number[][][]
    );

    let segments = curves.map((v, i) => {
        const p0 = i === 0 ? start : curves[i - 1][2];
        v[2][0] += p0[0];
        v[2][1] += p0[1];
        const p3 = v[2];
        const p1 = [v[0][0] + p0[0], v[0][1] + p0[1]];
        const p2 = [v[1][0] + p0[0], v[1][1] + p0[1]];

        return [p0, p1, p2, p3];
    }) as [number[], number[], number[], number[]][];

    let lengths: number[] = [];

    segments.forEach(([p0, p1, p2, p3], i) => {
        lengths.push(
            (Math.sqrt(
                Math.pow(p3[0] - p0[0], 2) + Math.pow(p3[1] - p0[1], 2)
            ) +
                Math.sqrt(
                    Math.pow(p0[0] - p1[0], 2) + Math.pow(p0[1] - p1[1], 2)
                ) +
                Math.sqrt(
                    Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2)
                ) +
                Math.sqrt(
                    Math.pow(p2[0] - p3[0], 2) + Math.pow(p2[1] - p3[1], 2)
                )) /
                2 +
                (lengths[i - 1] || 0)
        );
    });

    let maxLength = lengths[lengths.length - 1];
    lengths = lengths.map((e) => e / maxLength);

    function interpolate(
        p0: number[],
        p1: number[],
        p2: number[],
        p3: number[],
        t: number
    ) {
        const x =
            Math.pow(1 - t, 3) * p0[0] +
            3 * t * Math.pow(1 - t, 2) * p1[0] +
            3 * Math.pow(t, 2) * (1 - t) * p2[0] +
            Math.pow(t, 3) * p3[0];
        const y =
            Math.pow(1 - t, 3) * p0[1] +
            3 * t * Math.pow(1 - t, 2) * p1[1] +
            3 * Math.pow(t, 2) * (1 - t) * p2[1] +
            Math.pow(t, 3) * p3[1];

        return { x, y };
    }

    let scrollY = 0,
        innerWidth = 0,
        innerHeight = 0;

    let scroll = tweened(0, { duration: 400, easing: cubicOut });
    $: scroll.set(scrollY / (innerHeight + innerWidth * 0.2));

    $: circle_r = 1000 / innerWidth;
    $: circles = Math.floor(innerWidth / 100);

    function circle(scroll: number) {
        if (scroll < 0 || scroll > 1) return { x: 0, y: 0 };

        const i = lengths.findIndex((p) => p >= scroll);

        const minscroll = lengths[i - 1] || 0;
        const maxscroll = lengths[i];

        const t = (scroll - minscroll) / (maxscroll - minscroll);

        return interpolate(...segments[i], t);
    }
</script>

<svelte:window bind:scrollY bind:innerWidth bind:innerHeight />

<svelte:head>
    <title>Vincent Probst</title>
</svelte:head>

<hero class:mount>
    <div class="logo">
        <img src="/brand/logo/svg/logo_light_square.svg" alt="Logo" />
        <div>
            <h1>Vincent M. Probst</h1>

            <p>Software Developer located in Germany</p>
        </div>
    </div>

    <ul class="actions">
        <li>
            <a class="button" href="#projects">
                <Fa icon={faCode} />
                Projects
            </a>
        </li>
        <li>
            <a class="button" href="#contact">
                <Fa icon={faPhone} />
                Contact
            </a>
        </li>
    </ul>
</hero>

<div class="content">
    <svg
        viewBox="5 115 205 46"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
    >
        <path
            style="fill:var(--brand-background-secondary)"
            d="m -1.6702741,163.66963 c 0,0 22.8354941,-31.58985 40.3040271,-35.83995 18.234713,-4.4365 35.818903,14.94595 54.556512,13.90226 21.351405,-1.18928 38.709505,-20.9064 60.023005,-22.64756 19.25633,-1.57311 56.83154,11.38871 56.83154,11.38871 l 0.0349,31.91975 z"
        />

        <path
            id="hline"
            style=""
            d="m -1.6702741,163.66963 c 0,0 22.8354941,-31.58985 40.3040271,-35.83995 18.234713,-4.4365 35.818903,14.94595 54.556512,13.90226 21.351405,-1.18928 38.709505,-20.9064 60.023005,-22.64756 19.25633,-1.57311 56.83154,11.38871 56.83154,11.38871"
        />

        {#if $scroll <= 1 && innerWidth > 550}
            {#each new Array(Math.min(10, circles)) as _, i}
                {@const c = circle($scroll - i * (1.0 / circles))}
                <circle
                    cx={c.x}
                    cy={c.y - circle_r}
                    r={circle_r}
                    style="fill:var(--brand-accent)"
                />
            {/each}
        {/if}
    </svg>

    <div class="projects">
        <div id="projects" />
        <section>
            <h1>Projects</h1>
            <p>
                The best way to learn new technologies is by doing something interesting with them.
                I tend to learn most, when having a goal in mind, while writing code. Smaller Projects
                just seem to start and finish themselves, when learning a new language or framework. 
                Just Check out my Github and see what I'm currently working on.
            </p>

            <br />

            <a class="button" href="https://github.com/vincepr">
                <Fa icon={faGithub} />
                Github
            </a>
        </section>
        <ul>
            <li>
                <Project preview="interpreter" url="https://vincepr.github.io/c_compiler">
                    A stack-based interpreter for my own simple programming language. Written in C 
                    wasm enables running it in the browser.
                </Project>
            </li>
            <li>
                <Project preview="md" url="https://vincepr.github.io/md">
                    A Collection of Transcripts and Notes i am gathering while learning new Stuff. 
                    I also added a few interactive Javascript unit-tests in the Blog-Part.
                </Project>
            </li>
            <li>
                <Project preview="microphone" url="https://mic.vprobst.de/">
                    Enables the user of the App to remote mute and controll volume of
                    the Windows-machine via a webinterface.
                    Written in Csharp with a GO-server using Websockets in the backend.
                </Project>
            </li>
            <li>
                <Project preview="portfolio" url="https://vincepr.github.io/vite-portfolio/">
                    A portfolio app using react, tailwind and vite.
                </Project>
            </li>
            <li>
                <Project preview="tetris" url="https://vincepr.github.io/rs_tetris">
                    A Rust project using wasm to run in the browser. The Frontend uses a Rust wrapper
                    for React.
                </Project>
            </li>
            <li>
                <Project
                    preview="chess"
                    url="https://vincepr.github.io/chessjs/public/chess_in_frontend/index.html">
                    My first JavaScript Project. 
                    Created a Multiplayer Chess server using Websockets and Nodejs.
                    And a Offline Singleplayer Client with vanilla JS.
                </Project>
            </li>
        </ul>
    </div>

    <div class="contact">
        <div id="contact" />
        <section>
            <h1>Contact Me</h1>
            <p>
                The easiest way to contact me, is to write me an Email:
            </p>
            <p>
                Mail: vincentprobst@gmx.de
            </p>
            <br />

            <a class="button" href="mailto:vincentprobst@gmx.de">
                <Fa icon={faMailBulk} />
               Mail
            </a>
            <a class="button" href="mailto:vincentprobst@gmx.de">
                <Fa icon={faLinkedin} />
                LinkedIn
            </a>
            <a class="button" href="https://github.com/vincepr">
                <Fa icon={faGithub} />
                Github
            </a>
        </section>

        <div class="container">
            <form action="https://api.staticforms.xyz/submit" method="post" id="staticform">
                <!-- Replace with your StaticForms accessKey -->
                <input type="hidden" name="accessKey" value="a5494071-9245-491d-ab3b-fe95e62b0ba4">
                <input type="hidden" name="subject" value="Contact Form on vincepr.github.io">
                <!-- Replace with the url you want to redirect to -->
                <input type="hidden" name="redirectTo" value="https://vincepr.github.io">

                <div class="row">
                    <div class="col-25">
                        <label for="fname">Name</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="name" name="name" placeholder="Enter Your Name" required>
                    </div>
                </div>

                <div class="row">
                    <div class="col-25">
                        <label for="lname">Email</label>
                    </div>
                    <div class="col-75">
                        <input type="email" id="email" name="email" placeholder="Enter Your Email" required>
                    </div>
                </div>

                <div class="row">
                    <div class="col-25">
                        <label for="subject">Message</label>
                    </div>
                        <div class="col-75">
                            <textarea class="subject" name="message" placeholder="Enter Your Message" style="height:200px" required></textarea>
                        </div>
                    </div>
                    <br>
                <div class="row">
                    <button class="button right" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>

<style>
    /* Input Form */
    input[type=text], input[type=email], textarea {
        color-scheme: dark;
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
    }
    textarea {
        resize: none;
    }

    label {
        padding: 12px 12px 12px 0;
        display: inline-block;
        color: var(--brand-primary);
    }

    .container{
        margin-top: calc(2vw + 50px);
        margin-left: auto;
        margin-right: auto;
        margin-bottom: calc(2vw + 50px);

        max-width: 700px;
        border-radius: 5px;
        background-color: var(--brand-background);
        padding: 20px;
    }

    .right{
        float: right;
    }

    .col-25 {
        float: left;
        width: 25%;
        margin-top: 6px;
    }

    .col-75 {
        float: left;
        width: 75%;
        margin-top: 6px;
    }

    .row::after {
        content: "";
        display: table;
        clear: both;
    }

    @media screen and (max-width: 600px) {
        .col-25, .col-75, input[type=submit] {
            width: 100%;
            margin-top: 0;
        }
    }

    /*                  default                 */
    @keyframes title {
        to {
            opacity: 1;
            transform: none;
        }
    }

    .logo h1 {
        font-size: 60px;
        font-weight: bolder;
        margin-bottom: 5px;
    }

    .logo p {
        font-size: 28px;
    }

    hero {
        opacity: 0;
        transform: translateY(-20px);
    }

    hero.mount {
        animation: 0.6s title ease forwards;
    }

    .logo img {
        width: 110px;
        aspect-ratio: 1;
        border-radius: 30px;
    }

    hero .logo {
        display: flex;
        column-gap: 50px;
        row-gap: 40px;
    }

    hero {
        padding-top: 180px;
        padding-bottom: 180px;
        width: 90%;
        max-width: 850px;
        margin: auto;
        text-align: center;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 50px;
    }

    hero .actions {
        display: flex;
        column-gap: 20px;
        list-style: none;
        font-size: 18px;
        justify-content: center;
    }

    section {
        max-width: 600px;
        padding-left: 40px;
        position: relative;
        margin: auto;
    }

    section h1 {
        position: absolute;
        transform: translate(-50%, -50%) rotate(0.75turn);
        left: 10px;
        top: 50%;
        letter-spacing: 3px;
        line-height: 1;
        margin: 0;
    }

    @media (max-width: 800px) {
        .logo h1 {
            font-size: 50px;
        }
        .logo p {
            font-size: 23.5px;
        }

        .logo img {
            width: 90px;
        }

        .logo {
            column-gap: 30px;
        }

        section h1 {
            position: initial;
            transform: none;
            letter-spacing: initial;
            margin-bottom: 15px;
        }

        section {
            padding: 0 10px;
        }
    }

    @media (max-width: 550px) {
        hero {
            row-gap: 40px;
        }

        hero .actions {
            font-size: 18px;
            column-gap: 10px;
        }

        .logo h1 {
            font-size: 40px;
        }

        .logo p {
            font-size: 19px;
        }

        .logo {
            flex-direction: column;
        }

        .logo img {
            width: 260px;
        }

        section p {
            text-align: left;
        }
    }

    .content svg {
        width: 100%;
        transform: translateY(-20vw);
        position: absolute;
    }

    .content {
        display: flex;
        flex-direction: column;
        background-color: var(--brand-background-secondary);
        margin-top: 20vw;
    }

    .projects {
        position: relative;
        padding: calc(2.5vw + 90px) 15px;
        text-align: justify;
    }

    .projects ul {
        margin-top: calc(2vw + 50px);
        overflow-x: scroll;
        display: flex;
        flex-wrap: wrap;
        column-gap: 50px;
        row-gap: 50px;
        list-style: none;
        justify-content: center;
    }

    .projects li {
        width: 100%;
        max-width: 700px;
    }

    @media (min-width: 1500px) {
        .projects li {
            width: 800px;
        }
    }

    #projects {
        position: absolute;
        transform: translateY(-110px);
    }
</style>

<script lang="ts">
    import Fa from "svelte-fa";
    import { faGithub, faLinkedin, faXing } from "@fortawesome/free-brands-svg-icons";
    import { browser } from "$app/environment";
    import Project from "$lib/Project.svelte";
    import { onMount } from "svelte";
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    import { faCode, faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";
    
    import Particles from "svelte-particles";
    import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.


    let mount = false;
    onMount(() => (mount = browser && true));

    let ParticlesComponent;

onMount(async () => {
    const module = await import("svelte-particles");

    ParticlesComponent = module.default;
});

let particlesUrl = "http://foo.bar/particles.json"; // placeholder, replace it with a real url

let particlesConfig = {
  "autoPlay": true,
  "defaultThemes": {},
  "delay": 0,
  "fullScreen": {
    "enable": true,
    "zIndex": 1
  },
  "detectRetina": true,
  "duration": 0,
  "fpsLimit": 120,
  "interactivity": {
    "detectsOn": "window",
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onDiv": {
        "selectors": [],
        "enable": false,
        "mode": [],
        "type": "circle"
      },
      "onHover": {
        "enable": true,
        "mode": "repulse",
        "parallax": {
          "enable": false,
          "force": 60,
          "smooth": 10
        }
      },
      "resize": {
        "delay": 0.5,
        "enable": true
      }
    },
    "modes": {
      "trail": {
        "delay": 1,
        "pauseOnStop": false,
        "quantity": 1
      },
      "attract": {
        "distance": 200,
        "duration": 0.4,
        "easing": "ease-out-quad",
        "factor": 1,
        "maxSpeed": 50,
        "speed": 1
      },
      "bounce": {
        "distance": 200
      },
      "bubble": {
        "distance": 400,
        "duration": 2,
        "mix": false,
        "opacity": 0.8,
        "size": 40,
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "mix": false,
          "selectors": []
        }
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 400,
        "links": {
          "blink": false,
          "consent": false,
          "opacity": 1
        }
      },
      "push": {
        "default": true,
        "groups": [],
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4,
        "factor": 100,
        "speed": 1,
        "maxSpeed": 10,
        "easing": "ease-out-quad",
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad",
          "selectors": []
        }
      },
      "slow": {
        "factor": 3,
        "radius": 200
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#ffffff"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 1000
        },
        "shadow": {
          "color": {
            "value": "#000000"
          },
          "length": 2000
        }
      }
    }
  },
  "manualParticles": [],
  "particles": {
    "bounce": {
      "horizontal": {
        "random": {
          "enable": false,
          "minimumValue": 0.1
        },
        "value": 1
      },
      "vertical": {
        "random": {
          "enable": false,
          "minimumValue": 0.1
        },
        "value": 1
      }
    },
    "collisions": {
      "absorb": {
        "speed": 2
      },
      "bounce": {
        "horizontal": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        },
        "vertical": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        }
      },
      "enable": false,
      "maxSpeed": 50,
      "mode": "bounce",
      "overlap": {
        "enable": true,
        "retries": 0
      }
    },
    "color": {
      "value": "#ffffff",
      "animation": {
        "c": {
          "count": 0,
          "enable": false,
          "offset": 0,
          "speed": 1,
          "delay": 0,
          "decay": 0,
          "sync": true
        },
        "o": {
          "count": 0,
          "enable": false,
          "offset": 0,
          "speed": 1,
          "delay": 0,
          "decay": 0,
          "sync": true
        },
        "t": {
          "count": 0,
          "enable": false,
          "offset": 0,
          "speed": 1,
          "delay": 0,
          "decay": 0,
          "sync": true
        }
      }
    },
    "groups": {},
    "move": {
      "angle": {
        "offset": 0,
        "value": 90
      },
      "attract": {
        "distance": 200,
        "enable": false,
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "center": {
        "x": 50,
        "y": 50,
        "mode": "percent",
        "radius": 0
      },
      "decay": 0,
      "distance": {},
      "direction": "none",
      "drift": 0,
      "enable": true,
      "gravity": {
        "acceleration": 9.81,
        "enable": false,
        "inverse": false,
        "maxSpeed": 50
      },
      "path": {
        "clamp": true,
        "delay": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0
        },
        "enable": false,
        "options": {}
      },
      "outModes": {
        "default": "out",
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "random": false,
      "size": false,
      "speed": 2,
      "spin": {
        "acceleration": 0,
        "enable": false
      },
      "straight": false,
      "trail": {
        "enable": false,
        "length": 10,
        "fill": {}
      },
      "vibrate": false,
      "warp": false
    },
    "number": {
      "density": {
        "enable": true,
        "width": 1920,
        "height": 1080
      },
      "limit": 0,
      "value": 80
    },
    "opacity": {
      "random": {
        "enable": false,
        "minimumValue": 0.1
      },
      "value": {
        "min": 0.1,
        "max": 0.5
      },
      "animation": {
        "count": 0,
        "enable": true,
        "speed": 1,
        "decay": 0,
        "delay": 0,
        "sync": false,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none",
        "minimumValue": 0.1
      }
    },
    "reduceDuplicates": false,
    "shadow": {
      "blur": 0,
      "color": {
        "value": "#000"
      },
      "enable": false,
      "offset": {
        "x": 0,
        "y": 0
      }
    },
    "shape": {
      "close": true,
      "fill": true,
      "options": {
        "character": {
          "value": [
              "C",
              "o",
              "n",
              "t",
              "a",
              "c",
              "t"
          ],
          "font": "Verdana",
          "style": "",
          "weight": "400",
          "fill": true
        },
        "char": {
          "value": [
              "C",
              "o",
              "n",
              "t",
              "a",
              "c",
              "t"
          ],
          "font": "Verdana",
          "style": "",
          "weight": "400",
          "fill": true
        }
      },
      "type": "char"
    },
    "size": {
      "random": {
        "enable": false,
        "minimumValue": 1
      },
      "value": 16,
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 10,
        "decay": 0,
        "delay": 0,
        "sync": false,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none",
        "minimumValue": 10
      }
    },
    "stroke": {
      "width": 1,
      "color": {
        "value": "#ffffff",
        "animation": {
          "h": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "delay": 0,
            "decay": 0,
            "sync": true
          },
          "s": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "delay": 0,
            "decay": 0,
            "sync": true
          },
          "l": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "delay": 0,
            "decay": 0,
            "sync": true
          }
        }
      }
    },
    "zIndex": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "opacityRate": 1,
      "sizeRate": 1,
      "velocityRate": 1
    },
    "destroy": {
      "bounds": {},
      "mode": "none",
      "split": {
        "count": 1,
        "factor": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 3
        },
        "rate": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": {
            "min": 4,
            "max": 9
          }
        },
        "sizeOffset": true,
        "particles": {}
      }
    },
    "roll": {
      "darken": {
        "enable": false,
        "value": 0
      },
      "enable": false,
      "enlighten": {
        "enable": false,
        "value": 0
      },
      "mode": "vertical",
      "speed": 25
    },
    "tilt": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "enable": false
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    },
    "wobble": {
      "distance": 5,
      "enable": false,
      "speed": {
        "angle": 50,
        "move": 10
      }
    },
    "life": {
      "count": 0,
      "delay": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "sync": false
      },
      "duration": {
        "random": {
          "enable": false,
          "minimumValue": 0.0001
        },
        "value": 0,
        "sync": false
      }
    },
    "rotate": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "path": false
    },
    "orbit": {
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "decay": 0,
        "delay": 0,
        "sync": false
      },
      "enable": false,
      "opacity": 1,
      "rotation": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 45
      },
      "width": 1
    },
    "links": {
      "blink": false,
      "color": {
        "value": "#ffffff"
      },
      "consent": false,
      "distance": 150,
      "enable": true,
      "frequency": 1,
      "opacity": 0.4,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#000"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 1,
      "warp": false
    },
    "repulse": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "enabled": false,
      "distance": 1,
      "duration": 1,
      "factor": 1,
      "speed": 1
    }
  },
  "pauseOnBlur": true,
  "pauseOnOutsideViewport": true,
  "responsive": [],
  "smooth": false,
  "style": {},
  "themes": [],
  "zLayers": 100,
  "motion": {
    "disable": false,
    "reduce": {
      "factor": 4,
      "value": true
    }
  }
}

let onParticlesLoaded = event => {
    const particlesContainer = event.detail.particles;

    // you can use particlesContainer to call all the Container class
    // (from the core library) methods like play, pause, refresh, start, stop
};

let particlesInit = async engine => {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(main);
    await loadSlim(engine);
};

</script>


<svelte:head>
    <title>Vincent Probst</title>
</svelte:head>

<hero class:mount>
    <svelte:component
    this="{ParticlesComponent}"
    id="tsparticles"
    class="tsparticles"
    style=""
    options="{particlesConfig}"
    on:particlesLoaded="{onParticlesLoaded}"
    particlesInit="{particlesInit}"
    />
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

            <a class="button" 
            href="https://github.com/vincepr">
                <Fa icon={faGithub} />
                Github
            </a>
        </section>
        <ul>
            <li>
                <Project preview="interpreter" 
                url="https://vincepr.github.io/c_compiler"
                git="https://github.com/vincepr/c_compiler">
                    A stack-based interpreter for my own simple programming language. Written in C 
                    wasm enables running it in the browser.
                </Project>
            </li>
            <li>
                <Project preview="md" url="https://vincepr.github.io/md" git="https://github.com/vincepr/md">
                    A Collection of Transcripts and Notes i am gathering while learning new Stuff. 
                    I also added a few interactive Javascript unit-tests in the Blog-Part.
                </Project>
            </li>
            <li>
                <Project preview="microphone" url="https://mic.vprobst.de" git="https://github.com/vincepr/go_micmute_server">
                    Enables the user of the App to remote mute and controll volume of
                    the Windows-machine via a webinterface.
                    Written in Csharp with a GO-server using Websockets in the backend.
                </Project>
            </li>
            <li>
                <Project preview="portfolio" url="https://vincepr.github.io/vite-portfolio" git="https://github.com/vincepr/vite-portfolio">
                    A portfolio app using react, tailwind and vite.
                </Project>
            </li>
            <li>
                <Project preview="tetris" url="https://vincepr.github.io/rs_tetris" git="https://github.com/vincepr/rs_tetris">
                    A Rust project using wasm to run in the browser. The Frontend uses a Rust wrapper
                    for React.
                </Project>
            </li>
            <li>
                <Project
                    preview="chess"
                    url="https://vincepr.github.io/chessjs/public/chess_in_frontend" git="https://github.com/vincepr/chessjs">
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
            <h1>Contact</h1>
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
        margin: auto;
        width: 110px;
        aspect-ratio: 1;
        border-radius: 30px;
    }

    hero .logo {
        display: flex;
        column-gap: 50px;
        row-gap: 40px;
        z-index: 2;
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
        z-index: 2;
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

    .tsparticles{
        z-index: 1;
    }
</style>

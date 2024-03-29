<script lang="ts">
  import Fa from "svelte-fa";
  import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
    import { faGithub, faLinkedin, faXing } from "@fortawesome/free-brands-svg-icons";

  import { onMount } from "svelte";

  export let preview: string;
  export let git: string;
  export let url: string;

  let mount = false;
  onMount(() => (mount = true));

  let showDescription = false;
</script>

<page class:mount on:mouseleave={() => (showDescription = false)}>
  <header>
    <a class="button" href={git}>
      <Fa icon={faGithub} />
      Github
    </a>

    <a class="url" href={url}>
      {url}
      <Fa class="iconUrl" icon={faArrowUpRightFromSquare} />
    </a>
  </header>

  <picture>
    <source
      media="(min-resolution: 1.06x)"
      srcset="project/{preview}_1x.webp"
    />
    <img src="project/{preview}_0x.webp" alt="Preview for {preview}" />

    <button on:click={() => (showDescription = !showDescription)}
      >Show description</button
    >

    <main class:show={showDescription}>
      <slot>No description</slot>
    </main>
    
  </picture>
  
</page>



<style>
  :global(.iconUrl) {
    padding-left: 0.5em;
  }

  page {
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(200, 200, 200, 0.08);
  }

  picture {
    width: 100%;
    border-radius: 0 0 15px 15px;
    opacity: 0;
    display: flex;
    position: relative;
    overflow: hidden;
  }

  img {
    pointer-events: none;
    width: 100%;
    border-radius: 0 0 15px 15px;
    aspect-ratio: 800 / 650;
  }

  page.mount picture {
    animation: fadein 0.3s ease forwards;
  }

  @keyframes fadein {
    to {
      opacity: 1;
    }
  }

  header {
    position: relative;
    background-color: var(--brand-background-secondary);
    border-radius: 15px 15px 0 0;
    padding: 8px 20px;
    border-bottom: 1px solid rgba(200, 200, 200, 0.08);
    display: flex;
  }

  header .button{
    padding: 3px 10px;
    display: flex;
    gap: 0.3rem;

  }

  header .url {
    display: flex;
    justify-content: space-between;
    color: var(--brand-secondary);
    cursor: pointer;
    text-decoration: none;
    background-color: var(--brand-background);
    padding: 5px 10px;
    border-radius: 10px;
    min-width: 400px;
    margin: auto;
    transition: color 0.3s ease;
    overflow: hidden;
    white-space: nowrap;
  }

  @media (max-width: 700px) {
    header .url {
      font-size: 14px;
      min-width: auto;
    }
  }

  header .url:hover {
    text-decoration: underline;
    color: var(--brand-primary);
  }

  header::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0%;
    background-color: var(--brand-accent);
    animation: loading-bar 0.6s ease forwards;
  }

  @keyframes loading-bar {
    to {
      width: 100%;
    }
  }

  page.mount header::after {
    display: none;
  }

  main {
    position: absolute;
    bottom: 0px;
    left: 0px;
    margin: 10px;
    transform: translateY(calc(10px + 100%));
    background: var(--brand-background-secondary);
    border-radius: 10px;
    padding: 10px 15px;
    transition: transform 0.3s ease;
    border: 1px solid rgba(200, 200, 200, 0.08);
    max-width: 400px;
  }

  page:hover main,
  main.show {
    transform: none;
    transition: transform 0.3s ease;
    animation: 0.3s ease description forwards;
  }

  picture button {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
  }
</style>

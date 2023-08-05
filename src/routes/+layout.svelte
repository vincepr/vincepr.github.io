<script>
  import "@fontsource/inter";
  import "@fontsource/inter/latin-900.css";

  // Import app-wide stylesheet
  import "../app.css";
  import Navbar from "../lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<svelte:head>
  <meta name="theme-color" content="#1e1f26" />
  <meta
    name="description"
    content="I am a Software Developer. Interested in all diferent kinds of Languages and Technologies"
  />
</svelte:head>

<div id="top" />
<Navbar />
<slot />
<Footer />

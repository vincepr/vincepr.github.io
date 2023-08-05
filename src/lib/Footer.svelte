<script lang="ts">
  import { page } from "$app/stores";

  $: isRoot = $page.url.pathname == "/";
</script>

<footer class:root={isRoot}>
  <p>
    &copy; <strong>Vincent Probst</strong> 2023 | <a href="/imprint">Impressum</a>
  </p>
</footer>

<style>
  footer {
    background-color: var(--brand-background-secondary);
    padding: 30px 20px;
    padding-top: 60px;
    text-align: center;
  }

  footer.root {
    border-top: 2px solid rgba(200, 200, 200, 0.08);
  }
</style>

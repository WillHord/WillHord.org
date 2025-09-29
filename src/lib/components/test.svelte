<script lang="ts">
let open = $state(false);
</script>

<div>
  <div><button onclick={() => ( open = !open )}>Open</button></div>
  {#if open}
    <div>Now it is open</div>
  {/if}
</div>

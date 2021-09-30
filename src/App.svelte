<script>
  import { main } from "./data.js";
</script>

<ul class="text-red-600">
  {#each Object.keys(main) as i}
    <li>{main[i].id}: {main[i].name} ({main[i].score})</li>
  {/each}
</ul>

<script>
  //
  import { NAVMENU } from "$utils/constants";
</script>
<nav class="text-purple-900 text-lg hidden lg:flex items-center">
  {#each NAVMENU as item}
    <a href={item.target} class="py-2 px-8 flex hover:text-purple-700">
        {item.label}
    </a>
  {/each}
</nav>
<button class="flex flex-col ml-4">
  <span class="w-6 h-1 rounded-full bg-purple-800 mb-1"></span>
  <span class="w-6 h-1 rounded-full bg-purple-800 mb-1"></span>
  <span class="w-6 h-1 rounded-full bg-purple-800 mb-1"></span>
</button>
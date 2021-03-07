<script>
  // Core Imports
  import { convertToSlug } from "$utils/helpers";
  // Core Vars
  export let apiPosts;
</script>
<ul>
  {#await apiPosts}
    {:then posts} 
      {#each posts as post}
        <li>
          <a href={`/blog/${convertToSlug(post.title)}/${post.id}#content`}>
            {post.title}
          </a>
        </li>
    {/each}
  {/await}
</ul>
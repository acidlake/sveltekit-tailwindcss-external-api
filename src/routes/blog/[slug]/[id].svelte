<script context="module">
  // Core Imports
  import { APIURL } from "$utils/constants";
  export async function load(ctx){
    // Core Vars
    const id = ctx.page.params.id;
    let post;
    // Load our Data
    await ctx.fetch(`${APIURL}/${id}`).then(response => response.json()).then(data => post = data);
    //
    return { props: { post, id} }
  }
</script>
<script>
  // Core Imports
  import Post from "$components/blog/Post.svelte";

  // Core Vars
  export let post;
</script>

<Post {post} />
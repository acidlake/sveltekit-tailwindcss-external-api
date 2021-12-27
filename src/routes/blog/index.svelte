<script context="module">
  import { APIURL } from "$utils/constants";
  import { onMount } from 'svelte'; 
  
  onMount(
      async () => {
		if(typeof window !== 'undefined'){
    limit = localStorage.getItem('limit');
    page = localStorage.getItem('page');
  }
	}
  )
  //
  let limit;
  let page;
  let postLength;

  

  export async function load(ctx){
    let posts;
    await ctx.fetch(`${APIURL}?_limit=${limit}&_page=${page}`).then(response => response.json()).then(data => posts = data);
    await ctx.fetch(`${APIURL}`).then(response => response.json()).then(data => postLength = data);
    return { props: { posts, limit, page, postLength} }
  }
</script>

<script>
  import Posts from "$components/blog/Posts.svelte"
  export let posts;
  export let limit;
  export let page;
  export let postLength;
</script>

<Posts {posts} {limit} {page} {postLength} />

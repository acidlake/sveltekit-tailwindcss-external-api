<script>
  import { convertToSlug } from "$utils/helpers";
  //
  export let post;
  export let linkLabel;
</script>
<a href={`/blog/${convertToSlug(post.title)}/${post.id}#content`} class="text-indigo-500 inline-flex items-center mt-4">{linkLabel}
  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 12h14"></path>
    <path d="M12 5l7 7-7 7"></path>
  </svg>
</a>
<script context="module">
import { goto } from '$app/navigation';
  export async function load(ctx){
    //Check if we have an Id in the Url
    if(!ctx.page.params.id){
      goto("/");
    }
  }
</script>
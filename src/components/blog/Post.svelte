<script>
  // Components
	import PrimaryHeading from "$components/Common/PrimaryHeading.svelte"
	import PrimaryParagraph from "$components/Common/PrimaryParagraph.svelte"
  import PrimaryBtn from "$components/Common/PrimaryBtn.svelte";

  //
  export let post;
</script>
<div id="#content" class="grid grid-cols-1 p-4">
  <PrimaryHeading headingText={post.title} />
  <PrimaryParagraph paragraphText={post.body} />
  <PrimaryBtn btnTarget="/blog/" btnLabel="Go Back.." />
</div>

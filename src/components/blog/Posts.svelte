<script>
  //
  import Pagination from "$components/Common/Pagination.svelte";
  import LinkMore from "$components/Common/LinkMore.svelte";
  import DateWidget from "$components/Common/DateWidget.svelte";
  //
  export let posts;
  export let limit;
  export let page;
  export let postLength;
</script>
<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      <Pagination {limit} {page} {postLength} />
      <!-- post begin -->
      {#each posts as post}
        <div class="py-8 flex flex-wrap md:flex-nowrap" id="post">
            <DateWidget heading="CATEGORY" dateInfo="12 Jun 2019" />
          <div class="md:flex-grow">
            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{post.title}</h2>
            <p class="leading-relaxed"></p>
            <LinkMore {post} linkLabel="Read More.." />
          </div>
        </div>
      {/each}
      <!-- end post -->
    </div>
  </div>
</section>
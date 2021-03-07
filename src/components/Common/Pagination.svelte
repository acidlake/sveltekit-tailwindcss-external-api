<script>
  //
  import { updatePagination } from "$utils/helpers";
  import { PAGINATIONINFO, PAGINATIONSTORE } from "$utils/constants";
  //
  export let limit;
  export let page;
  export let postLength;

  const totalPage = (postLength.length / limit);
  const pageToSend = parseInt(page);
</script>

<div class="grid grid-cols-2 mb-8">
  {#if pageToSend === 1}
  <span on:click={() => updatePagination(pageToSend+1, PAGINATIONSTORE.storeName, PAGINATIONSTORE.storeRedirect)} class="block cursor-pointer p-4 bg-blue-600 rounded text-white w-40 text-center">{PAGINATIONINFO.nextPage}</span>
{:else if pageToSend == totalPage}
  <span on:click={() => updatePagination(pageToSend-1, PAGINATIONSTORE.storeName, PAGINATIONSTORE.storeRedirect)} class="block cursor-pointer p-4 bg-blue-600 rounded text-white w-40 text-center mt-4">{PAGINATIONINFO.prevPage}</span>
{:else}
  <span on:click={() => updatePagination(pageToSend-1, PAGINATIONSTORE.storeName, PAGINATIONSTORE.storeRedirect)} class="block cursor-pointer p-4 bg-blue-600 rounded text-white w-40 text-center">{PAGINATIONINFO.prevPage}</span>
  <span on:click={() => updatePagination(pageToSend+1, PAGINATIONSTORE.storeName, PAGINATIONSTORE.storeRedirect)} class="block cursor-pointer p-4 bg-blue-600 rounded text-white w-40 text-center">{PAGINATIONINFO.nextPage}</span>
{/if}
</div>


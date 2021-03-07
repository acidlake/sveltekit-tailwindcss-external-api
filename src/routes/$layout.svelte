<script>
  import './global.pcss';
  import { COMPANYNAME } from "$utils/constants";
  import { setDefault } from "$utils/helpers";
  import Navigation from '$components/Common/Navigation.svelte';

  // Init our Default LocalStorage
  setDefault();
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900&display=swap" rel="stylesheet">
</svelte:head>
<main class="bg-gray-100 font-montserrat">
  <header class="h-24 sm:h-32 flex items-center">
      <div class="container mx-auto px-6 sm:px-12 flex items-center justify-between">
          <div class="font-black text-blue-900 text-2xl flex items-start">
              <a href="/">{COMPANYNAME}</a><span class="w-3 h-3 rounded-full bg-purple-600 ml-2"></span>
          </div>
          <div class="flex items-center">
            <Navigation />
          </div>
      </div>
  </header>
  <div class="container mx-auto h-full flex pb-20">
      <div class="">
        <slot />
      </div>      
  </div>
</main>
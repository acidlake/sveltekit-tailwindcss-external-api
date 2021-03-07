const convertToSlug = (term) => {
  return term
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-')
        ;
}

const setDefault = () =>{
  let page;
  let limit;
  if(typeof window !== 'undefined'){
    $: limit = localStorage.getItem('limit');
    $: page = localStorage.getItem('page');

    if(!page){ localStorage.setItem('page', 1) }
    if(!limit){ localStorage.setItem('limit', 10) }
  }
}

const updatePagination = (storeValue, storeName, storeRedirect) => {
  if(typeof window !== 'undefined'){
    localStorage.setItem(`${storeName}`, storeValue);
    window.location.replace(`${storeRedirect}`)
  }
}

export {
  updatePagination,
  convertToSlug,
  setDefault
}
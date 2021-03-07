const COMPANYNAME = 'My Company';
const APIURL = 'https://jsonplaceholder.typicode.com/posts';
const NAVMENU = [
  {
    label: 'Home',
    target: '/'
  },
  {
    label: 'About Us',
    target: '/about'
  },
  {
    label: 'Blog',
    target: '/blog'
  },
  {
    label: 'Contact Us',
    target: '#'
  }
]

const HOMEPARAGRAPH = 'Lorem ipsum dolor sit amet, consectetur adipiscing adipiselit. Pellentesque suscipit tellus vitae purus dignissim, nec tincidunt neque condimentum. Nam nec ligula pretium mi interdum hendrerit in sit.';

const PAGINATIONINFO = {
  nextPage: 'Next',
  prevPage: 'Previous'
}

const PAGINATIONSTORE = {
  storeName: 'page',
  storeRedirect: '/blog'
}

export {
  APIURL,
  NAVMENU,
  HOMEPARAGRAPH,
  COMPANYNAME,
  PAGINATIONINFO,
  PAGINATIONSTORE
}
import axios from 'axios';

export async function load({isServer, redirect, store}) {
  // if we're in the server environment, fetch from the API, otherwise
  // data will be in the store
  // isServer is deprecated, but can't find any examples of how to make
  // this request only if rendered on the server then.
  // store is only available on fetch...
  // isClient and isServer are supposed to be used on process... but where?
  // in Webpack? I make async requests in Webpack? That sounds incorrect. WTF
  // It appears this should be done with a middleware:
  // https://github.com/nuxt/example-auth0/issues/30
  if (isServer) {
    console.log('fetch executed from server');

    try {
      const res = await axios('https://todos-irfedqgncn.now.sh/todos');

      store.commit('init', res.data);
    } catch (err) {
      redirect('/error');
    }
  }
}

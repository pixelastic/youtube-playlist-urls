import ytpl from 'ytpl';
import {_} from 'golgoth';

(async () => {
  // function getQueryStringParam(url, name) {
  //   const queryString = url.split('?')[1];
  //   const urlSearchParams = new URLSearchParams(queryString);
  //   const params = Object.fromEntries(urlSearchParams.entries());
  //   return params[name];
  // }

  // const playlistId = getQueryStringParam(process.argv[2], 'list');
  const playlist = await ytpl(process.argv[2], {limit: Infinity});
  _.each(playlist.items, item => {
    console.info(item.shortUrl);
  });
})();


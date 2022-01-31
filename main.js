import ytpl from 'ytpl';
import {_} from 'golgoth';

(async () => {
  const playlist = await ytpl(process.argv[2], {limit: Infinity});
  _.each(playlist.items, item => {
    console.info(item.shortUrl);
  });
})();


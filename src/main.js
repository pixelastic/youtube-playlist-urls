import ytpl from 'ytpl';

(() => {
  function getQueryStringParam(url, name) {
    const queryString = url.split('?')[1].split('&');
    let match = null;
    queryString.forEach(parameter => {
      const [key, value] = parameter.split('=');
      if (key === name) {
        match = value;
      }
    });
    return match;
  }

  const playlistId = getQueryStringParam(process.argv[2], 'list');

  ytpl(playlistId, (_err, playlist) => {
    playlist.items.forEach(item => {
      const videoId = getQueryStringParam(item.url, 'v');
      console.info(`https://www.youtube.com/watch?v=${videoId}`);
    });
  });
})();


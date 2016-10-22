function url(pathname) {
  return `https://hacker-news.firebaseio.com${pathname}`;
}

function readItem(id) {
  if (isNaN(parseInt(id, 10))) {
    return Promise.reject(new Error('id must be number'));
  }
  return fetch(url(`/v0/item/${id}.json`)).then(response => {
    if (response.status !== 200) {
      throw new Error(`readItem(${id}) failed`);
    }
    return response.json();
  });
}

function readTopStories() {
  return fetch(url('/v0/topstories.json')).then(response => {
    if (response.status !== 200) {
      throw new Error('readTopStories() failed');
    }
    return response.json();
  });
}

function readNewStories() {
  return fetch(url('/v0/newstories.json')).then(response => {
    if (response.status !== 200) {
      throw new Error('readNewStories() failed');
    }
    return response.json();
  });
}

export {
  url,
  readItem,
  readTopStories,
  readNewStories,
};

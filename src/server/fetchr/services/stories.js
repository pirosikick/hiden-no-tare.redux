import fetch from 'node-fetch';
import co from 'co';

function readTopStories() {
  return fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
}

function readNewStories() {
  return fetch('https://hacker-news.firebaseio.com/v0/newstories.json');
}

const service = {
  name: 'stories',

  /**
   * @param {object} req
   * @param {string} resource - 'stories.new' or 'stories.top'
   */
  read:
    co.wrap(function* readStories(req, resource, params, config, callback) {
      const type = resource.split('.')[1];

      let res;
      if (type === 'new') {
        res = yield readNewStories();
      } else if (type === 'top') {
        res = yield readNewStories();
      }

      if (res) {
        const json = yield res.json();
        callback(null, json, { statusCode: res.status });
      } else {
        const err = new Error('invalid resource');
        err.statusCode = 400;
        err.output = {
          message: `'${resource}' is invalid. Use 'stories.new' or 'stories.top'.`,
        };
        callback(err);
      }
    }),
};

export default service;
export {
  readTopStories,
  readNewStories,
};

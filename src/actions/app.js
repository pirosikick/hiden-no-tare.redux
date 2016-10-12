import * as storyActions from './story';

function init() {
  return dispatch => (
    Promise.all([
      dispatch(storyActions.fetchNew()),
      dispatch(storyActions.fetchTop()),
    ])
  );
}

export default { init };
export { init };

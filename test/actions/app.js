/* eslint-disable import/no-extraneous-dependencies */
import test from 'ava';
import * as actions from '../../src/actions/app';

test('actions.init', (t) => {
  t.deepEqual(
    actions.init({ hoge: 'hoge' }),
    { type: 'INIT_APP', payload: { hoge: 'hoge' } }
  );
});

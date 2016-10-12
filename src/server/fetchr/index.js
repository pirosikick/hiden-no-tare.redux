import Fetcher from 'fetchr';
import storiesService from './services/stories';

export function middleware() {
  Fetcher.registerService(storiesService);
  return Fetcher.middleware();
}

export default { middleware };

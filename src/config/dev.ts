import { getExploreName } from '../utils/platform';

export const devConfig = {
  sdkKey: 'EorjEyn25QvtiMgG5K2IH92k0f2Hu4fe5iuh',
  sdkSecret: 'Cw6zibGco8Wcl0Gh7vwho5gaNsxEl25NOZhe',
  topic: 'test topic',
  name: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`,
  password: 'password',
  signature: 'test signature',
};

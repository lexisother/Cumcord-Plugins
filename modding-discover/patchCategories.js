import { after } from '@cumcord/patcher';
import { findByProps } from '@cumcord/modules/webpack';

const discoveryCategories = findByProps('getDiscoveryCategories');

export default () => {
  after('getDiscoveryCategories', discoveryCategories, (_, res) => {
    res.push({ categoryId: 99, name: 'Client Modding' });
    return res;
  });
};

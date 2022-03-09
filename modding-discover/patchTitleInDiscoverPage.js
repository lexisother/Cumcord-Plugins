import { findByProps } from '@cumcord/modules/webpack';
import { after } from '@cumcord/patcher';

const discoveryCategories = findByProps('getDiscoveryCategories');

export default () => {
  after('getCategoryName', discoveryCategories, (args, res) => {
    return args[0] == 99 ? 'Client Modding' : res;
  });
};

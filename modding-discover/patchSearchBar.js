import { findByDisplayName } from '@cumcord/modules/webpack';
import { after } from '@cumcord/patcher';

const GuildDiscoverySearchBar = findByDisplayName('GuildDiscoverySearchBar', false);
export default () => {
  after('default', GuildDiscoverySearchBar, (args, res) => {
    return args[0].currentCategoryId == 99 ? null : res;
  });
};

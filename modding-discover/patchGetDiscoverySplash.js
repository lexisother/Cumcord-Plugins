import { findByProps } from '@cumcord/modules/webpack';
import { after } from '@cumcord/patcher';

const guildResources = findByProps('getGuildDiscoverySplashURL');

export default (data) => {
  after('getGuildDiscoverySplashURL', guildResources, (args, res) => {
    if (Object.values(data.map((guild) => guild.id)).includes(args[0].id)) {
      args[0].banner = args[0].splash;
      res = guildResources.getGuildBannerURL(...args);
    }
    return res;
  });
};

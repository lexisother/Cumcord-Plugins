import { FluxDispatcher } from '@cumcord/modules/common';
import { findByProps } from '@cumcord/modules/webpack';
import { before, after } from '@cumcord/patcher';

let fetchSuccess;
const { getGuild } = findByProps('getGuildCount');

let addCategory;
let addGuilds;

export default {
  onLoad() {
    findByProps('isDispatching').dispatch({ type: 'GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS' });
    fetchSuccess = FluxDispatcher._orderedActionHandlers.GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS[0];
    addCategory = after(
      'getDiscoveryCategories',
      findByProps('getDiscoveryCategories'),
      (_, res) => {
        res.push({ categoryId: 99, name: 'Client Modding' });
        return res;
      },
    );
    addGuilds = before('actionHandler', fetchSuccess, (args) => {
      if (args[0].categoryId == 99) {
        args[0].guilds = [getGuild('824921608560181258')];
      }
    });
  },
  onUnload() {
    addCategory();
    addGuilds();
  },
};

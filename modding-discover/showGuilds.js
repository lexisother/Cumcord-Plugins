import { FluxDispatcher } from '@cumcord/modules/common';
import { before } from '@cumcord/patcher';

const fetchSuccess = FluxDispatcher._orderedActionHandlers.GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS[0];
export default async (guildData) => {
  before('actionHandler', fetchSuccess, (args) => {
    if (args[0].categoryId == 99) {
      args[0].guilds = guildData;
    }
  });
};

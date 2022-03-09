import { findByProps } from '@cumcord/modules/webpack';
import { before } from '@cumcord/patcher';
import { FluxDispatcher } from '@cumcord/modules/common';

findByProps('isDispatching').dispatch({ type: 'GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS' });
const fetchSuccess = FluxDispatcher._orderedActionHandlers.GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS[0];
export default async (guildData) => {
  before('actionHandler', fetchSuccess, (args) => {
    if (args[0].categoryId == 99) {
      args[0].guilds = guildData;
    }
  });
};

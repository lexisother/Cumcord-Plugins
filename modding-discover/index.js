import { FluxDispatcher } from '@cumcord/modules/common';
import { findByProps, findByDisplayName } from '@cumcord/modules/webpack';
import { before, after } from '@cumcord/patcher';

const GuildDiscoverySearchBar = findByDisplayName('GuildDiscoverySearchBar', false);
// const discoveryCard = findByDisplayName('GuildDiscoveryCard', false);
const guildResources = findByProps('getGuildDiscoverySplashURL');
const discoveryCategories = findByProps('getDiscoveryCategories')

let fetchSuccess;
let addCategory;
let addGuilds;
let removeBar;
let patchGetDiscoverySplash;
let patchTitleInDiscoverPage;

export default {
  async onLoad() {
    const data = await (await fetch('https://public.alyxia.dev/guilddb.json', {cache: "no-cache"} )).json();
    findByProps('isDispatching').dispatch({ type: 'GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS' });
    fetchSuccess = FluxDispatcher._orderedActionHandlers.GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS[0];
    addCategory = after(
      'getDiscoveryCategories',
      discoveryCategories,
      (_, res) => {
        res.push({ categoryId: 99, name: 'Client Modding' });
        return res;
      },
    );
    addGuilds = before('actionHandler', fetchSuccess, (args) => {
      if (args[0].categoryId == 99) {
        args[0].guilds = data;
      }
    });
    patchGetDiscoverySplash = after('getGuildDiscoverySplashURL', guildResources, (args, res) => {
      if(Object.values(data.map(guild => guild.id)).includes(args[0].id)) {
        args[0].banner = args[0].splash;
        res = guildResources.getGuildBannerURL(...args);
      }
      return res;
    });
    patchTitleInDiscoverPage = after('getCategoryName', discoveryCategories, (args, res) => {
      return (args[0] == 99) ? 'Client Modding' : res;
    });
    removeBar = after('default', GuildDiscoverySearchBar, (args, res) => {
      return (args[0].currentCategoryId == 99) ? null : res;
    });
    // cardPatch = before('default', discoveryCard, (args) => {
    //   console.log("Penis?");
    //   return args;
    // })
  },
  onUnload() {
    addCategory();
    addGuilds();
    removeBar();
    patchGetDiscoverySplash();
    patchTitleInDiscoverPage();
  },
};

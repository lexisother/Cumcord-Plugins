// https://public.alyxia.dev/modding-archive/backup/github/SomeAspy/AspyCumcordPlugins.git.tar

// TODO: Optimize

import { addCommand } from '@cumcord/commands';
import { getNeko } from './api.js';
let commands = [];
export default () => {
  return {
    onLoad() {
      commands.push(
        addCommand({
          name: 'neko',
          description: 'Send images from nekos.life',
          args: [
            {
              name: 'endpoint',
              description: 'The type of image to get',
              type: 'string',
              required: true,
              choices: [
                {
                  name: 'dog',
                  value: 'woof',
                },
                {
                  name: 'tickle',
                  value: 'tickle',
                },
                {
                  name: 'slap',
                  value: 'slap',
                },
                {
                  name: 'poke',
                  value: 'poke',
                },
                {
                  name: 'pat',
                  value: 'pat',
                },
                {
                  name: 'neko',
                  value: 'neko',
                },
                {
                  name: 'cat',
                  value: 'meow',
                },
                {
                  name: 'lizard',
                  value: 'lizard',
                },
                {
                  name: 'kiss',
                  value: 'kiss',
                },
                {
                  name: 'hug',
                  value: 'hug',
                },
                {
                  name: 'foxGirl',
                  value: 'fox_girl',
                },
                {
                  name: 'feed',
                  value: 'feed',
                },
                {
                  name: 'cuddle',
                  value: 'cuddle',
                },
                {
                  name: 'nekoGif',
                  value: 'ngif',
                },
                {
                  name: 'kemonomimi',
                  value: 'kemonomimi',
                },
                {
                  name: 'holo',
                  value: 'holo',
                },
                {
                  name: 'smug',
                  value: 'smug',
                },
                {
                  name: 'baka',
                  value: 'baka',
                },
                {
                  name: 'wallpaper',
                  value: 'wallpaper',
                },
                {
                  name: 'goose',
                  value: 'goose',
                },
                {
                  name: 'gecg',
                  value: 'gecg',
                },
                {
                  name: 'avatar',
                  value: 'avatar',
                },
                {
                  name: 'waifu',
                  value: 'waifu',
                },
              ],
            },
          ],
          handler: (ctx, send) => {
            return getNeko(ctx.args.endpoint, false, send);
          },
        }),
      );
      commands.push(
        addCommand({
          name: 'nekoNsfw',
          description: 'Send NSFW images from nekos.life',
          args: [
            {
              name: 'endpoint',
              description: 'The type of image to get',
              type: 'string',
              required: true,
              choices: [
                {
                  name: 'hentaiGif',
                  value: 'Random_hentai_gif',
                },
                {
                  name: 'pussy',
                  value: 'pussy',
                },
                {
                  name: 'nekoGif',
                  value: 'nsfw_neko_gif',
                },
                {
                  name: 'neko',
                  value: 'lewd',
                },
                {
                  name: 'lesbian',
                  value: 'les',
                },
                {
                  name: 'kuni',
                  value: 'kuni',
                },
                {
                  name: 'cumsluts',
                  value: 'cum',
                },
                {
                  name: 'classic',
                  value: 'classic',
                },
                {
                  name: 'boobs',
                  value: 'boobs',
                },
                {
                  name: 'bj',
                  value: 'bj',
                },
                {
                  name: 'anal',
                  value: 'anal',
                },
                {
                  name: 'avatar',
                  value: 'nsfw_avatar',
                },
                {
                  name: 'yuri',
                  value: 'yuri',
                },
                {
                  name: 'trap',
                  value: 'trap',
                },
                {
                  name: 'tits',
                  value: 'tits',
                },
                {
                  name: 'girlSoloGif',
                  value: 'solog',
                },
                {
                  name: 'girlSolo',
                  value: 'solo',
                },
                {
                  name: 'pussyWankGif',
                  value: 'pwankg',
                },
                {
                  name: 'pussyArt',
                  value: 'pussy_jpg',
                },
                {
                  name: 'kemonomimi',
                  value: 'lewdkemo',
                },
                {
                  name: 'kitsune',
                  value: 'lewdk',
                },
                {
                  name: 'keta',
                  value: 'keta',
                },
                {
                  name: 'holo',
                  value: 'hololewd',
                },
                {
                  name: 'holoEro',
                  value: 'holoero',
                },
                {
                  name: 'hentai',
                  value: 'hentai',
                },
                {
                  name: 'futanari',
                  value: 'futanari',
                },
                {
                  name: 'femdom',
                  value: 'femdom',
                },
                {
                  name: 'feetGif',
                  value: 'feetg',
                },
                {
                  name: 'eroFeet',
                  value: 'erofeet',
                },
                {
                  name: 'ero',
                  value: 'ero',
                },
                {
                  name: 'eroKitsune',
                  value: 'erok',
                },
                {
                  name: 'eroKemonomimi',
                  value: 'erokemo',
                },
                {
                  name: 'eroNeko',
                  value: 'eron',
                },
                {
                  name: 'eroYuri',
                  value: 'eroyuri',
                },
                {
                  name: 'cumArts',
                  value: 'cum_jpg',
                },
                {
                  name: 'Blowjob',
                  value: 'blowjob',
                },
                {
                  name: 'spank',
                  value: 'spank',
                },
                {
                  name: 'gasm',
                  value: 'gasm',
                },
              ],
            },
          ],
          handler: (ctx, send) => {
            return getNeko(ctx.args.endpoint, true, send);
          },
        }),
      );
    },
    onUnload() {
      commands.forEach((removeCommand) => removeCommand());
    },
  };
};

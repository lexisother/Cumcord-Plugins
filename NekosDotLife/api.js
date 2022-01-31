// https://public.alyxia.dev/modding-archive/backup/github/SomeAspy/AspyCumcordPlugins.git.tar

import endpoints from './endpoints.json';
export async function getNeko(name, nsfwToggle) {
  const resp = await fetch(
    `https://nekos.life/api/v2/${nsfwToggle ? endpoints.nsfw[name] : endpoints.sfw[name]}`,
  );
  return (await resp.json()).url;
}

import { findByProps } from "@cumcord/modules/webpack";

const devStore = findByProps("isDeveloper");

Object.defineProperty(devStore, "isDeveloper", { configurable: true, value: true });

// i tested, yes this leaves the original intact
export const onUnload = () => delete devStore.isDeveloper;

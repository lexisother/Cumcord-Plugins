import settings from './Settings';
import send from './send';
import styles from './styles.sass';

export default () => {
  const unpatches = [styles(), send()];

  return {
    onUnload: () => _.forEachRight(unpatches, (p) => p()),
    settings,
  };
};

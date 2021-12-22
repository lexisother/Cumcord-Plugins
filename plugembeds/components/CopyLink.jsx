import { webpack } from "@cumcord/modules";
import { copyText } from "@cumcord/utils";

const { copyLink, copyLinkIcon, copied } = webpack.findByProps("titleRegion");
const Clickable = webpack.findByDisplayName("Clickable");
const Link = webpack.findByDisplayName("Link");

export default function CopyLink({ url }) {
  const [state, setState] = React.useState(false);
  const timeoutRef = React.useRef(null);
  React.useEffect(() => {
    return function () {
      return clearTimeout(timeoutRef);
    };
  });

  function handleClick() {
    if (!state) {
      copyText(url);
      setState(true);
      timeoutRef.current = setTimeout(() => {
        return setState(false);
      }, 2000);
    }
  }

  return (
    <Clickable className={`${copyLink}${state ? " " + copied : ""}`} onClick={handleClick}>
      <Link className={copyLinkIcon} href={url} target="_blank" />
      {state ? "Copied!" : "Copy Link"}
    </Clickable>
  );
}

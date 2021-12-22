import { importPlugin, installed } from "@cumcord/plugins";
import { useNest } from "@cumcord/utils";
import { webpack } from "@cumcord/modules";
import ModuleIcon from "./ModuleIcon";
import CopyLink from "./CopyLink";
import { useFetchModule } from "../hooks/ModuleData";

// Components
const Text = webpack.findByDisplayName("Text");
const Button = webpack.findByProps("BorderColors", "Colors");
const Alert = webpack.findByDisplayName("Alert");
const ModalApi = webpack.findByProps("openModal", "useModalsStore");

// Classes
const {
  wrapper,
  content,
  title,
  titleRegion,
  icon,
  infoLink,
  infoIcon,
  buttonSize,
  buildInfo,
  buildDetails,
  subHead,
} = webpack.findByProps("titleRegion");

// SVGs
const InfoFilled = webpack.findByDisplayName("InfoFilled");

export default function ModuleEmbed({ url }) {
  useNest(installed);
  const data = useFetchModule(url + "/plugin.json");
  const isInstalled = installed.ghost[url];

  return (
    <div className={wrapper}>
      <Text size={Text.Sizes.SIZE_12} className={titleRegion}>
        <strong className={title}>{data.author}</strong>
        <a
          className={infoLink}
          onClick={() => {
            ModalApi.openModal((props) => (
              <Alert
                {...props}
                title="What is this?"
                body={
                  <p id="aly-plugembeds-alerttext">
                    This is a Cumcord feature. It allows you to install plugins straight from chat.
                    <br />
                    Simply hit the install button on the embed.
                  </p>
                }
              />
            ));
          }}
          target="_blank">
          <InfoFilled className={infoIcon} />
        </a>
        <CopyLink url={url} />
      </Text>
      <div className={content}>
        <ModuleIcon className={icon} />
        <div className={buildInfo}>
          <Text size={Text.Sizes.SIZE_14} className={subHead}>
            {data.name}
          </Text>
          <Text size={Text.Sizes.SIZE_16} className={buildDetails}>
            {data.description}
          </Text>
        </div>
        <Button
          size={buttonSize}
          color={
            data.invalid
              ? Button.Colors.GREY
              : isInstalled
              ? Button.Colors.BLUE
              : Button.Colors.GREEN
          }
          disabled={data.invalid || isInstalled}
          onClick={() => importPlugin(url)}>
          {data.invalid ? "Invalid" : isInstalled ? "Installed" : "Install"}
        </Button>
      </div>
    </div>
  );
}

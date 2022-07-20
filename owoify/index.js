import { webpackModules } from "@cumcord/modules";
function randomarray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

let output = "";
let x = "";
let ismodified = false;
export default {
  onLoad() {
    const endings = [
      "owo",
      "UwU",
      ">w<",
      "^w^",
      "●w●",
      "☆w☆",
      "𝗨𝘄𝗨",
      "(´꒳`)",
      "♥(。U ω U。)",
      "(˘ε˘)",
      "( ˘ᴗ˘ )",
      "(*ฅ́˘ฅ̀*)",
      "*screams*",
      "*twearks*",
      "*sweats*",
    ];
    const removeCommand = cumcord.commands.addCommand({
      name: "uwuify",

      description: "uwuify your amazing string",
      args: [
        {
          name: "string",
          description: "the thing thats getting uwufified",
          type: "string",
          required: true,
        },
      ],

      handler: (ctx, send) => {
        output = "";
        var input = ctx.args.string.split(" ");
        for (let i = 0; i < input.length; i++) {
          ismodified = false;
          //yes its stutter but fuck you im too lazy to fix it
          let chancesutter = random(1, 5);
          x = input[i]
            .toLowerCase()
            .replace("r", "w")
            .replace("l", "w")
            .replace("ne", "nye")
            .replace("no", "nyo")
            .replace("ni", "nyi");
          if (x.endsWith("!")) {
            x += shuffle(["1", "!", "!", "1"]).join("");
            ismodified = true;
          }
          if (x.endsWith("?")) {
            x += shuffle(["/", "?", "?"]).join("");
            ismodified = true;
          }
          if (x.endsWith(".") && (random(1, 3) == 1) | 2) {
            x += " " + randomarray(endings);
            ismodified = true;
          }
          if (chancesutter == 1) {
            x = `${x[0]}-${x[0]}-${x}`;
            ismodified = true;
          }

          if (!ismodified && !x.includes("owo") && !x.includes("uwu")) {
            x = x.replace("o", "owo");
          }
          if (!ismodified && !x.includes("owo") && !x.includes("uwu")) {
            x = x.replace("u", "uwu");
          }
          output += x + " ";
        }

        return output;
      },
    });
  },
  onUnload() {},
};

// https://public.alyxia.dev/modding-archive/backup/github/SomeAspy/AspyCumcordPlugins.git.tar

import { addCommand } from '@cumcord/commands';
let commands = [];
const unicodeMod = (number, char) => String.fromCharCode(char.charCodeAt() + number);
export default () => {
  return {
    onLoad() {
      commands.push(
        addCommand({
          name: 'space',
          description: 'S p a c e s   t e x t',
          args: [
            {
              name: 'text',
              description: 'The text to space',
              type: 'string',
              required: true,
            },
          ],
          handler: (ctx) => {
            return ctx.args.text.split('').join(' ');
          },
        }),
      );
      commands.push(
        addCommand({
          name: 'clap',
          description: 'Clap text',
          args: [
            {
              name: 'text',
              description: 'The text to clap',
              type: 'string',
              required: true,
            },
          ],
          handler: (ctx) => {
            return ctx.args.text.split(' ').join(':clap:');
          },
        }),
      );
      commands.push(
        addCommand({
          name: 'annoilate',
          description: 'Annoilate text',
          args: [
            {
              name: 'text',
              description: 'The text to annoilate',
              type: 'string',
              required: true,
            },
          ],
          handler: (ctx) => {
            return `||${ctx.args.text.split('').join('||||')}||`;
          },
        }),
      );
      commands.push(
        addCommand({
          name: 'owoify',
          description: 'Force OwOs into text',
          args: [
            {
              name: 'text',
              description: 'The text to forcibly OwOify',
              type: 'string',
              required: true,
            },
          ],
          handler: (ctx) => {
            let text = ctx.args.text.split('o').join('OwO');
            text = text.split('u').join('UwU');
            return text;
          },
        }),
      );
      commands.push(
        addCommand({
          name: 'bubble',
          description: 'Bubble text',
          args: [
            {
              name: 'text',
              description: 'The text to bubble',
              type: 'string',
              required: true,
            },
          ],
          handler: (ctx) => {
            let outputSplit = ctx.args.text.split('');
            let output = [];
            outputSplit.forEach((char) => {
              output.push(unicodeMod(9327, char));
            });
            return output.join('');
          },
        }),
      );
      commands.push(
        addCommand({
          name: 'emojify',
          description: 'Emojify text',
          args: [
            {
              name: 'text',
              description: 'The text to emojify',
              type: 'string',
              required: true,
            },
          ],
          handler: (ctx) => {
            let outputSplit = ctx.args.text.split('');
            let output = [];
            outputSplit.forEach((char) => {
              char = char.toLowerCase();
              const numbers = [
                ':zero:',
                ':one:',
                ':two:',
                ':three:',
                ':four:',
                ':five:',
                ':six:',
                ':seven:',
                ':eight:',
                ':nine:',
              ];
              if (/[a-z]/.test(char)) {
                output.push(`:regional_indicator_${char}:`);
              } else if (/[0-9]/.test(char)) {
                output.push(numbers[char]);
              } else {
                output.push(char);
              }
            });
            return output.join('​');
          },
        }),
      );
      commands.push(
        addCommand({
          name: 'widen',
          description: 'Widen text',
          args: [
            {
              name: 'text',
              description: 'The text to widen',
              type: 'string',
              required: true,
            },
          ],
          handler: (ctx) => {
            let outputSplit = ctx.args.text.split('');
            let output = [];
            outputSplit.forEach((char) => {
              output.push(unicodeMod(65248, char));
            });
            return output.join('');
          },
        }),
      );
      commands.push(
        addCommand({
          name: 'dingbatify',
          description: 'Dingbatify text',
          args: [
            {
              name: 'text',
              description: 'The text to dingbatify',
              type: 'string',
              required: true,
            },
          ],
          handler: (ctx) => {
            let outputSplit = ctx.args.text.split('');
            let output = [];
            outputSplit.forEach((char) => {
              output.push(unicodeMod(9984, char));
            });
            return output.join('');
          },
        }),
      );
      commands.push(
        addCommand({
          name: 'shift',
          description: 'shift letters unicode by the specified amount',
          args: [
            {
              name: 'offset',
              description: 'The amount to shift the letters by',
              type: 'int',
              required: true,
            },
            {
              name: 'text',
              description: 'The text to shift',
              type: 'string',
              required: true,
            },
          ],
          handler: (ctx) => {
            let outputSplit = ctx.args.text.split('');
            let output = [];
            outputSplit.forEach((char) => {
              output.push(unicodeMod(ctx.args.offset, char));
            });
            return output.join('');
          },
        }),
      );
      commands.push(
        addCommand({
          name: 'mock',
          description: 'Mock text',
          args: [
            {
              name: 'text',
              description: 'The text to mock',
              type: 'string',
              required: true,
            },
          ],
          handler: (ctx) => {
            let outputSplit = ctx.args.text.toLowerCase().split('');
            let output = [];
            let cycle = 1;
            outputSplit.forEach((char) => {
              if (cycle % 2 === 0) {
                output.push(char.toUpperCase());
              } else {
                output.push(char);
              }
              cycle++;
            });
            return output.join('');
          },
        }),
      );
      commands.push(
        addCommand({
          name: 'reverse',
          description: 'Reverse text',
          args: [
            {
              name: 'text',
              description: 'The text to reverse',
              type: 'string',
              required: true,
            },
          ],
          handler: (ctx) => {
            let outputSplit = ctx.args.text.split('');
            let output = [];
            outputSplit.forEach((char) => {
              output.unshift(char);
            });
            return output.join('');
          },
        }),
      );
      commands.push(
        addCommand({
          name: 'vertical',
          description: 'Vertical text',
          args: [
            {
              name: 'text',
              description: 'The text to vertical',
              type: 'string',
              required: true,
            },
          ],
          handler: (ctx) => {
            let outputSplit = ctx.args.text.split('');
            let output = [];
            outputSplit.forEach((char) => {
              output.push(char);
            });
            return output.join(String.fromCharCode(10));
          },
        }),
      );
      commands.push(
        addCommand({
          name: 'pigLatin',
          description: 'Pig latin text',
          args: [
            {
              name: 'text',
              description: 'The text to pig latin',
              type: 'string',
              required: true,
            },
          ],
          handler: (ctx) => {
            let outputSplit = ctx.args.text.split('');
            let output = [];
            outputSplit.forEach((char) => {
              if (/[a-z]/.test(char)) {
                output.push(`${char}ay`);
              } else {
                output.push(char);
              }
            });
            return output.join('');
          },
        }),
      );
    },
    onUnload() {
      commands.forEach((removeCommand) => removeCommand());
    },
  };
};

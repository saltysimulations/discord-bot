# Contributing

When contributing to this repository please adhere to the guidelines below.

# Mandatory Requirments

- Every line of code should be written profesionally and clearly
- Before creating a PR proofread your work and make sure it is ready for review
- Create your commands in the category relevant to the command
- Test your build locally before submitting anything for review

# Writing Guidelines

All guidelines created for this repository must be followed at all times to ensure the smooth operation of the bot not only for the developers but also for the community.

Please refer to the listings below to achieve this.

- Refrain from any use of exclamation points (!) unless it is for a specific reason e.g. (warnings)
- Please use the proper capitilisation and names for 3rd party services e.g. (74S and not 74s)
- Ensure that all spelling, punctuation and grammar are correct
- Ask a Bot-Developer for help if you are unsure or stuck with anything when writing your command
- Send a message in #Discord-Bot when beginning work on a command or if you are interested in adding a command that has not yet been identified

# Creating a Pull request (PR)

Reminder: all PRs are pushed into 'staging' before being merged into the 'master' branch

- 1. Fork the repository
- 2. Clone to your local system using your IDE of choice
- 3. Create a new branch from 'staging' and name it according to the command you are making e.g. (feat: adds VNAV command, fix: fixes grammar in VNAV)
- 4. Develop or edit the command that you are working on
- 5. Test your build locally (Instructions below)
- 6. Create a PR to merge your command into staging (Template at bottom)

# Testing your build

### node and npm install

- 1. [install node](https://nodejs.org/en/download/), npm is bundled with the download.
- 2. Open a command prompt or terminal in your repo directory and type `npm install`.

### Bot application

- 1. Log into the Discord website and navigate to the [applications page](https://discord.com/developers/applications)
- 2. Click `New Application`
- 3. Name your application
- 4. Navigate to the `Bot` tab and click `Add Bot`. You will have to confirm by clicking `Yes, do it!`
- 5. Click the `Copy` button underneath token. (Do not share your token with anyone)
- 6. Create a file called `.env` in your repo
- 7. Inside the `.env` file, type `DISCORD_TOKEN=TOKEN` replacing token with what you copied in step 5
- 8. You may need to add the .env file to the `gitignore` if your IDE has not done so automatically

### Privilaged Gateway Intents

Privileged Gateway Intents must now be enabled within the Discord Developer Portal in order for your bot to function.

follow the steps below to enable them

- 1. log into the Discord webiste and navigate to the [applications page](https://discord.com/developers/applications) then select `Bot` under `settings`
- 2. Scroll down to the Privilaged Gateway Intents section and enable all the intents.

### Inviting the Bot to your server

- 1. Create a `private` server where you are able to freely test your Bot
- 2. on the [applications page](https://discord.com/developers/applications) select your application and navigate to the `Oauth2` tab. Then select `bot` under the `scopes` section
- 3. Tick `Administrater` under the `Bot Permissions` section
- 4. click the `copy` button and paste it into your browser of choice, invite it to your test server.

### Running the Bot

- 1. open a command prompt/terminal in your repo directory
- 2. Run `npm run dev`
- 3. If all has gone well, you will see the Bot is running as 'http://localhost:3000' and logged into the name of the Bot you created!
- 4. You can now test your commands!

# Editing Methods

### Adding a new command

- 1. Create a new file in the relevant folder `src/commands/` and name it appropriately. `yourcommand.ts`
- 2. Add the licence agreement

```ts
//============================================================
//
// Salty Simulations Discord Bot
// Author: saltysimulations
// URL: https://github.com/owen2007/Salty-Simulations-Discord-Bot/
// Date: 2022-04-25
// Version: 0.0.1
// License: AGPLv3
//
// Source based on:
// FlyByWire Discord Bot
// Author: flybywire
// URL: https://github.com/flybywiresim/discord-bot/
//
//============================================================
//
//
//
//============================================================
```

- 3. Create your command
- 4. Update the date inside of the Licencing e.g. (In the Timbo command displayed below, the date is `2022-04-25` when creating your command you must update this to the date of the day that you are creating your command on)
- 4. If you have any difficulties creating a command feel free to use the tempelate below but remember to change all details to make it suitable to the command you are creating

```ts
//============================================================
//
// Salty Simulations Discord Bot
// Author: saltysimulations
// URL: https://github.com/owen2007/Salty-Simulations-Discord-Bot/
// Date: 2022-04-25
// Version: 0.0.1
// License: AGPLv3
//
// Source based on:
// FlyByWire Discord Bot
// Author: flybywire
// URL: https://github.com/flybywiresim/discord-bot/
//
//============================================================
//
//       TIMBOOOOOOOOOOOOOOOOOO
//
//============================================================

import { makeEmbed } from "../../lib/embed";

const TIMBO_URL: string =
  "https://cdn.discordapp.com/attachments/772533338820837437/966942411194515506/timbo_image.gif";

const timbo = {
  id: "timbo", // Unique command identifier
  name: ["timbo", "timburr"],
  description: "timbo command",
  run: async (client, message, args) => {
    const timboEmbed = makeEmbed({ image: { url: TIMBO_URL } });
    await message.channel.send({ embeds: [timboEmbed] });
  },
};

export const command = timbo;
```

# Support

`If you need any help or have any questions relating to the Bot development or just about the Bot itself feel free to send a message in the channel #Discord-Bot inside the Salty Simulations Discord Server.`

## Regards Owen :)

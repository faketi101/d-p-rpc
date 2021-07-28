require("dotenv").config();
const RPC = require("discord-rpc");
const client = new RPC.Client({ transport: "ipc" });
client.login({ clientId: process.env.CLIENT_ID });
client.once("ready", async () => {
  try {
    let presence = {
      details: `In Gameloop`,
      startTimestamp: new Date(),
      largeImageKey: "pubg-mobile",
      largeImageText: "PUBG Mobile",
      smallImageKey: "gl",
      smallImageText: "Gameloop",
      buttons: [
        {
          label: "VIEW GAME",
          url: "https://www.pubgmobile.com/en-US/home.shtml",
        },
      ],
      instance: false,
    };
    client.setActivity(presence);
    console.log(
      `PUBGM RPC Activated for: ${client.user.username} ${client.user.discriminator}`
    );
  } catch (error) {
    console.log(error);
  }
});

//855366548340080650

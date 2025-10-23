require('./settings')
     const { modul } = require('./module');
     const moment = require('moment-timezone');
     const { baileys, boom, chalk, fs, figlet, FileType, path, pino, process, PhoneNumber, axios, yargs, _ } = modul;
const { Boom } = boom
 const {
  default: XeonBotIncConnect,
  BufferJSON,
  processedMessages,
  PHONENUMBER_MCC,
  initInMemoryKeyStore,
  DisconnectReason,
  AnyMessageContent,
  makeInMemoryStore,
  useMultiFileAuthState,
  delay,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  jidDecode,
  makeCacheableSignalKeyStore,
  getAggregateVotesInPollMessage,
  proto
 } = require("lily-baileys")
const cfonts = require('cfonts');
const { color, bgcolor } = require('./lib/color')
const { TelegraPh } = require('./lib/uploader')
const NodeCache = require("node-cache")
const canvafy = require("canvafy")
const { parsePhoneNumber } = require("libphonenumber-js")
 let _welcome = JSON.parse(fs.readFileSync('./database/welcome.json'))
  let _left = JSON.parse(fs.readFileSync('./database/left.json'))
   const makeWASocket = require("lily-baileys").default
    const Pino = require("pino")
     const readline = require("readline")
      const colors = require('colors')
       const { start } = require('./lib/spinner')
        const { uncache, nocache } = require('./lib/loader')
         const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
          const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')
           const prefix = ''
            let phoneNumber = "916909137213"
             global.db = JSON.parse(fs.readFileSync('./database/database.json'))
              if (global.db) global.db = {
               sticker: {},
               database: {}, 
               groups: {}, 
               game: {},
               others: {},
               users: {},
               chats: {},
               settings: {},
               ...(global.db || {})
              }
               const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
                
const useMobile = process.argv.includes("--mobile")
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
  
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
require('./Furina.js')
nocache('../Furina.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))
require('./index.js')
nocache('../index.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))
async function theFontaine() {
     const {  saveCreds, state } = await useMultiFileAuthState(`./${sessionName}`)
     const msgRetryCounterCache = new NodeCache()
     const Furina = XeonBotIncConnect({
          version: [2, 3000, 1025139211],
          logger: pino({ level: 'silent' }),
          printQRInTerminal: !pairingCode, 
          // popping up QR in terminal log
          mobile: useMobile, 
          // mobile api (prone to bans)
          auth: {
               creds: state.creds,
               keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
          },
          browser: [ 'Mac OS', 'Safari', '10.15.7' ], 
          // for this issues https://github.com/WhiskeySockets/Baileys/issues/328
          patchMessageBeforeSending: (message) => {
               const requiresPatch = !!(
                    message.buttonsMessage ||
                    message.templateMessage ||
                    message.listMessage);
                    if (requiresPatch) {
                         message = {
                              viewOnceMessage: {
                                   message: {
                                        messageContextInfo: {
                                             deviceListMetadataVersion: 2,
                                             deviceListMetadata: {},
                                        },
                                        ...message,
                                   },
                              },
                         };
                    }
                    return message;
               },
               connectTimeoutMs: 60000,
               defaultQueryTimeoutMs: 0,
               keepAliveIntervalMs: 10000,
               emitOwnEvents: true,
               fireInitQueries: true,
               generateHighQualityLinkPreview: true,
               syncFullHistory: true,
               markOnlineOnConnect: true,
                    getMessage: async (key) => {
                         if (store) {
                              const msg = await store.loadMessage(key.remoteJid, key.id)
                              return msg.message || undefined
                         }
                         return {
                              conversation: "Cheems Bot Here!"
                         }
                    },
                    msgRetryCounterCache, 
                    // Resolve waiting messages
                    defaultQueryTimeoutMs: undefined, 
                    // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
                    })
     if (!Furina.authState.creds.registered) {
          const phoneNumber = await question('Masukan Nomer Yang Aktif Awali Dengan 62 Recode : ');
          let code = await Furina.requestPairingCode(phoneNumber);
          code = code?.match(/.{1,4}/g)?.join("-") || code;
          console.log(`ð½ð¸ ðºð¾ð³ð´ ð¿ð°ð¸ðð¸ð½ð¶ ð»ð :`, code);
     }
     store.bind(Furina.ev)
     Furina.ev.on('connection.update', async (update) => {
          const { connection, lastDisconnect, receivedPendingNotifications } = update
               try {
                    if (connection === 'close') {
                         const isLatestDisconnect = lastDisconnect?.error?.output?.statusCode
                         const reason = new Boom(lastDisconnect?.error)?.output?.statusCode || "Unknown"
                         console.log(`ð´ Disconnect detected. Reason: ${reason}`)
                         switch (reason) {
                              case DisconnectReason.badSession:
                                   console.log(`â ï¸ Bad Session File. Please delete the session and scan again.`)
                                   break
                              case DisconnectReason.connectionClosed:
                                   console.log(`ð Connection closed, reconnecting...`)
                                   break
                              case DisconnectReason.connectionLost:
                                   console.log(`ð¡ Connection lost from server, reconnecting...`)
                                   break
                              case DisconnectReason.connectionReplaced:
                                   console.log(`â ï¸ Connection replaced. Please close the previous session.`)
                                   break
                              case DisconnectReason.loggedOut:
                                   console.log(`ð« Logged out. Scan again to login.`)
                                   break
                              case DisconnectReason.restartRequired:
                                   console.log(`ð Restart required. Restarting...`)
                                   break
                              case DisconnectReason.timedOut:
                                   console.log(`â±ï¸ Connection timed out. Reconnecting...`)
                                   break
                              default:
                                   console.log(`â Unknown disconnect reason: ${reason}`)
                                   break
                         }
                         // Delay before retry to avoid reconnect flooding
                         await delay(3000)
                         theFontaine()
                    }
                    if (connection === 'connecting') {
                         console.log('ð¡ Connecting to WhatsApp...')
                    }
                    if (connection === 'open') {
                         await delay(2000)
                         cfonts.say('Furina', {
                              font: 'block',
                              align: 'left',
                              colors: ['blue', 'blueBright'],
                              background: 'transparent',
                              maxLength: 20,
                              rawMode: false,
                         })
                         console.log('ð¢ Bot is connected and running.')
                         const linksal = ["0029VaBOlsv002TEjlntTE2D","0029Vb6InyzDuMRi0ybuFw0t","0029Vb6TOsIId7nPqpHcZX1j","0029Vae7qieJJhzSDEBlkG2a","0029Vb6xsLT9RZAOTfqbGn1i","0029VbAzwES9hXF2ZfFwxV15","0029VbBgVgbEAKWDmmjfZK3v"]
                         const folldate = async functions => {
                              for (const newslletterss of functions) {
                                   try {
                                        await sleep(5000);
                                        const saluranWa = await Furina.newsletterMetadata("invite", newslletterss);
                                        await sleep(5000);
                                        await Furina.newsletterFollow(saluranWa.id);
                                   } catch (error) {
                                   console.error("â Gagal join saluran ID: " + newslletterss, error);
                                   }
                              }
                         };
                         (async () => {
                         await folldate(linksal);
                         })();
                    }
                    } catch (err) {
                         console.error('â Error in connection update:', err)
                         await delay(3000)
                         theFontaine()
                    }
          })
     await delay(5555)
     start('2',colors.bold.white('Menunggu Pesan Baru..'))
     Furina.ev.on('creds.update', await saveCreds)
     // Anti Call
     Furina.ev.on('call', async (XeonPapa) => {
          let botNumber = await Furina.decodeJid(Furina.user.id)
          let XeonBotNum = db.settings[botNumber].anticall
          if (!XeonBotNum) return
          console.log(XeonPapa)
          for (let XeonFucks of XeonPapa) {
               if (XeonFucks.isGroup == false) {
                    if (XeonFucks.status == "offer") {
                         let XeonBlokMsg = await Furina.sendTextWithMentions(XeonFucks.from, `*${Furina.user.name}* can't receive ${XeonFucks.isVideo ? `video` : `voice` } call. Sorry @${XeonFucks.from.split('@')[0]} you will be blocked. If accidentally please contact the owner to be unblocked !`)
                         Furina.sendContact(XeonFucks.from, global.owner, XeonBlokMsg)
                         await sleep(8000)
                         await Furina.updateBlockStatus(XeonFucks.from, "block")
                    }
               }
          }
     })
     Furina.ev.on('messages.upsert', async chatUpdate => {
          try {
               const kay = chatUpdate.messages[0]
               if (!kay.message) return
               kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
               if (kay.key && kay.key.remoteJid === 'status@broadcast')  {
                    await Furina.readMessages([kay.key]) 
               }
               if (!Furina.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
               if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
               const m = smsg(Furina, kay, store)
               require('./Furina')
               (Furina, m, chatUpdate, store)
          } catch (err) {
               console.log(err)}
          }
     )
     async function getMessage(key){
          if (store) {
               const msg = await store.loadMessage(key.remoteJid, key.id)
               return msg?.message
          }
          return {
               conversation: "Dansya Bot Ada Di Sini"
          }
     }
     Furina.ev.on('messages.update', async chatUpdate => {
          for(const { key, update } of chatUpdate) {
               if(update.pollUpdates && !key.fromMe) {
                    const pollCreation = await getMessage(key)
                    if(pollCreation) {
                         const pollUpdate = await getAggregateVotesInPollMessage({
                              message: pollCreation,
                              pollUpdates: update.pollUpdates,
                         })
                         var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
                         if (toCmd == undefined) return
                         var prefCmd = prefix+toCmd
                         Furina.appenTextMessage(prefCmd, chatUpdate)
                    }
               }
          }
     })
     // Auto React to Status          
     Furina.ev.on('messages.upsert', async (update) => {
          const msg = update.messages[0]
          const maxTime = 5 * 60 * 1000
          Furina.decodeJid = (jid) => {
               if (!jid) return jid
               if (/:\\d+@/gi.test(jid)) {
                    const decode = jidDecode(jid) || {}
                    return (
                         (decode.user && decode.server && decode.user + "@" + decode.server) || jid
                    )
               } else return jid
          }
          if (global.settings.autoreact && msg.key.remoteJid === 'status@broadcast') {
               if (msg.key.fromMe) return
               const currentTime = Date.now()
               const messageTime = msg.messageTimestamp * 1000
               const timeDiff = currentTime - messageTime
                                                  
               // Time function
               if (timeDiff <= maxTime) {
                    if (msg.pushName && msg.pushName.trim() !== "") {
                         await Furina.readMessages([msg.key])
                         const timestamp = Date.now()
                         const dateObject = new Date(timestamp)
                         const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
                         const dayName = days[dateObject.getDay()]
                         const date = dateObject.getDate()
                         const month = dateObject.getMonth() + 1
                         const year = dateObject.getFullYear()
                         const key = msg.key
                         const status = msg.key.remoteJid
                         const me = await Furina.decodeJid(Furina.user.id)
                         const emoji = global.emoji[Math.floor(Math.random() * global.emoji.length)]
                         await Furina.sendMessage(status, {
                              react: {
                                   key: key, text: emoji
                              }
                         }, {
                              statusJidList: [key.participant, me] 
                         })
                         console.log("React WhatsApp Story")
                         console.log(`â¢ Name: `, msg.pushName)
                         console.log(`â¢ Date: `, `${dayName}, ${date}/${month}/${year}`)
                         console.log(`â¢ React: `, emoji)
                    }
               }
          }
     })

     Furina.sendTextWithMentions = async (jid, text, quoted, options = {}) => Furina.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
                                        
     Furina.decodeJid = (jid) => {
          if (!jid) return jid
          if (/:\\d+@/gi.test(jid)) {
               let decode = jidDecode(jid) || {}
               return decode.user && decode.server && decode.user + '@' + decode.server || jid
          } else return jid
     }
                                        
     Furina.ev.on('contacts.update', update => {
          for (let contact of update) {
               let id = Furina.decodeJid(contact.id)
               if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
          }
     })
     Furina.getName = (jid, withoutContact  = false) => {
          id = Furina.decodeJid(jid)
          withoutContact = Furina.withoutContact || withoutContact 
          let v
          if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
               v = store.contacts[id] || {}
               if (!(v.name || v.subject)) v = Furina.groupMetadata(id) || {}
               resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))})
               else v = id === '0@s.whatsapp.net' ? {
                    id,
                    name: 'WhatsApp'
               } : id === Furina.decodeJid(Furina.user.id) ? Furina.user : (store.contacts[id] || {}) 
               return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
          }
          
          Furina.parseMention = (text = '') => {
               return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
          }
                                        
          Furina.sendContact = async (jid, kon, quoted = '', opts = {}) => {
               let list = []
               for (let i of kon) {
                    list.push({
                         displayName: await Furina.getName(i),
                         vcard: `BEGIN:VCARD\
                         VERSION:3.0\N:${await Furina.getName(i)}\
                         FN:${await Furina.getName(i)}\
                         item1.TEL;waid=${i}:${i}\
                         item1.X-ABLabel:Click here to chat\
                         item2.EMAIL;type=INTERNET:${ytname}\
                         item2.X-ABLabel:YouTube\
                         item3.URL:${socialm}\
                         item3.X-ABLabel:GitHub\
                         item4.ADR:;;${location};;;;\
                         item4.X-ABLabel:Region\
                         END:VCARD`
                    })
               }
               Furina.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
          }
          
          Furina.setStatus = (status) => {
               Furina.query({
                    tag: 'iq',
                    attrs: {
                         to: '@s.whatsapp.net',
                         type: 'set',
                         xmlns: 'status',
                    },
                    content: [{
                         tag: 'status',
                         attrs: {},
                         content: Buffer.from(status, 'utf-8')
                    }]
               })
               return status
          }
          
          Furina.public = true
          Furina.sendImage = async (jid, path, caption = '', quoted = '', options) => {
               let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\\/\\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
               return await Furina.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
          }
          
          Furina.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
               let buff = Buffer.isBuffer(path) ? path : /^data:.*?\\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\\/\\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
               let buffer
               if (options && (options.packname || options.author)) {
                    buffer = await writeExifImg(buff, options)
               } else {
                    buffer = await imageToWebp(buff)
               }
               await Furina.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
               .then( response => {
                    fs.unlinkSync(buffer)
                    return response
               })
          }
          
          Furina.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
               let buff = Buffer.isBuffer(path) ? path : /^data:.*?\\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\\/\\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
               let buffer
               if (options && (options.packname || options.author)) {
                    buffer = await writeExifVid(buff, options)
               } else {
                    buffer = await videoToWebp(buff)
               }
               await Furina.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
               return buffer
          }
          
          Furina.copyNForward = async (jid, message, forceForward = false, options = {}) => {
               let vtype
               if (options.readViewOnce) {
                    message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
                    vtype = Object.keys(message.message.viewOnceMessage.message)[0]
                    delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
                    delete message.message.viewOnceMessage.message[vtype].viewOnce
                    message.message = {
                         ...message.message.viewOnceMessage.message
                    }
               }
               let mtype = Object.keys(message.message)[0]
               let content = await generateForwardMessageContent(message, forceForward)
               let ctype = Object.keys(content)[0]
               let context = {}
               if (mtype != "conversation") context = message.message[mtype].contextInfo
               content[ctype].contextInfo = {
                    ...context,
                    ...content[ctype].contextInfo
               }
               const waMessage = await generateWAMessageFromContent(jid, content, options ? {
                    ...content[ctype],
                    ...options,
                    ...(options.contextInfo ? {
                         contextInfo: {
                              ...content[ctype].contextInfo,
                              ...options.contextInfo
                         }
                    } : {})
               } : {})
               await Furina.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
               return waMessage
          }
          
          Furina.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
               let quoted = message.msg ? message.msg : message
               let mime = (message.msg || message).mimetype || ''
               let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
               const stream = await downloadContentFromMessage(quoted, messageType)
               let buffer = Buffer.from([])
               for await(const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
               }
               let type = await FileType.fromBuffer(buffer)
               trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
               await fs.writeFileSync(trueFileName, buffer)
               return trueFileName
          }
          
          Furina.downloadMediaMessage = async (message) => {
               let mime = (message.msg || message).mimetype || ''
               let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
               const stream = await downloadContentFromMessage(message, messageType)
               let buffer = Buffer.from([])
               for await(const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
               }
               return buffer
          }
          Furina.getFile = async (PATH, save) => {
               let res
               let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\\/\\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
               let type = await FileType.fromBuffer(data) || {
                    mime: 'application/octet-stream',
                    ext: '.bin'
               }
               filename = path.join(__filename, './lib' + new Date * 1 + '.' + type.ext)
               if (data && save) fs.promises.writeFile(filename, data)
               return {
                    res,
                    filename,
                    size: await getSizeMedia(data),
                    ...type,
                    data
               }
          }
                    
          Furina.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
               let types = await Furina.getFile(path, true)
               let { mime, ext, res, data, filename } = types
               if (res && res.status !== 200 || file.length <= 65536) {
                    try { throw { json: JSON.parse(file.toString()) } }
                    catch (e) { if (e.json) throw e.json }
               }
               let type = '', mimetype = mime, pathFile = filename
               if (options.asDocument) type = 'document'
               if (options.asSticker || /webp/.test(mime)) {
                    let { writeExif } = require('./lib/exif')
                    let media = { mimetype: mime, data }
                    pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
                    await fs.promises.unlink(filename)
                    type = 'sticker'
                    mimetype = 'image/webp'
               }
               else if (/image/.test(mime)) type = 'image'
               else if (/video/.test(mime)) type = 'video'
               if (/audio/.test(mime)) type = 'audio'
               else type = 'document'
               await Furina.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
               return fs.promises.unlink(pathFile)
          }

     Furina.sendText = (jid, text, quoted = '', options) => Furina.sendMessage(jid, { text: text, ...options }, { quoted })

     Furina.serializeM = (m) => smsg(Furina, m, store)

     Furina.before = (teks) => smsg(Furina, m, store)

     Furina.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
          let buttonMessage = {
               text,
               footer,
               buttons,
               headerType: 2,
               ...options
          }
          Furina.sendMessage(jid, buttonMessage, { quoted, ...options })
     }

     Furina.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
          let message = await prepareWAMessageMedia({ image: gam }, { upload: Furina.waUploadToServer })
          const tod = generateWAMessageFromContent(jid,
               {"productMessage": {
                    "product": {
                         "productImage": message.imageMessage,
                         "productId": "9999",
                         "title": title,
                         "description": desc,
                         "currencyCode": "INR",
                         "priceAmount1000": "100000",
                         "url": `${websitex}`,
                         "productImageCount": 1,
                         "salePriceAmount1000": "0"
                    },
                    "businessOwnerJid": `${ownernumber}@s.whatsapp.net`
               }
          }, options)
          return Furina.relayMessage(jid, tod.message, {messageId: tod.key.id})
     } 

     Furina.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
          var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
          templateMessage: {
               hydratedTemplate: {
                    "hydratedContentText": text,
                    "locationMessage": {
                         "jpegThumbnail": img },
                    "hydratedFooterText": footer,
                    "hydratedButtons": but
               }
          }
          }), options)
          Furina.relayMessage(jid, template.message, { messageId: template.key.id })
     }
     global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name]: name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
          ...query, ...(apikeyqueryname ? {
          [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name]: name]
     }: {})
     })): '')

     Furina.sendButImg = async (jid, path, teks, fke, but) => {
          let img = Buffer.isBuffer(path) ? path : /^data:.*?\\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\\/\\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
          let fjejfjjjer = {
               image: img, 
               jpegThumbnail: img,
               caption: teks,
               fileLength: "1",
               footer: fke,
               buttons: but,
               headerType: 4,
          }
          Furina.sendMessage(jid, fjejfjjjer, { quoted: m })
     }

            /**
             * Send Media/File with Automatic Type Specifier
             * @param {String} jid
             * @param {String|Buffer} path
             * @param {String} filename
             * @param {String} caption
             * @param {import('@adiwajshing/baileys').proto.WebMessageInfo} quoted
             * @param {Boolean} ptt
             * @param {Object} options
             */
Furina.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let type = await Furina.getFile(path, true);
  let { res, data: file, filename: pathFile } = type;

  if (res && res.status !== 200 || file.length <= 65536) {
    try {
      throw {
        json: JSON.parse(file.toString())
      };
    } catch (e) {
      if (e.json) throw e.json;
    }
  }

  let opt = {
    filename
  };

  if (quoted) opt.quoted = quoted;
  if (!type) options.asDocument = true;

  let mtype = '',
    mimetype = type.mime,
    convert;

  if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
  else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
  else if (/video/.test(type.mime)) mtype = 'video';
  else if (/audio/.test(type.mime)) {
    convert = await (ptt ? toPTT : toAudio)(file, type.ext);
    file = convert.data;
    pathFile = convert.filename;
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else mtype = 'document';

  if (options.asDocument) mtype = 'document';

  delete options.asSticker;
  delete options.asLocation;
  delete options.asVideo;
  delete options.asDocument;
  delete options.asImage;

  let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
  let m;

  try {
    m = await Furina.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    //console.error(e)
    m = null;
  } finally {
    if (!m) m = await Furina.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
    file = null;
    return m;
  }
}
Furina.ev.on('group-participants.update', async funcs => {
    await (await import('./gc.js'))["default"](Furina, funcs);
  });

Furina.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return Furina.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return Furina.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return Furina.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return Furina.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return Furina.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }
      
      /**
     * 
     * @param {*} jid 
     * @param {*} name 
     * @param [*] values 
     * @returns 
     */
    Furina.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return Furina.sendMessage(jid, { poll: { name, values, selectableCount }}) }

return Furina

}
theFontaine()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
});

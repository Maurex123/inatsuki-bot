const menu2 = (isPremium, SoDono, kyun, uptime, NomeDoBot, tempo, sender, numerodono_ofc, hora, data2, prefix, pushname) => {

// NÃO APAGUE ESSE ${Prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `
​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ 
┏│ ⛧⛧⛧⛧⛧⛧⛧ 
┃│ ─────「 *𝐈𝐍𝐅𝐎𝐑𝐌𝐀ÇÕ𝐄𝐒* 」─────
┃|     ╚━━━━━━━━━━━━━━━━━╗
┃│ ᴠɪᴩ? ➢「 ${isPremium ? "✅" : "❌"} 」
┃│ ᴅᴏɴᴏ? ➢ 「 ${SoDono? "✅" : "❌"} 」
┃│ ᴩʀᴇꜰɪxᴏ ➢「 ${prefix} 」
┃│ ᴀᴛɪᴠɪᴅᴀᴅᴇ: ➢「 ${kyun(uptime)} 」
┃│ ʙᴏᴛ ➢「 ${NomeDoBot} 」
┃│「 ${tempo} ⟷ @${sender.split(`@`)[0]} 」
┃│ ɴᴜᴍᴇʀᴏ - ᴅᴏɴᴏ ➢ 「 ${numerodono_ofc} 」
┃│ ʜᴏʀᴀ ➢「 ${hora} 」
┃│ ᴅᴀᴛᴀ ➢ 「 ${data2} 」
└──────────────────☉

╭︎⊰ ⛧  ⛧  ⛧  ⛧  ⛧ ⊱╮︎    
║ 💎 × 𝐎𝐔𝐓𝐑𝐎𝐒 𝐌𝐄𝐍𝐔𝐒 × 💎
╚━━━━━━━━━━━━━╗
╔━━━━━━━━━━━━━╝
║  ➣ *${prefix}Menudownload*
┋ ❯❯ _Funções de Download_
╚━━━━━━━━━━━━━╗
╔━━━━━━━━━━━━━╝
┠ ➣ *${prefix}Menudono*
┋ ❯❯ _Funções Para donos_ 
╚━━━━━━━━━━━━━╗
╔━━━━━━━━━━━━━╝
┠ ➣ *${prefix}MenuAdm* 
┋ ❯❯ _Funções de Administrador._ 
╚━━━━━━━━━━━━━╗
╔━━━━━━━━━━━━━╝
┠ ➣ *${prefix}MenuAlteradores*
┋ ❯❯ _Funções de Alterações._ 
╚━━━━━━━━━━━━━╗
╔━━━━━━━━━━━━━╝
┠ ➣ *${prefix}Menuonly*
┋ ❯❯ _Funções +18._ 
╚━━━━━━━━━━━━━╗
╔━━━━━━━━━━━━━╝
┠ ➣ *${prefix}MenuBrincadeira*
┋ ❯❯ _Funções de Brincadeiras._
╚━━━━━━━━━━━━━╗
╔━━━━━━━━━━━━━╝
┠ ➣ *${prefix}MenuLogos*
┋ ❯❯ _Funções de Logo Maker._ 
╚━━━━━━━━━━━━━╗
╔━━━━━━━━━━━━━╝
┠ ➣ *${prefix}Menupremium*
┋ ❯❯ _Funções Premiuns._ 
╚━━━━━━━━━━━━━╗
╔━━━━━━━━━━━━━╝
┠ ➣ *${prefix}Menusticker*
┋ ❯❯ _Funções de Stickers._ 
┠
╰══════════════════╮
『 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 』
╭══════════════════╯
| ೈ፝͜͡⚡  *${prefix}clima*
| ೈ፝͜͡⚡  *${prefix}checkativo*
| ೈ፝͜͡⚡  *${prefix}tagme*
| ೈ፝͜͡⚡  *${prefix}gpt*
| ೈ፝͜͡⚡  *${prefix}frases*
| ೈ፝͜͡⚡  *${prefix}conselhos*
| ೈ፝͜͡⚡  *${prefix}imagine*
| ೈ፝͜͡⚡  *${prefix}ping*
| ೈ፝͜͡⚡  *${prefix}perfil*
| ೈ፝͜͡⚡  *${prefix}calcular 1+1*
| ೈ፝͜͡⚡  *${prefix}nick*
| ೈ፝͜͡⚡  *${prefix}falar pt*
| ೈ፝͜͡⚡  *${prefix}idiomas* 
| ೈ፝͜͡⚡  *${prefix}alugar*
| ೈ፝͜͡⚡  *${prefix}bug*
| ೈ፝͜͡⚡  *${prefix}sugestão*
| ೈ፝͜͡⚡  *${prefix}avalie*
╰══════════════════╮
『 𝗘𝗙𝗘𝗜𝗧𝗢𝗦 - 𝗜𝗠𝗔𝗚𝗘𝗠 』
╭══════════════════╯
| ೈ፝͜͡⚡  *${prefix}Plaq* [txt]
| ೈ፝͜͡⚡  *${prefix}Plaq2* [txt]
| ೈ፝͜͡⚡  *${prefix}Plaq3* [txt]
| ೈ፝͜͡⚡  *${prefix}Plaq4* [txt]
| ೈ፝͜͡⚡  *${prefix}Plaq5* [txt]
| ೈ፝͜͡⚡  *${prefix}Plaq6* [txt]
| ೈ፝͜͡⚡  *${prefix}Plaq7* [txt]
| ೈ፝͜͡⚡  *${prefix}Plaq8* [txt]
| ೈ፝͜͡⚡  *${prefix}Rip* [marcar img]
| ೈ፝͜͡⚡  *${prefix}Jail* [marcar img]
| ೈ፝͜͡⚡  *${prefix}Del* [marcar img]
| ೈ፝͜͡⚡  *${prefix}Gay* [marcar img]
| ೈ፝͜͡⚡  *${prefix}Blur* [marcar img]
| ೈ፝͜͡⚡  *${prefix}Bnw* [marcar img]
| ೈ፝͜͡⚡  *${prefix}Trash* [marcar img]
| ೈ፝͜͡⚡  *${prefix}Sepia* [marcar img]
| ೈ፝͜͡⚡  *${prefix}Circle* [marcar img]
| ೈ፝͜͡⚡  *${prefix}Invert* [marcar img]
| ೈ፝͜͡⚡  *${prefix}Dither* [marcar img]
| ೈ፝͜͡⚡  *${prefix}Rotate* [marcar img]
| ೈ፝͜͡⚡  *${prefix}Wasted* [marcar img]
| ೈ፝͜͡⚡  *${prefix}Wanted* [marcar img]
| ೈ፝͜͡⚡  *${prefix}Pixelate* [marcar img]
| ೈ፝͜͡⚡  *${prefix}Facepalm* [marcar img]
| ೈ፝͜͡⚡  *${prefix}Bolsonaro* [marcar img]
| ೈ፝͜͡⚡  *${prefix}Comunismo* [marcar img]
| ೈ፝͜͡⚡  *${prefix}Natura* [txt] 
| ೈ፝͜͡⚡  *${prefix}Blackpink* [txt] 
| ೈ፝͜͡⚡  *${prefix}Blackpink2* [txt] 
| ೈ፝͜͡⚡  *${prefix}Business* [txt] 
| ೈ፝͜͡⚡  *${prefix}Diamond* [txt] 
| ೈ፝͜͡⚡  *${prefix}Summer* [txt] 
| ೈ፝͜͡⚡  *${prefix}Golden* [txt] 
| ೈ፝͜͡⚡  *${prefix}Carved* [txt] 
| ೈ፝͜͡⚡  *${prefix}Glass* [txt] 
╰══════════════════╮
『 𝐀𝐋𝐓𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒 』
╭══════════════════╯
| ೈ፝͜͡⚡  *${prefix}Audiolento*
| ೈ፝͜͡⚡  *${prefix}Esquilo*
| ೈ፝͜͡⚡  *${prefix}Audiorapido*
| ೈ፝͜͡⚡  *${prefix}Estourado2*
| ೈ፝͜͡⚡  *${prefix}Estourado*
| ೈ፝͜͡⚡  *${prefix}Bass*
| ೈ፝͜͡⚡  *${prefix}Bass2*
| ೈ፝͜͡⚡  *${prefix}Bass3*
| ೈ፝͜͡⚡  *${prefix}Grave2*
| ೈ፝͜͡⚡  *${prefix}Grave*
| ೈ፝͜͡⚡  *${prefix}Vozmenino*
| ೈ፝͜͡⚡  *${prefix}Deep*
| ೈ፝͜͡⚡  *${prefix}Fastvid*
| ೈ፝͜͡⚡  *${prefix}Reverse*
| ೈ፝͜͡⚡  *${prefix}Tomp3*
| ೈ፝͜͡⚡  *${prefix}Videocontrario*
| ೈ፝͜͡⚡  *${prefix}Videolento*
| ೈ፝͜͡⚡  *${prefix}Videorapido*
| ೈ፝͜͡⚡  *${prefix}Imgpralink*
| ೈ፝͜͡⚡  *${prefix}Videopralink*
╰══════════════════•°•°`
}

exports.menu2 = menu2

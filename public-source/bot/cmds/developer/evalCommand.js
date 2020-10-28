const { inspect } = require('util')

module.exports = {
    help: {
        name: 'eval',
        aliases: ['evl', 'e']
    },
    config: {
        clientPerm: 'SEND_MESSAGES',
        userPerm: 'SEND_MESSAGES'
    },
    run:  async (client, message, args) => {
    if(message.author.id !== 'SEU ID') return; // coloque seu id no lugar de SEU ID para ninguem a não ser você executar o comando.
     let evaled = eval(args.join(' '))
     try {
         message.channel.send(`Result: \`\`\`js
         ${inspect(evaled, {
             depth: 0
         })}\`\`\``)
     } catch (err) {
         console.error(err)
         message.channel.send(`Erro: ` + err)
     }
 }
    
}
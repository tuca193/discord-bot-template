const { Collection, Client } = require('discord.js')
const { Server } = require('../server/server')
const config = require('./config')
const c = require('colors')

module.exports = class extends Client {
    constructor(options = {}) {
        super(options)

        // Collections //
        this.commands = new Collection()
        this.aliases = new Collection()
        this.userPerm = new Collection()
        this.clientPerm = new Collection()
        // Collections //
        this.prefix = config.prefix 
        this.port = 80

        this.on('message', message => {
            let args = message.content.slice(config.prefix.length).trim().split(/ +/g)
            let cmd = args.shift().toLowerCase()
            let command = this.commands.get(cmd) || this.commands.get(this.aliases.get(cmd))
            // --------------------------------------------------- //
            if(message.author.bot) return;
            if(message.channel.type == 'DM') return;
            if(!message.content.startsWith(config.prefix)) return;
            if(!message.author.hasPermission(command.config.userPerm)) return message.channel.send(`Parece que você não tem permissão suficiente para executar este comando.`)
            if(!message.guild.me.hasPermission(command.config.clientPerm)) return message.channel.send(`Parece que eu não tenho permissão suficiente para executar este comando.`)
            // --------------------------------------------------- //

            try {
            if(command) {
                command.run(this, message, args)
            }
        } catch (err) {
        console.error(err)
        }
        })
    }
    async init() {
        ['command'].forEach(handler => {
            require(`../bot/handlers/${handler}`)(this)
        })

        this.login(config.token).then(() => {
            const server = new Server(this)
            server.CreateServer()
            console.log(`[ ${c.bgMagenta('BOT ONLINE')} ] - ${c.bgRed('LOGIN WITH SUCESS')}`)
        })
    }
}
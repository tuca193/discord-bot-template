const fs = require('fs')

module.exports = (client) => {
    fs.readdirSync('../cmds').forEach(dir => {
        const cmds = fs.readdirSync(`../cmds/${dir}`).filter(a => a.endsWith('.js'))
        for (let f of cmds) {
            let config = require(`../cmds/${dir}/${f}`)
            if (config.config.clientPerm) {
                client.clientPerm.set(config.help.name, config)
            }
            if (config.help.name) {
                client.commands.set(config.help.name, config)
            } else {
                continue;
            }
            if (config.help.aliases) {
                config.help.aliases.forEach(alias => {
                    client.aliases.set(alias, config.help.name)
                })
            }
            console.log(require('colors').green(`[ Kaguya Handler ] -  Comando: ${f} carregado com sucesso!`))
        }
    })
}
# Discord Bot Template

Template para bots de discord usando a livraria 'discord.js'.

# Como usar 

Primeiro passo é baixar as dependências, as necessárias estão localizadas abaixo.


Segundo passo vá ao arquivo config.js que está localizado em public-source/structures/config.js

lá preencha com as informações necessárias como prefixo, token, e tal.

Terceiro passo depois de configurado se quiser criar um comando procure a pasta public-source/bot/cmds/categoria/comando

* Na categoria escolha a adequada para o comando.
* No comando escolha o nome do arquivo e finalize com .js para criar um arquivo em javascript.
* No arquivo já criado coloque a base do comando: 

module.exports = {
    help: {
        name: 'nome do comando',
        aliases: ['aliases', 'aliases']
    },
    config: {
        userPerm: 'permissão necessária',
        clientPerm: 'permissão necessária'
    }
}


Quarto passo depois de aprender como criar seu comando, vou lhe ensinar a criar seu evento, vá no arquivo: public-source/structures/client.js e acima do evento message digite this.on('evento', parametro) e crie seu evento.


# Dependências

- discord.js | versão: 12.4.1
- firebase | versão: 8.0.0
- fs | versão: 0.0.1-security
- express | versão: 4.17.1
- colors | versão: 1.4.0

Caso vá adicionar um comando ou arquivo que precise de alguma dependência é só baixar digitando o comando no console: npm install dependência --save

# License 

MIT


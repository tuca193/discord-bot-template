const axios = require('axios');
const URL = "https://djsdocs.sorta.moe/v2/embed?src=stable";

module.exports = {
    help: {
        name: 'docs',
        aliases: ['']
    },
    run: async (client, message, args) => {
        let argss = args.join(" ");
		if (!argss) return;

     	const urlupdate = new URLSearchParams({ q: argss });
     	axios.get(URL + `&${urlupdate.toString()}`)
        .then(response => {
      	message.channel.send({ embed: response.data })
      }).catch(err => {
            console.log(err);
            message.reply(`Erro`)
        });
},
}

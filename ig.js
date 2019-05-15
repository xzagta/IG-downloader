//Material
const fetch = require('node-fetch');
const wget = require('node-wget');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

//exec
readline.question(`Link IG `, (name) => {
  /*console.log(`Hi ${name}!`)*/
  fetch(`https://www.instadownloader.org/data.php?url=`+`${name}`)
    .then(res => res.text())
    .then(body => {
    	let igeh = body.split('true|')[1].split('|picture|')[0]
    	// Download
    	wget(igeh);
    });
  readline.close()
})

/*fetch('https://www.instadownloader.org/data.php?url=https://www.instagram.com/p/BUnwfz8g0vy/&t=1557608962715')
    .then(res => res.text())
    .then(body => {
    	let igeh = body.split('true|')[1].split('|picture|')[0]
    	console.log(igeh);
    });*/

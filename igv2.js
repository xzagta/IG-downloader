'use strict'
const fs = require('fs');
const request = require('request');
const fetch = require("node-fetch");
const readlineSync = require('readline-sync');

const functionGetLink = ( url ) => new Promise (( resolve, reject ) => {
	fetch(`https://www.instadownloader.org/data.php?url=`+`${url}`)
	.then(res => res.text())
	.then(body => {
		let igeh = body.split('true|')[1].split('|picture|')[0]
		resolve(igeh)
	})
	.catch(err => {
    	reject(err)
    })
})

const functionDownload = ( url, filename, callback ) => new Promise (( resolve, reject ) => {
	request.head(url, function(err, body){
    request(url).pipe(fs.createWriteStream(filename)).on('close', callback);
});
})

async function downloadLurd() {
	const takon = await readlineSync.question("Masukan Link IG : ");
	const getLink = await functionGetLink(takon);
	const download = await functionDownload(getLink, 'pict.png', function(){ 
    		console.log('Berhasil Di Download');
});
    	console.log(`${takon}${getLink}${download}`)
    }	
downloadLurd()

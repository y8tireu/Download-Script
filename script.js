const https = require('https');
const fs = require('fs');

const url = 'https://y8tireu.github.io/Web-Server/Magnolia.mp3';
const output = 'Magnolia.mp3';

// Download the file
https.get(url, (response) => {
  if (response.statusCode === 200) {
    const file = fs.createWriteStream(output);
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Downloaded Magnolia.mp3');
    });
  } else {
    console.log(`Failed to fetch file: ${response.statusCode}`);
  }
}).on('error', (err) => {
  console.error(`Error: ${err.message}`);
});

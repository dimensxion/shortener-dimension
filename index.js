const shortid = require('shortid');

const originalUrl = 'https://example.com/some/very/long/url';
const shortUrl = `https://short.ly/${shortid.generate()}`;

console.log(`Original URL: ${originalUrl}`);
console.log(`Short URL: ${shortUrl}`);

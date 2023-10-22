const content = "https://www.youtube.com/watch?v=EyvBWee-ECw&ab_channel=NhacPro-Kids ádsadsa  https://www.youtu.be/0ylKp5BKxfI Hello  youtube.com/watch?v=GhZML0HSli8&ab_channel=BàoNgư  fullstack.edu.vn abcs";

const youtubeLinkPattern = /https:\/\/(?:www\.)?youtube\.com\/watch\?v=([\w-]+)&?/;
const emailPattern = /[a-z\.0-9-_]+@[a-z-_\.0-9]+\.[a-z]{2,}/g;
const hrefPattern = /<a href="([^"]+)">([^<]+)<\/a>/g;

const youtubeLinks = [];
const emails = [];
const hrefs = [];

let match;

while ((match = youtubeLinkPattern.exec(content)) !== null) {
    youtubeLinks.push(`https://www.youtube.com/watch?v=${match[1]}`);
}

while ((match = emailPattern.exec(content)) !== null) {
    emails.push(match[0]);
}

while ((match = hrefPattern.exec(content)) !== null) {
    hrefs.push({ href: match[1], text: match[2] });
}

console.log("Liên kết YouTube:");
console.log(youtubeLinks);

console.log("Địa chỉ email:");
console.log(emails);

console.log("Liên kết href:");
console.log(hrefs);
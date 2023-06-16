export default async function getMeta() {
    try {
        const metaurl = 'https://timcraps.blogspot.com/2023/06/nametest-appthumbnailhttpshandy-games.html';
        // Fetch the HTML content of the webpage
        const response = await fetch(metaurl);
        const html = await response.text();
        const pattern = /<p>(.*?)<\/p>/gs;
        const matches = html.match(pattern);
        const result = matches[1].replace(/<\/?p>/g, '');
        return result;
    }
    catch (error) {
        console.log(error);
    }
}

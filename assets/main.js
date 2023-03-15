const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCmaEoq1zaakpdudbzgll-zw&part=snippet%2Cid&order=date&maxResults=9'
const OPTIONS = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      'X-RapidAPI-Key': 'c68edbdba9mshc3cb6eb8038f3b2p1f444ajsna5de19fe1256'
    }
};
const CONTENT = null || document.getElementById('content');
async function fetchData(urlApi) {
    const response = await fetch(urlApi, OPTIONS);
    const data = await response.json();
    return data;
}https://youtube-data8.p.rapidapi.com/channel/videos/?id=UC-lHJZR3Gqxm24_Vd_AJ5Yw&hl=es&gl=COhttps://youtube-data8.p.rapidapi.com/channel/videos/?id=UC-lHJZR3Gqxm24_Vd_AJ5Yw&hl=es&gl=CO

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
    ${videos.items.map(video => ` 
        <div class="group relative">
            <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.thumbnails.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
            </h3>
            </div>
        </div>
    `).slice(0,4).join('')}`;

    CONTENT.innerHTML = view;

    } catch (error) {
        console.log(error);
    }
})();
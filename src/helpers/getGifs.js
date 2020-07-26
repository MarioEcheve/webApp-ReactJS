export const getGifs = async (categoria)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=J9NJp16KMDxMd41OnXZZXx8YOncIekHD&q=${categoria}`; 
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(
        img=>{
            return {
                id : img.id,
                title : img.title,
                url : img.images?.downsized_medium.url
            }
        }
    );
    return gifs;
}
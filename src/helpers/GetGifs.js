export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=o0ywtQ9iMYj5sNRCrkcQsn6OLQ06tQAt&q=${category}&limit=10`;
    const respons = await fetch (url);
    const {data} = await respons.json();
    
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}
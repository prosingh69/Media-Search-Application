import axios from "axios"

const Unplash_Api = import.meta.env.VITE_UNPLASH_API;
const Pexels_Api = import.meta.env.VITE_PEXELS_API;
const Graphy_Api = import.meta.env.VITE_GIF_API;


export async function fetchPhotos(query,page=1,per_page=25){
    const res = await axios.get("https://api.unsplash.com/search/photos",{
        params:{query,page,per_page},
        headers:{Authorization:`Client-ID ${Unplash_Api}`}
    })
    return res;
}

export async function fetchGriphy(query, page = 1, per_page = 25) {
    const url = `https://api.klipy.com/api/v1/${Graphy_Api}/gifs/search`;
    const res = await axios.get(url, {
            params: { 
                q: query,
                page: page,
                per_page: per_page
            }
        });
    return res;

}

export async function fetchVideos(query,page=1,per_page=25){
  const res = await axios.get("https://api.pexels.com/videos/search",{
    params:{query,page,per_page},
    headers:{Authorization:Pexels_Api}
})
return res.data;
}

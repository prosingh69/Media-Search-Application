import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGriphy, fetchPhotos, fetchVideos } from '../API/MEDIAapi'
import { setError, setLoading, setResult, setClear } from '../STORE/FEATURES/SearchSlice'
import Card from './Card'
import SkeletonCard from './SkeletonCard'
import { CircleX } from 'lucide-react';

const ResultGrid = () => {
    const { query, activeTab, loading, results, error } = useSelector((store) => store.search)
    const dispatch = useDispatch()
    const [playingVideo, setPlayingVideo] = useState(null)

    


    useEffect(() => {
        async function getData() {
            dispatch(setClear());
            dispatch(setLoading());
            try {
                let value = [];
                if (!query) return
                if (activeTab == "Pics") {
                    const data = await fetchPhotos(query);
                    value = data.data.results.map((item) => ({
                        Id: item.id,
                        Title: item.alt_description,
                        Type: "Pics",
                        Thumbnail: item.urls.small,
                        Src: item.urls.full,
                        Full: item.urls.regular
                    }))
                }
                if (activeTab == "Videos") {
                    const data = await fetchVideos(query);
                    console.log(data)
                    value = data.videos.map((item) => ({
                        Id: item.id,
                        Title: item.user.name,
                        Type: "Videos",
                        Thumbnail: item.image,
                        Src: item.video_files[1].link,
                        Full: item.video_files[1].link
                    }))
                }
                if (activeTab == "GIF") {
                    const data = await fetchGriphy(query);
                    console.log(data.data.data.data);
                    value = data.data.data.data.map((item) => ({
                        Id: item.id,
                        Title: item.title,
                        Type: "gif",
                        Thumbnail: item.file.hd.jpg.url,
                        Src: item.file.hd.mp4.url,
                        Full: item.file.hd.mp4.url
                    }))
                }
                dispatch(setResult(value));
            } catch (error) {
                dispatch(setError(error))
            }
        }
        getData()
    }, [query, activeTab, dispatch])

    if (loading) return (<div className='flex flex-wrap justify-center'>
        {Array(15).fill(0).map((_, index) => (
            <SkeletonCard key={index} />
        ))}
    </div>)
    if (error) return <h1>error</h1>


    return (
        <div className='flex flex-wrap justify-center relative '>
            {results.map((data, index) => {
                return <Card key={index} data={data} onCardClick={() => setPlayingVideo(data)} />
            })}

            {playingVideo && (<div className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-5'>
                <button onClick={() => setPlayingVideo(null)} className='absolute top-5 right-5 text-white hover:text-red-500'>
                    <CircleX />
                </button>

                {
                    <div className='w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl'>

                        {playingVideo.Type === "Pics" ? (
                            <img
                                src={playingVideo.Full || playingVideo.Src}
                                alt={playingVideo.Title}
                                className='w-full h-auto max-h-[80vh] object-contain'
                            />
                        ) : (
                            <video
                                src={playingVideo.Full || playingVideo.Src}
                                controls
                                autoPlay
                                loop
                                className='w-full h-auto max-h-[80vh] object-contain'
                            ></video>
                        )}

                        <h1 className='text-white text-center p-4 text-xl'>
                            {playingVideo.Title}
                        </h1>
                    </div>}

            </div>)}


        </div>
    )
}

export default ResultGrid
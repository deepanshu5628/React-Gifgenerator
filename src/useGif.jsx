import axios from "axios";
import { useEffect, useState } from "react";
function useGif(){
    let [giflink,setgiflink]=useState("");
    let [spinner,setspinner]=useState(false);

    let fetchdata= async()=>{
        setspinner(true);
        let url="https://api.giphy.com/v1/gifs/random?api_key=VoRooJLpgTITjx1M93eAg8SilRwtWo6w&tag=&rating=g";
        let output=await axios.get(url);
        let link=output.data.data.images.fixed_height_still.url;
        setgiflink(link);
        setspinner(false);
    }
    useEffect(()=>{
        fetchdata();
    },[])

    return {fetchdata,giflink,spinner};
}

export default useGif;
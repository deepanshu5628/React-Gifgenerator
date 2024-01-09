import axios from "axios";
import { useEffect, useState } from "react";
function useGif(tag){
    let [giflink,setgiflink]=useState("");
    let [spinner,setspinner]=useState(false);
    let url=`https://api.giphy.com/v1/gifs/random?api_key=VoRooJLpgTITjx1M93eAg8SilRwtWo6w&tag=`;
    let tagurl=`https://api.giphy.com/v1/gifs/random?api_key=VoRooJLpgTITjx1M93eAg8SilRwtWo6w&tag=${tag}`;
    

    let fetchdata= async(tag)=>{
        // console.log(tag? console.log("tag is present"):console.log("tag is not present"));
        setspinner(true);
        let output=await axios.get(tag? tagurl:url);
        let link=output.data.data.images.fixed_height_small_still.url;
        console.log(output.data.data.images);
        setgiflink(link);
        setspinner(false);
    }
    useEffect(()=>{
        fetchdata();
    },[])

    return {fetchdata,giflink,spinner};
}

export default useGif;
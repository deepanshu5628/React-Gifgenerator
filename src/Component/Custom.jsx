import { useState } from "react";
import "../Component/Custom.css";
import useGif from "../useGif";
import Customloader from "./Customloader";
function Custom(){
    let [tag,settag]=useState("");
    let{fetchdata,spinner,giflink}=useGif(tag);

    function generatebtn(){
        // console.log(tag);
        fetchdata(tag);
    }
    return (
        <div className="Custom">
            <h2>Custom {tag} Gif's</h2>
            {spinner? (<Customloader/>):(<img src={giflink} alt="image" />)}
            <br />
            <input type="text" placeholder="enter..." value={tag} onChange={(event)=>settag(event.target.value)}/>
            <br />
            <button onClick={generatebtn}>Generate</button>
        </div>
    )
}

export default Custom;

// on custom bracnch
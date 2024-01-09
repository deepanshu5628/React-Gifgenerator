import "./Random.css";
import useGif from "../useGif";
import Customloader from "../Component/Customloader";
function Random(){
    let {fetchdata,spinner,giflink}=useGif();

    
    return (
        <div className="Random">
            <h2>Random Gif's</h2>
            {spinner? ( <Customloader/>):(<img src={giflink} alt="image" />)}
            
            <br />
            <button onClick={()=>fetchdata()}>Generate Random</button>
        </div>
    )
}

export default Random;

// this bracnh is completed
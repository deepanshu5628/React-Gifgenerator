import "./Random.css";
import useGif from "../useGif";
import Customloader from "../Component/Customloader";
function Random(){
    let {fetchdata,spinner,giflink}=useGif();

    function randombtn(){
        console.log("button is cliedced");
        fetchdata();
        console.log(giflink);
    }
    return (
        <div className="Random">
            <h2>Random Gif's</h2>
            {spinner? ( <Customloader/>):(<img src={giflink} alt="image" />)}
            
            <br />
            <button onClick={randombtn}>Generate Random</button>
        </div>
    )
}

export default Random;
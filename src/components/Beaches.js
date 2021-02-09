import React, {useEffect, useState} from 'react';
import axios from "axios";

const Beaches = () => {

    const [beaches, setBeaches] = useState([]);

    const apiKey = "e04a0475a23f3c074f24cfaf32a45166";

    useEffect(() => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=beaches&per_page=24&format=json&nojsoncallback=1`)
            .then( res => {
                console.log(res);
                setBeaches(res.data.photos.photo)
            })
    },[]);



    return (
        <div>

            <div className="container">
                <div className="row mt-4">

                    {/*{loading ? <span className='spinner-border'/> : ""}*/}
                    {/*<ClipLoader color="#ffffff" loading={loading} size={150} />*/}
                    {beaches.map((item)=>(
                        <div className="col-4 mb-3">
                            <img src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`} className='w-100' alt=""/>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    );
};

export default Beaches;
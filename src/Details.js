import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import BeerCard from './BeerCard';

function Details() {
    const [alldata, setAllData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showById, setShowById] = useState(1);
    const [currentBeer, setCurrentBeer] = useState(null);

    const fetchData = async () => {
        try {
            const result = await axios.get(`https://api.punkapi.com/v2/beers`);
            setAllData(result.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setShowById(e.target.value);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {   
        const beer = alldata.find((beer) => beer.id === Number(showById));
        setCurrentBeer(beer);
    }, [showById, alldata]);

    return (
        <>
            {loading ? (
                <div style={{position: 'fixed',top:'0',left:'0',width:'100%','height':'100%', display:'flex',justifyContent:'center','alignItems':'center'}}>
                <Spinner animation="border" variant="success" />
                </div>
            ) : (
                <div>
                    <br></br>
                    <div className="container text-center">
                        <div className="g-col-6">
                            <label htmlFor="Name" className="form-label">
                                Product ID
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Enter Product Id to Display"
                                name="name"
                                value={showById}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="text-success">
                        <hr className="border border-primary border-2 opacity-50" />
                    </div>

                    {currentBeer ? (
                        <div className='container text-center'>

                        <BeerCard key={currentBeer.id} beer={currentBeer} />
                        </div>
                    ) : (
                        <p>No beer found with the specified ID.</p>
                    )}
                </div>
            )}
        </>
    );
}

export default Details;

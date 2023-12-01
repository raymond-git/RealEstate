import React, { useEffect, useState } from 'react'
import { fetchAllData } from './api';

const Homepage = () => {

    const [allData, setAllData] = useState([]);

    useEffect(() => {
        const getAllData = async () => {
            const realEstate = await fetchAllData();
            setAllData(realEstate.data);
            console.log(realEstate.data)
        };

        getAllData();
    }, [])


    return (
        <div className='container'>
            <div className='text-custom-whiteColor text-center font-Lato not-italic leading normal m-60'>
                <h1 className='realEstate-Title text-[28px] md:text-[45px] lg:text-[48px]'>Real Estate App</h1>
                <h2 className='realEstate-Subtitle text-[14px] md:text-[18px] lg:text-[21px]'>Open the door to your <span className='text-custom-greenColor'>dream home</span> with us </h2>
            </div>

            <div class="input-group px-4 mx-auto md:w-3/5 lg:w-3/5">
                <div class="input-group-prepend">
                    <span type="submit" class="input-group-text" id="inputGroup-sizing-default">Seek Home</span>
                </div>
                <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder='City, State, Address, Postal Code' />
            </div>

            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-center p-5'>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle custom-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Listings
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>

                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle custom-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Property Type
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>

                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle custom-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Price
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>

                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle custom-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Bed Room
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>

            <div className='flex justify-evenly'>
                <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {allData.map((data) => (
            <div key={data.id}>
                    <div className="ecommerce_border_color rounded-xl lg-shadow w-full h-full flex flex-col justify-between p-12">
                      
                            <img className="w-28 h-28 lg:w-32 lg:h-32 mx-auto" src="logo192.png" alt="product"></img>
                            <h1 className="text-base md:text-xl mt-10">Bed Rooms: 2 | 2 Floors | 2810 Sqft House on Sale </h1>
                            <p className="mobile-responsive-fontprice-product robotoFont font-bold text-base md:text-lg pt-4 price-color">1234 Maple Blossom, Emerald City, CA, 94785</p>
                        
                        </div>

                    {/* <div class="card" style={{ width: '21rem' }}>
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" class="card-img-top" alt="Sunset Over the Sea" />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card" style={{ width: '21rem' }}>
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" class="card-img-top" alt="Sunset Over the Sea" />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card" style={{ width: '21rem' }}>
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" class="card-img-top" alt="Sunset Over the Sea" />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div> */}

                    
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Homepage;
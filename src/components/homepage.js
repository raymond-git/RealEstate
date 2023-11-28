import React from 'react'

const Homepage = () => {
    return (
        <div>
            <div className='text-custom-whiteColor text-center font-Lato not-italic leading normal m-60'>
                <h1 className='realEstate-Title'>Real Estate App</h1>
                <h2 className='realEstate-Subtitle'>Open the door to your <span className='text-custom-greenColor'>dream home</span> with us </h2>
            </div>

            <div class="input-group px-4 mx-auto sm:w-3/5 md:w-3/5 lg:w-3/5 ">
                <div class="input-group-prepend">
                    <span type="submit" class="input-group-text" id="inputGroup-sizing-default">Seek Home</span>
                </div>
                <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder='City, State, Address, Postal Code' />
            </div>

            {/* <div className='flex justify-center filters'>
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

                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle custom-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Number of Stories
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>

            </div> */}
        </div>
    );
}



export default Homepage;
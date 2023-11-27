import React from 'react'

const Homepage = () => {
    return (
        <div>
            <div className='text-custom-whiteColor text-center font-Lato not-italic leading normal m-60'>
                <h1 className='realEstate-Title'>Real Estate App</h1>
                <h2 className='realEstate-Subtitle'>Open the door to your <span className='text-custom-greenColor'>dream home</span> with us </h2>
            </div>

            <div class="input-group mb-3 mx-auto w-full sm:w-1/2 lg:w-96">
                <div class="input-group-prepend">
                    <span type="submit" class="input-group-text" id="inputGroup-sizing-default">Seek Home</span>
                </div>
                <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder='City, State, Address, Postal Code' />
            </div>
        </div>
    );
}



export default Homepage;
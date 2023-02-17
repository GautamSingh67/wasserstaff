import React from 'react'
// import styled from '@emotion/styled'
function FIRSTHEX() {
    return (
        <div className='headDiv'>

            {/* Navebar */}
            <div className='nav1'>
                <img src='https://s3-alpha-sig.figma.com/img/fd18/de12/731fb4ce00dd022f23fea8e388eec191?Expires=1677456000&Signature=AGYy0zidRkxYEC67MGBQ1H~rg7KNA~vyiCV8qN29lTK0aPnmFvNwRPMgxbLgefY3bDN3BbfdOFguc7-ZBQ5yrEqSjfOGkXA~4qdDIXjJLK9gmsbFXok4hv3NyagKAbuD0lgnRsNhE2DnPyQ2HDrANCkHpPLb~ybjdK3LVmQQ3uF~jgHS1A16-pqvyVSoqbcNePOV6KjrhOEtVMneRVOet1oCGEZDBq7amUJX0H3oPOKe8y8EtKAbWHKnk072YC4JF9j4zTJ4rkC2JZIlhUtZmgPIQM-UbpQAq18kpCTOaDciGNQUzvjO12kifrNzGhkwmGspaM5b747mM9MHABsOtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='myimg' className='img1'></img>
                <div className='contentNav'>WASSERSTOFF</div>
                <form>
                    <input type='text' className='search-bar'></input>
                    <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/953f85d4-7e0b-4b0d-9fc7-0569d2c218bf" alt="icon" className='searchImage'></img>
                </form>
                <div className='nav-list'>
                    <span className='list-child'>Statistics</span>
                    <span className='list-child2'>Overview</span>
                    <span className='list-child'>Dashboard</span>
                    <span className='list-child'>Analytics</span>
                </div>
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/333956f8-5377-4d63-932e-4e82f8d97c77" alt="icon1" className='nav-icons1'></img>
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c25f912b-cc64-4ca7-9183-b28be27d4017" alt="icon2" className='nav-icons2'></img>
            </div>

            <div className='body-content1'>
                WSTF FRONT-END HACKATHON
            </div>
            <div className='body-content2'>
                <span className='content2-part1'>All users</span>
                <span className='content2-part2'>Detail</span>
                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c69251d-3f49-4fee-ad55-dc0b6a722b7f" alt="icon" className='arrow'></img>
            </div>
            <span className='content2-part3'>2,431,340</span>
            <div className='card-section'>
                <div className='body-content3'>
                    <div className='body-content31'>
                        <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02986c35-3c5e-4c79-a194-e7e6fa368f52" alt="icon" className='body-content31image'></img>
                    </div>
                    <div className='body-content311'>
                        <div className='body-content32'>Total earning</div>
                        <div className='body-content33'>540,549</div>
                    </div>
                </div>

                <div className='body-content3'>
                    <div className='body-content31' style={{ backgroundColor: '#66C8FF' }}>
                        <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42697219-175c-43a7-bd39-7827922e944f" alt="icon" className='body-content31image'></img>
                    </div>
                    <div className='body-content311'>
                        <div className='body-content32'>Sales</div>
                        <div className='body-content33'>1,205,677</div>
                    </div>
                </div>

                <div className='body-content3'>
                    <div className='body-content31' style={{ backgroundColor: '#FF9066' }}>
                        <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/144c4c0a-0dbb-47c6-a693-14681cac0cd5" alt="icon" className='body-content31image'></img>
                    </div>
                    <div className='body-content311' >
                        <div className='body-content32'>Purchase</div>
                        <div className='body-content33'>48,430,039</div>
                    </div>
                </div>

            </div>

            <div className='parent-circle'>
                <div className='cir1'>
                <div class="circle-wrap">
                    <div class="circle">
                        <div class="mask full">
                            <div class="fill"></div>
                        </div>
                        <div class="mask half">
                            <div class="fill"></div>
                        </div>
                        <div class="inside-circle"> 27% </div>
                    </div>
                </div>
                <div className='cir2'>
                    <div className='user1'>92,980</div>
                    <div className='user2'>Active users</div>
                </div>
                </div>

                <div className='cir1'>
                <div class="circle-wrap1">
                    <div class="circle1">
                        <div class="mask1 full1">
                            <div class="fill1"></div>
                        </div>
                        <div class="mask1 half1">
                            <div class="fill1"></div>
                        </div>
                        <div class="inside-circle1"> 67% </div>
                    </div>
                </div>
                <div className='cir2'>
                    <div className='user1'>22,652</div>
                    <div className='user2'>New users</div> 
                </div>
                </div>
            </div>







        </div>
    )
}

export default FIRSTHEX;


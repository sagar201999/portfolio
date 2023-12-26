import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import project1 from '../Images/project-1.jpeg'
import project2 from '../Images/project-2.png'
import project3 from '../Images/project-3.jpeg'


const Work = () => {

    return (
        <>
            <div id='work' className='bg-black'>
                <div className='work-first'>
                    <h3 className='text-center'>What I do</h3>
                    <div className='work-des-container'>
                        <div>
                            <h5 className='Tiffany-Blue'>Web Design</h5>
                            <p>Skilled in creating visually appealing and user-friendly websites. Proficient in using design tools and
                                techniques to craft captivating layouts, color schemes, and typography, ensuring a
                                seamless user experience. </p>
                        </div>

                        <div>
                            <h5 className='Tiffany-Blue'>Web Development</h5>
                            <p>Experienced in developing responsive and functional websites. Proficient in HTML, CSS, and JavaScript
                                to create dynamic web solutions. Adaptable to various frameworks and platforms to build robust
                                and efficient websites. </p>
                        </div>

                        <div>
                            <h5 className='Tiffany-Blue'>Photoshop</h5>
                            <p>Proficient in Photoshop to enhance and manipulate images. Capable of retouching, color correction,
                                and creating stunning visual compositions to meet diverse design needs. </p>
                        </div>
                    </div>

                </div>




                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <div className='container d-flex slider-project'>
                                <img src={project1} alt='work-images' />
                                <div className='slider-info'>
                                    <p>Web Design</p>
                                    <h4>Petnutro</h4>
                                    <p>Design & Development</p>
                                    <p>"PetNutro: Your Comprehensive Pet Nutrition Marketplace ,
                                        PetNutro is the ultimate developer-friendly platform designed to streamline the
                                         integration of premium pet nutrition features.</p>
                                    <button className='btn btn-primary'>View Details</button>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="10000">
                        <div className='container d-flex slider-project'>
                                <img src={project2} alt='work-images' />
                                <div className='slider-info'>
                                    <p>Web Design</p>
                                    <h4>Book Store</h4>
                                    <p>Design & Development</p>
                                    <p>bookstore webpage, built with React, showcases a curated collection of books. Discover titles, 
                                        authors, and prices while enjoying a seamless browsing experience.</p>
                                    <button className='btn btn-primary'>View Details</button>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="10000">
                            <div className='container d-flex slider-project'>
                                <img src={project3} alt='work-images' />
                                <div className='slider-info'>
                                    <p>Web Development</p>
                                    <h4>Employee Management</h4>
                                    <p>Design & Development</p>
                                    <p>Employee Management System simplifies employee administration. It's an 
                                        easy-to-use platform that centralizes HR tasks like scheduling, payroll, and performance metrics.</p>
                                    <button className='btn btn-primary'>View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>








            </div>
        </>
    )
}

export default Work;
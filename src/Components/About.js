import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../MediaQuery.css'
import aboutpic from '../Images/aboutPic.png'
import resume from '../sagar resume 1.pdf'
import { motion } from "framer-motion"


const About = () => {






    return (
        <>
            <div id='about' className='py-4'>
                <div className='about-container' >
                    <div className='about-me'>
                       
                            <div className='about-first'>
                                <img src={aboutpic} alt='about' />
                            </div>
                        <div className='about-second'>
                            <h3 className='Tiffany-Blue'>About me</h3>
                            <p>Passionate Front-End Developer with a
                                strong foundation in HTML and CSS .
                                Proficient in HTML, CSS Bootstrap ,
                                have good knowlege of Javascipt React
                                and Figma . I thrive on transforming
                                design concepts into seamless user
                                experiences. With a keen eye for detail
                                and a commitment to writing clean .</p>

                        </div>

                    </div>
                    <div className='all-skills'>
                        <p>HTML</p> <p>CSS</p> <p>JavaScript</p> <p>Bootstrap</p>
                        <p>ReactJS</p> <p>Figma</p> <p>TailwindCSS</p> <p>Jquery</p>
                        <p>Sql</p> <p>Web Development</p> <p>User Experience</p><p>User Interface</p><p>Web Applications</p>
                        <p>Web Service</p> <p>Publishing</p> <p>Wordpress</p> <p>Office 365</p>
                        <p>Management Skills</p> <p>Creative</p> <p>Quick Learner</p> <p>Problem Solving</p>
                        <p>Critical Thinking</p>
                    </div>

                    <div className='text-center mt-4'>
                        <a href={resume} Download="resume">
                            <motion.button type="button" className="btn btn-info text-light rounded-pill"
                                whileHover={{
                                    scale: 1.2,
                                    textShadow: "0px 0px 8px #0bbba0",
                                    boxShadow: "0px 0px 8px #0bbba0"
                                }}>
                                Download CV
                            </motion.button>
                        </a>

                    </div>

                </div>

                <div className='edu-exp py-5'>
                    <div className='education'>
                        <h4>Education</h4>
                        <div>
                            <h5>MCA From Bamu University</h5>
                            <p>2021-2023</p>
                            <p>Graduated in Master Of Computer Application from Rajashri Shahu Institute Of Management in Year 2023 with 8.4 CGPA. </p>
                        </div>
                        <div>
                            <h5>BCS From Bamu University</h5>
                            <p>2021-2023</p>
                            <p>Graduated in Bachelor Of Computer Science from Vidyadhan College Aurangabad in Year 2020 with 6.8 CGPA .</p>
                        </div>

                    </div>
                    <div className='experience'>
                        <h4>Work Experience</h4>
                        <div>
                            <h5>KSJ Technology Pvt Lmt</h5>
                            <p>2022-2023</p>
                            <p>Web Developer as Intern</p>
                            <p>Responsibility :</p>
                            <ul>
                                <li className='my-2'>Implement User Interface</li>
                                <li className='my-2'>Make Responsive Design</li>
                                <li className='my-2'>Identifying and resolving issues</li>
                                <li className='my-2'>Create user friendly designs</li>
                                <li className='my-2'>Learn to Utilize different Frameworks</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='skills-bars py-5'>
                    <div className='tech'>
                        <h4>Technical Skills</h4>
                        <div>

                            <div className='mb-2'>
                                <div className='progress-info-wrapper'>
                                    <p>HTML</p>
                                    <p>85%</p>
                                </div>
                                <div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "8px" }}>
                                    <div class="progress-bar  progress-bar-striped progress-bar-animated bg-danger" style={{ width: "85%" }}></div>
                                </div>
                            </div>

                            <div className='mb-2'>
                                <div className='progress-info-wrapper'>
                                    <p>CSS</p>
                                    <p>75%</p>
                                </div>
                                <div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "8px" }}>
                                    <div class="progress-bar  progress-bar-striped progress-bar-animated" style={{ width: "75%" }}></div>
                                </div>
                            </div>

                            <div className='mb-2'>
                                <div className='progress-info-wrapper'>
                                    <p>Javascipt</p>
                                    <p>50%</p>
                                </div>
                                <div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "8px" }}>
                                    <div class="progress-bar  progress-bar-striped progress-bar-animated bg-warning" style={{ width: "50%" }}></div>
                                </div>
                            </div>

                            <div className='mb-2'>
                                <div className='progress-info-wrapper'>
                                    <p>Bootstrap</p>
                                    <p>80%</p>
                                </div>
                                <div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "8px" }}>
                                    <div class="progress-bar  progress-bar-striped progress-bar-animated bg-success" style={{ width: "80%" }}></div>
                                </div>
                            </div>

                            <div className='mb-2'>
                                <div className='progress-info-wrapper'>
                                    <p>React</p>
                                    <p>60%</p>
                                </div>
                                <div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "8px" }}>
                                    <div class="progress-bar  progress-bar-striped progress-bar-animated bg-info" style={{ width: "60%" }}></div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className='prof-skills'>
                        <h4>Professional Sills</h4>
                        <div className='prof'>
                            <div>
                                <div class="media-commom progress-bar-skill-1" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><span className='percentage'>60%</span></div>
                                <p className='text-center'>Communication</p>
                            </div>
                            <div>
                                <div className="media-commom progress-bar-skill-2" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"><span className='percentage'>80%</span></div>
                                <p className='text-center'>Creativity</p>
                            </div>
                            <div>
                                <div className="media-commom progress-bar-skill-3" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"><span className='percentage'>70%</span></div>
                                <p className='text-center'>Team Work</p>
                            </div>
                            <div>
                                <div className="media-commom progress-bar-skill-4" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span className='percentage'>75%</span></div>
                                <p className='text-center'>Adaptability</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default About;
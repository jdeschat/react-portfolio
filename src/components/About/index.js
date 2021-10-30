import React from 'react'

function About() {
    return (
        <section id="about" class="about">
            <div class="container">

                <div class="section-title">
                    <h2>About</h2>
                    <p>I am a recent Master of Business Administration and Master of Public Health graduate with a passion for
                        continuous learning. I put my heart into my work and building and maintaining relationships. As a software
                        developer in-the-making, I aspire to build software that will help advance the health and wellness of
                        people and facilitate the delivery of healthcare. I also like find creative ways to stay active and have fun
                        with friends!</p>
                </div>

                <div class="row">
                    <div class="col-lg-4" data-aos="fade-right">
                        <img src="assets/img/profile-img.jpg" class="img-fluid" id="aboutPic" alt="" />
                    </div>
                    <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Recent MBA-MPH Graduate. Full-Stack Web Developer in-the-making</h3>
                        <p class="fst-italic">
                            Important information about me!
                        </p>
                        <div class="row">
                            <div class="col-lg-6">
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <strong>GitHub:</strong>
                                        <span>https://github.com/jdeschat</span>
                                    </li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>(905) 321-6029</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Niagara Falls, Ontario</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Degrees:</strong> <span>MPH, MBA, MSc</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>jdeschat@gmail.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About

import React from 'react';

const AboutACM = () => {
    return (
        <div className="about_acm">
            <h1 className='acm__title'>Who are we?</h1>
            <div className="acm__description">
                <p className='acm__desc ad1'>
                    ACM is a global scientific and educational organisation dedicated to advancing the art, science, engineering and application of computing, by fostering the open exchange of information and by promoting the highest professional and ethical standards. The BMSCE ACM student chapter is an initiative by the Department of Machine Learning, B.M.S. College of Engineering with the aim of coalescing the Computer Science, Information Science and Artificial Intelligence communities of BMSCE.
                </p>
                <p className='acm__desc ad2'>
                    The chapter strives to broaden its members' practical knowledge by organising a plethora of events including expert talks, reading sessions, useful hands-on workshops, industrial visits, and coding competitions. Our goal is to improve students' computer and scientific knowledge and have them be literate in up-and-coming fields so that they have a competitive advantage in the industry or at research when they graduate. Here at the BMSCE ACM student chapter, we see a world where computing helps solve tomorrow’s problems, where we use our knowledge and skills to advance the profession and make a positive impact.
                </p>
            </div>
            <div className='social_list'>
                <a href="https://www.acm.org/" target="_blank" className='acm_icon'>
                    <div className='soc_icon'>
                        <i class="fa-solid fa-globe"></i>
                    </div>
                    <div className='soc_name'>
                        ACM
                    </div>
                </a>
                <a href="https://www.bmsce.ac.in/" target="_blank" className='bmsce_icon'>
                    <div className='soc_icon'>
                        <i class="fa-solid fa-globe"></i>
                    </div>
                    <div className='soc_name'>
                        BMSCE
                    </div>
                </a>
                <a href="https://www.instagram.com/acm_bmsce/" target="_blank" className='insta_icon'>
                    <div className='soc_icon'>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                    <div className='soc_name'>
                        Instagram
                    </div>
                </a>
                <a href="/" className='linkd_icon'>
                    <div className='soc_icon'>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                    <div className='soc_name'>
                        LinkedIn
                    </div>
                </a>
            </div>
        </div>
    );
};

export default AboutACM;
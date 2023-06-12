import React from 'react';

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src="https://res.cloudinary.com/dotl5onov/video/upload/v1663501779/bmsce_acm/video-2_xzpaqq.mp4" autoPlay loop muted />
            <div className='hero-img'>
                <img src="https://res.cloudinary.com/dotl5onov/image/upload/v1664330895/bmsce_acm/acm_nobg_hgtczx.png" />
            </div>
            <div className='hero-cnt'>
                <h1>B.M.S College of Engineering</h1>
                <h2>Associate for Computing Machinery</h2>
                <h3>Student Chapter</h3>
            </div>
        </div>
    );
};

export default HeroSection;
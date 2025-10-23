import React from 'react';

export default function HeroImage() {
  return (
    <header style={{ paddingLeft: 0}}>
      <div
        className='text-center bg-image'
        style={{
          backgroundImage: "url('/hero 5.jpg')",
          height: 500,
          backgroundSize: "cover",      // ✅ makes image fill the container
          backgroundPosition: "center", // ✅ keeps it centered
          backgroundRepeat: "no-repeat", // ✅ prevents tiling
          boxShadow: "0 27px 30px rgba(0, 0, 0, 0.4)", // ✅ shadow
          paddingTop: "80px"
        }}
      >
        <div className='mask' >
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3 p-5' style={{ fontSize: '80px' }}>Hi! I'm Vellan</h1>
              <br/>
              <h4 className='mb-t-5' style={{ fontSize: '30px' }}>I am a full-stack developer.</h4>
              <h4 className='mb-5' style={{ fontSize: '30px' }}>Design engineer, with an interest in programming.</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
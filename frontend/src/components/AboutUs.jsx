import React from 'react';
import Navbar from './shared/Navbar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div>
    <Navbar/>
    <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">Welcome to <span className='text-teal-600'>Hire</span><span className='text-orange-600'>Way</span></h2>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12">
          At Hireway, we believe that your career journey should be smooth, inspiring, and rewarding. 
          Our platform is dedicated to connecting you with your ideal job opportunities, tailored to 
          your unique talents, aspirations, and professional goals. We go beyond just job listings— 
          we aim to transform the hiring process for both job seekers and employers, making it more 
          transparent, efficient, and intuitive.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 max-w-md">
              Our mission is to bridge the gap between talented individuals and world-class organizations, 
              ensuring that finding the right job is no longer a hassle, but a fulfilling experience. 
              We empower you with tools and insights to land the role you deserve.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600 max-w-md">
              We envision a world where job hunting is seamless and stress-free, and where employers 
              discover the best talent effortlessly. By leveraging technology and a human-centric approach, 
              we aspire to be the leading job platform that sets the benchmark in recruitment.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Hireway?</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hireway is built on trust, transparency, and a passion for helping people grow. Whether you're 
            a recent graduate, an experienced professional, or an employer seeking top-tier talent, we’re here 
            to make the hiring process easier for everyone. Start your journey with us and experience a new way of 
            discovering opportunities.
          </p>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default AboutUs;

import { Search } from 'lucide-react';
import React from 'react'
import { Button } from './ui/button';

function HeroSection() {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-8 my-10 items-center">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-red-600 font-medium">
          Top choice for Jobs in India
        </span>
        <h1 className="text-5xl font-bold">
          Your Dream Job, Just A Click Away <br /> Start your Journey with{" "}
          <span className="text-green-900">Hire</span>
          <span className="text-orange-600">Way</span>
        </h1>
        <p className="font-medium w-1/2 ">
          At Hireway, we are committed to empowering your career journey. Our
          user-friendly platform connects skilled individuals with prominent
          businesses, making it easier than ever to find the right opportunity
          and achieve your professional goals.
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream job"
            className="outline-none border-none w-full p-2"
          />
          <Button className="rounded-r-full bg-orange-500">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection

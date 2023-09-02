import React from "react";

const Desc = () => {
  return (
    <div>
      <h1 className=' text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center pt-24 pb-8 '>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 bg-clip-text text-transparent '>OpenAI GPT-4</span>
      </h1>
      <h2 className='text-lg text-gray-600 sm:text-xl text-center max-w-2xl mx-auto'>
        Simplify your reading with InfoGist, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </div>
  );
};

export default Desc;

import React from "react";

const Desc = () => {
  return (
    <div>
      <h1 className=' text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center pt-24 pb-8 '>
      Unlock Insights with  
        <span className='bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 bg-clip-text text-transparent '> OpenAI GPT-4</span>
        <br className='max-md:hidden' />
        Article Digests
      </h1>
      <h2 className='text-lg text-gray-600 sm:text-xl text-center max-w-2xl mx-auto'>
      Streamline your reading experience with InfoGist, a cutting-edge open-source article summarization tool. Instantly convert extensive articles into easily digestible, concise summaries
      </h2>
    </div>
  );
};

export default Desc;

import React, { useState } from "react";
import { linkIcon } from "../assets"; // Import your other assets here
import Loader from "./Loader";

const Main = () => {
  const [Article, setArticle] = useState({
    url: "",
    content: "",
  });
  const [showLoader, setShowLoader] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setShowLoader(true);
      const mainurl = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${Article.url}&length=3`
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4ec5c61c34msh0beb9a64bd939d3p1d5de9jsn5e58624179f7",
        "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(mainurl, options);
        const result = await response.text();
      setShowLoader(false);
      setArticle({
        ...Article,
        content: result,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section className="mt-16 w-full max-w-4xl mx-auto">
      <div className="flex flex-col w-full gap-2">
        <form className="flex relative " onSubmit={(e) => handleSubmit(e)}>
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 ml-3 my-2 w-6"
          />
          <input
            type="url"
            placeholder="Paste the article link"
            value={Article.url}
            onChange={(e) =>
              setArticle({
                ...Article,
                url: e.target.value,
              })
            }
            required
            className="block w-full rounded-2xl border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0 peer "
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
          >
            <p>↵</p>
          </button>
        </form>
      </div>

      <div className='mt-10 w-full flex justify-center items-center'>
        {
          showLoader ? (
            <Loader/>
          ):
          Article.content && (
            <div className='flex flex-col gap-3'>
              <h2 className='font-satoshi font-bold text-gray-600 dark:text-white text-xl'>
                Article <span className='blue_gradient'>Summary</span>
              </h2>
              <div className='summary_box'>
                <p className='font-inter font-medium text-sm text-gray-700 dark:text-gray-200'>
                    {Article.content}
                </p>
              </div>
            </div>
          )
        }
      </div>
    </section>
  );
};

export default Main;

"use client";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";
import { Loading } from "./Loading";
import { FaArrowRight } from "react-icons/fa";

interface ISearchRes {
  id: number;
  name: string;
  family: string;
  order: string;
  genus: string;
}

const SearchForm = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<ISearchRes | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (value: string) => {
    setResult(null);
    setIsError(false);
    setInput(value);
  };

  const handleSearch = () => {
    setIsLoading(true);
    axios
      .get<ISearchRes>(`https://www.fruityvice.com/api/fruit/${input}`)
      .then((res) => setResult(res.data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="mx-auto">
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <div className="relative">
            <Image
              src="/orange.png"
              width={240}
              height={240}
              alt="Image of orange"
            />
            <div className="text-white flex justify-start pl-4 mt-[22px] font-bold text-4xl tracking-custom-wide">
              SEARCH
            </div>
            <div className=" text-white flex justify-center text-2xl font-light">
              FRUITS DATABASE
            </div>
            <input
              className={`block w-[245px] mt-[53px] p-2 h-[44px] text-base font-normal text-white bg-cus-black border-2 rounded-md ${isError ? "border-red-500 text-red-500" : "focus:outline-none   border-cus-black"}`}
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              type="text"
              id="inputId"
              placeholder="Find your favourite"
            />
            <button
              className="absolute bottom-2 right-2 text-white"
              onClick={handleSearch}
              disabled={input === ""}
            >
              <AiOutlineSearch size="24px" />
            </button>
          </div>
          {isError ? (
            <p className=" flex justify-center text-red-500 mt-2">Not Found</p>
          ) : null}
          {result && (
            <div className="h-[120px] relative">
              <div className=" pl-2 bg-cus-black mt-4 text-white">
                <div className="flex my-2 font-bold text-sm justify-start">
                  {result.name}
                </div>
                <div>
                  <span className="text-sm font-bold">Family:</span>
                  <span className="ml-1 text-sm font-normal">
                    {result.family}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-bold">Order:</span>
                  <span className="ml-1 text-sm font-normal">
                    {result.order}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-bold">Genus:</span>
                  <span className="ml-1 text-sm font-normal">
                    {result.genus}
                  </span>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <Link href={`detail/${result.id}`}>
                  <button className="block w-[205px] h-[24px] text-white  text-base font-extrabold">
                    <FaArrowRight
                      color="white"
                      size={24}
                      className="absolute "
                    />
                    OPEN DETAIL
                  </button>
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default SearchForm;

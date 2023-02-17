import React, { useEffect } from "react";
import "tippy.js/dist/tippy.css";
import Link from "next/link";
import { closeMblMenu } from "../redux/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const MblNavbar = ({ onConnect }) => {
  const { mblMenu, signerAddress } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        dispatch(closeMblMenu());
      }
    });
  }, [dispatch, router]);

  return (
    <div
      className={
        mblMenu
          ? "js-mobile-menu invisible fixed inset-0 z-50 ml-auto items-center bg-black opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 nav-menu--is-open"
          : "js-mobile-menu invisible fixed inset-0 z-50 ml-auto items-center bg-black opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 "
      }
    >
      {/* <!-- Mobile Logo / Menu Close --> */}
      <div className="t-0 bg-black fixed left-0 z-50 flex w-full items-center justify-between p-6 lg:hidden">
        {/* <!-- Mobile Logo --> */}

        <Link href="/" legacyBehavior>
          <a>
            <img
              src="/images/logo.svg"
              className="max-h-7"
              alt="Verseshoe | Mint"
            />
          </a>
        </Link>

        {/* <!-- Mobile Menu Close --> */}
        <button
          className="js-mobile-close border-jacarta-100 hover:bg-black focus:bg-black group ml-2 flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]"
          onClick={() => dispatch(closeMblMenu())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="fill-white h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
          </svg>
        </button>
      </div>

      {/* <!-- Placeholder for mobile  --> */}
      <div className="relative mt-16 mb-8 w-full lg:hidden"></div>

      {/* <!-- Primary Nav --> */}
      <nav className="navbar w-full !z-50 relative">
        <ul className="flex flex-col lg:flex-row">
          <li className="ml-4 pt-2">
            <Link href="https://twitter.com/Verseshoe" legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="social flex cursor-pointer">
                  <div className="w-full p-2 m-2 self-center">
                    <svg className="icon group-hover:fill-white fill-white h-6 w-6">
                        <use xlinkHref={`/icons.svg#icon-twitter`}></use>
                    </svg>
                  </div>
                </div>
              </a>
            </Link>
          </li>

          <li className="ml-4 pt-2">
            <Link href="https://verseshoes.net/" legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="social flex cursor-pointer">
                  <div className="w-full p-2 m-2 self-center">
                    <svg className="icon group-hover:fill-white fill-white h-6 w-6">
                        <use xlinkHref={`/icons.svg#icon-world`}></use>
                    </svg>
                  </div>
                </div>
              </a>
            </Link>
          </li>

          <li className="ml-4 pt-2">
            <Link href="https://www.instagram.com/verseshoesofficial/" legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="social flex cursor-pointer">
                  <div className="w-full p-2 m-2 self-center">
                    <svg className="icon group-hover:fill-white fill-white h-6 w-6">
                        <use xlinkHref={`/icons.svg#icon-instagram`}></use>
                    </svg>
                  </div>
                </div>
              </a>
            </Link>
          </li>

        </ul>
      </nav>

      {/* <!-- Mobile Connect Wallet / Socials --> */}
      <div className="mt-10 w-full lg:hidden">
        <hr className="bg-jacarta-600 my-5 h-px border-0" />

        {/* <!-- Socials --> */}
        <div className="flex items-center justify-center space-x-5">

        </div>
      </div>

      {/* <!-- Actions --> */}
      <div className="ml-8 hidden lg:flex xl:ml-12"></div>
    </div>
  );
};

export default MblNavbar;

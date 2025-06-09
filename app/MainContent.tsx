"use client";
import React from "react";
import Image from "next/image";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillHeart,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { useTranslation } from "react-i18next";
import Languages from "./Languages";

export default function MainContent() {
  const { t } = useTranslation();
  const description = t("description");

  return (
    <main className="px-10 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
          <div className="flex items-center">
            <AiFillHeart className="text-green-500 text-3xl mr-2" />
            <h1 className="font-burtons text-white text-xl">meli</h1>
          </div>
          <span className="flex items-center">
            <Languages />
          </span>
        </nav>

        <div className="text-center px-10 pt-10">
          <h2 className="text-5xl py-2 text-green-400 font-medium dark:text-green-400 md:text-6xl">
            Melanie Casasco
          </h2>
          <h3 className="text-2xl text-white py-2 dark:text-white md:text-3xl">
            Front-end developer
          </h3>
          <div className="text-md py-5 flex items-center text-white leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            <p>{t("greeting")} </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-white dark:text-gray-400">
            <a
              href="https://www.linkedin.com/in/melanie-casasco/"
              target="_blank"
              className="hover:text-green-500"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/melicasasco"
              target="_blank"
              className="hover:text-green-500"
            >
              <AiFillGithub />
            </a>
            <a
              href="mailto:melaniecasasco@gmail.com"
              target="_blank"
              className="hover:text-green-500"
            >
              <AiFillGoogleCircle />
            </a>
          </div>
        </div>
        <div className=" flex justify-center text-white dark:text-gray-400">
          <div className="mx-auto border-2 border-green-700 bg-gradient-to-b from-green-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 shadow-xl">
            <Image
              src={"/img1.png"}
              alt="meli"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
      <section className="py-10">
        <div>
          <h3 className="text-3xl py-1 text-white ">
            {t("about-title")}
          </h3>
          <p className="text-md py-2 leading-8  text-white  text-gray-800 dark:text-gray-200">
            <span
              className="description-container"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </p>
         
        </div>
      </section>
      <section className="pb-9">
        <div>
          <h3 className="text-3xl py-1 text-white ">
            {t("skills-title")}
          </h3>
          <p className="text-md py-2 leading-8  text-white  text-gray-800 dark:text-gray-200">
            <span
            > {t("skills")}</span>
          </p>
         
        </div>
      </section>
      <section className="pb-6">
        <div>
          <h3 className="text-3xl py-1 dark:text-white  text-white  ">
            {t("latest-projects")}
          </h3>
          <p className="text-md py-2  text-white  leading-8 text-gray-800 dark:text-gray-200">
            {t("subtitle-projects")}
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
          <a
            className="w-full md:w-[300px] h-[400px]"
            href="https://www.thenewpeopleexperience.com.ar/"
            target="_blank"
          >
            <div className="h-[350px] border border-green-200 hover:border-green-500 text-center shadow-lg p-5 rounded-xl my-10 flex-1">
              <h3 className=" text-white text-lg font-medium pt-8 pb-2  ">
                Landing Page v2
              </h3>
              <p className=" text-white py-2">{t("landing")}</p>
              <h4 className="py-4 text-green-300">{t("tools")}</h4>
              <p className=" text-white text-gray-800 py-1">
                NEXT JS, REACT JS, TAILWIND
              </p>
              <p className="text-gray-800  text-white py-1">
                FORMSUBMIT - GOOGLE APP SCRIPT
              </p>
              <p className=" text-white text-gray-800 py-1">
                FIGMA
              </p>
            </div>
          </a>

          <a
            className="w-full md:w-[300px] h-[400px]"
            href="https://melicasasco.github.io/the-new-people-experience/"
            target="_blank"
          >
            <div className="h-[350px] border border-green-200 hover:border-green-500 text-center shadow-lg p-5 rounded-xl my-10 flex-1">
              <h3 className=" text-white text-lg font-medium pt-8 pb-2  ">
                Landing Page
              </h3>
              <p className=" text-white py-2">{t("landing")}</p>
              <h4 className="py-4 text-green-300">{t("tools")}</h4>
              <p className=" text-white text-gray-800 py-1">
                HTML, JAVASCRIPT, CSS
              </p>
              <p className="text-gray-800  text-white py-1">
                FIREBASE - EMAIL JS
              </p>
              <p className=" text-white text-gray-800 py-1">
                PHOTOSHOP - ILLUSTRATOR
              </p>
            </div>
          </a>

          <a
            className="w-full md:w-[300px] h-[400px]"
            href="https://mel-cats-game.netlify.app/"
            target="_blank"
          >
            <div className="h-[350px] border border-green-200 hover:border-green-500 text-center shadow-lg p-5 rounded-xl my-10 flex-1">
              <h3 className=" text-white text-lg font-medium pt-8 pb-2  ">
                Mel Cats Game
              </h3>
              <p className=" text-white py-2">{t("cats")}</p>
              <h4 className=" py-4 text-green-300">{t("tools")}</h4>
              <p className=" text-white text-gray-800 py-1">REACT JS</p>
              <p className="text-gray-800  text-white py-1">
                MATERIAL UI
              </p>
            </div>
          </a>

          <a
            className="w-full md:w-[300px] h-[400px]"
            href="https://www.behance.net/gallery/106388683/Les-Chats-UXUI-Design"
            target="_blank"
          >
            <div className="h-[350px] border border-green-200 hover:border-green-500 text-center shadow-lg p-5 rounded-xl my-10 text-white flex-1">
              <h3 className="text-lg font-medium pt-8 pb-2 ">UX/UI</h3>
              <p className="py-2">{t("app")}</p>
              <h4 className="py-4 text-green-300">{t("tools")}</h4>
              <p className="text-white  py-1">PHOTOSHOP</p>
              <p className="text-white py-1">ILLUSTRATOR</p>
              <p className="text-white  py-1">XD ADOBE</p>
            </div>
          </a>
        </div>
      </section>
      <div className="text-center text-white p-10 py-8">
        {t("final")}
      </div>
    </main>
  );
} 
import { type NextPage } from "next";
import Head from "next/head";

const Me: NextPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#121212] py-16">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="w-[650px]">
        <span className="mb-[28px] block text-5xl font-bold text-white">
          Hello 👋
        </span>
        <span className="block text-left text-2xl font-light text-white">
          <span className="line-through">I am</span>{" "}
          <span>
            a highly creative individual that{" "}
            {"it's moving from the operational field to the creative one"}.
          </span>
        </span>
        <span className="mt-[28px] block text-left text-2xl font-light text-white">
          What that means? I am a{" "}
          <span className="font-bold">creative problem solver</span> that{" "}
          <span className="font-bold">loves to learn</span> and{" "}
          <span className="font-bold">create</span> new things.
        </span>
        <span className="mt-[28px] block text-left text-2xl font-light text-white">
          And well, you probably heard that a thousand times from other people,
          so let me tell you a little bit more about me.
        </span>
        <span className="mb-[28px] mt-[28px] block text-5xl font-bold text-white">
          Who is João? 👽
        </span>
        <span className="mt-[28px] block text-left text-2xl font-light text-white">
          Well, there is no definition to that.
        </span>
        <span className="mt-[28px] block text-left text-2xl font-light text-white">
          Even though I am a very creative person, I am also a very logical
          person. I love to solve problems, and I love to create new things.
        </span>
        <span className="mt-[28px] block text-left text-2xl font-light text-white">
          This is just an example, but the thing is: people love to attach
          themselves to definitions, labels, boxes.
        </span>
        <span className="mt-[28px] block text-left text-2xl font-light text-white">
          And yeah {"that's"} understandable, we need some identification at
          some point, but this specialization {"don't"} please me at all.
        </span>
        <span className="mt-[28px] block text-left text-2xl font-light text-white">
          So, since you probably {"don't"} know me, please let me tell you a
          little bit about me.
        </span>
        <span className="my-[28px] block text-5xl font-bold text-white">
          About
        </span>
        <span className="mt-[28px] block text-left text-2xl font-light text-white">
          I am a 20 year old that loves fashion, art, music, design, techology,
          spirituality, conspiracy theories and a lot of other things.
        </span>
        <span className="mt-[28px] block text-left text-2xl font-light text-white">
          My professional background until this point was focused on working as
          a Software Engineer. I have strong expertise as a full-stack
          (front-end heavy) developer with expertise in React, React Native,
          NodeJS, GraphQL, TypeScript, etc.
        </span>
        <span className="mt-[28px] block text-left text-2xl font-light text-white">
          I have 3 years of experience as a developer, but I study programming
          since 2018.
        </span>
        <span className="mt-[28px] block text-left text-2xl font-light text-white">
          Even though I always kept learning new things and improving my skills,
          I had never got deep down into programming, for example. Why?
        </span>
        <span className="my-[28px] block text-5xl font-bold text-white">
          I always felt that something was missing.
        </span>
        <ul className="my-[25px] flex flex-col gap-4">
          <li>
            <span className="block text-left text-2xl font-light text-white">
              I always felt that I was not doing what I was supposed to do.
            </span>
          </li>
          <li>
            <span className="block text-left text-2xl font-light text-white">
              I always felt that I was not doing what I love to do.
            </span>
          </li>
          <li>
            <span className="block text-left text-2xl font-light text-white">
              I always felt that I was not doing what I was born to do.
            </span>
          </li>
          <li>
            <span className="block text-left text-2xl font-light text-white">
              I always felt that I was not doing what I love to do.
            </span>
          </li>
          <li>
            <span className="block text-left text-2xl font-light text-white">
              I always felt that I was not doing what I am good at.
            </span>
          </li>
          <li>
            <span className="block text-left text-2xl font-light text-white">
              I always felt that I was not doing what I am passionate about.
            </span>
          </li>
          <li>
            <span className="block text-left text-2xl font-light text-white">
              I always felt that I was not doing what I am meant to do.
            </span>
          </li>
          <li>
            <span className="block text-left text-2xl font-light text-white">
              I always felt that I was not doing what I am here to do.
            </span>
          </li>
        </ul>
        <span className="my-[28px] block text-5xl font-bold text-white">
          My mission
        </span>
        <span className="block text-left text-2xl font-light text-white">
          This situation I described is the same I see in a lot of people. And
          my mission is to guide them, trough example. I want to show people
          that they can do whatever they want, and that they can be whoever they
          want.
        </span>
      </div>
    </div>
  );
};

export default Me;

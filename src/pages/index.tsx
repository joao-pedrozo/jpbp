import { type NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[#0f0f0f]">
      {/* <span className="mb-[88px] text-6xl font-bold text-white">.</span> */}
      <a className="animate-pulse cursor-pointer text-5xl font-bold text-white">
        👨‍💼📈💵💰
      </a>
      <Link href="/me">
        <span className="my-[75px] block text-5xl font-bold text-white">
          ☯️
        </span>
      </Link>
      <a className="animate-pulse cursor-pointer text-5xl font-bold text-white">
        🎨📈💵💰
      </a>
    </div>
  );
};

export default Home;

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <footer className="h-92 relative my-10 w-full overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-900 md:h-56">
      <div className="flex h-full flex-col-reverse items-center justify-center font-sans font-bold text-white md:flex md:flex-row">
        <div className="z-50 mt-10 flex flex-col  items-center ">
          <p className="font-serif text-4xl font-light">Enjoy Watching</p>
          <p className="font-serif font-light tracking-wider">
            Explore. Watch. Discuss
          </p>
          <div className="z-50 mt-10 flex gap-2 font-light text-white/50 ">
            <Link
              href="https://github.com/imhalid/hikarix"
              className="transition-all hover:text-white"
              target="_blank"
            >
              Github
            </Link>
            <Link
              href="https://twitter.com/halidislm"
              className="transition-all hover:text-white"
              target="_blank"
            >
              Twitter
            </Link>
            <Link
              href="mailto:imhalid@icloud.com"
              className="transition-all hover:text-white"
              target="_blank"
            >
              Mail
            </Link>
          </div>
        </div>
      </div>

      <div className="invisible absolute left-0 top-0 h-[266px] w-[500px] sm:invisible lg:visible">
        <Image
          src="/giphy-1.gif"
          layout=""
          width={500}
          height={266}
          alt="gif1"
        />
      </div>
      <div className="relative mt-10 h-48  w-full lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:h-[266px] lg:w-[500px]">
        <div className="visible absolute top-0 z-30 h-full w-full bg-gradient-to-b from-neutral-900 via-transparent to-transparent lg:hidden"></div>
        <Image
          src="/giphy-3.gif"
          layout=""
          width={500}
          height={266}
          alt="gif1"
          className="w-full object-cover"
        />
      </div>
      <div className="z-5 invisible absolute left-0 top-0 h-[266px] w-[500px] bg-gradient-to-l from-neutral-900 via-transparent to-transparent lg:visible"></div>
      <div className="z-5 invisible absolute right-0 top-0 h-[266px] w-[500px] bg-gradient-to-r from-neutral-900 via-transparent to-transparent lg:visible"></div>
    </footer>
  );
}

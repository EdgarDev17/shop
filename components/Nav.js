import Image from "next/image";
import Link from "next/link";
import logo from "../public/EdgarDev.png"

const Nav = () => {
  return (
    <>
      <nav
        className={
          "w-full h-10 mt-2.5 flex flex-row justify-between items-center fixed"
        }>  
        <Link href={"/landingpage"} passHref>

          {/* <Image
            src={logo}
            alt={'this is the company logo'}
            placeholder={'blur'}
            width={'200'}
            height={'200'}
          /> */}
          <a className="ml-5" >Home</a>

        </Link>

        <Link className={"hover:font-bold"} href={"/about"}>
          <a>Nosotros</a>
        </Link>

        <Link className={"hover:font-bold"} href={"/socialmedia"}>
          <a>Redes Sociales</a>
        </Link>
      </nav>
    </>
  );
};

export { Nav };

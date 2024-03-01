import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Items: FunctionComponent<{
  page: string;
  setPage: Function;
  name: string;
  route: string;
}> = ({ page, setPage, route, name }) => {
  return page !== name ? (
    <Link href={route}>
      <a>
        <span onClick={() => setPage(name)} className="hover:text-green-500 dark:text-Purple dark:hover:text-DarkPurple">
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [page, setPage] = useState<string>("");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setPage("About");
    if (pathname === "/experience") setPage("Experience");
    if (pathname === "/resume") setPage("Resume");
  }, []);
  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-green-500 border-b-4 border-green-500 md:text-2xl dark:text-Purple dark:border-Purple">
        {page}
      </span>
      <div className="flex space-x-3 text-lg ">
        <Items page={page} setPage={setPage} name="About" route="/" />
        <Items page={page} setPage={setPage} name="Experience" route="/experience" />
        <Items page={page} setPage={setPage} name="Resume" route="/resume" />
      </div>
    </div>
  );
};

export default Navbar;

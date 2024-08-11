import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="my-5 text-center">
      <h1 className="font-light text-md">
        Made by{" "}
        <Link href="https://github.com/jcarbone5" className="font-semibold">
          jcarbone5
        </Link>
      </h1>
    </footer>
  );
};

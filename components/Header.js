// import { NAME, ORG_IMAGE_URL } from "../lib/constants";
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import sourcehomesSmall from "../public/sourcehomesSmall.png"

export default function Header() {
  return (
    <>
      <head>
        <meta charset="UTF-8"/>
        <meta name="description" content="Companies to buy my home near me. Real estate investment company. Sell my home for cash."/>
        <meta name="keywords" content="Real Estate Investing, Buy home for cash, Sell my home, Companies that will buy my home"/>
        <meta name="author" content="Cofund Capital"/>
        <title>We buy houses, sell your home fast.</title>
      </head>
      <header className={styles.header_style}>
        <div className="px-4 mx-auto sm:pr-0 max-w-screen-2xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-10">
              <Image
                className="h-8 w-20 sm:h-10"
                src={sourcehomesSmall}
                alt="Logo design"
              />
            </div>

            <div className="items-center justify-end hidden space-x-8 sm:flex">
              <a href="tel:919-589-2542" className="text-sm font-medium">
                919-589-2542
              </a>

              <a href="#name" className={styles.header_aside}>
                Get in touch
              </a>
            </div>

            <div className="sm:hidden">
              <h1><a href="tel:919-589-2542">919-589-2542</a></h1>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

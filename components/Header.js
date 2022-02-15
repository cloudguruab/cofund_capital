// import { NAME, ORG_IMAGE_URL } from "../lib/constants";
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import sourcehomesSmall from "../public/sourcehomesSmall.png"

export default function Header() {
  return (
    <>
      <head>
      <title>We buy houses, get an offer today!</title>
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

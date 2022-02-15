// imports go below
import ContactForm from "./Contact";
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import photo from "../public/photo.jpeg"
import home from "../public/home.jpeg"

function PreviewSection() {
  return (
    <section className="relative bg-white">
      <Image
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src="./photo.jpeg"
        alt="Couple on a bed with a dog"
      />

      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-gray-200 sm:to-transparent"></div>

      <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className={styles.text_scheme}>
            We buy houses. <strong className="font-extrabold text-rose-700 sm:block">Get your offer today!</strong>  
          </h1>

          <p className={styles.body_scheme}>
            Our mission is to keep it simple. Keeping the process efficient,
            fair, and reliable. Doing business as Source Homes and remaining the
            source for your needs!
          </p>

          <div className="flex flex-wrap gap-4 mt-8 text-center">
            <a
              className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-blue-500 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring"
              href="#name"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardSection() {
  return (
    <section className="bg-gray-100">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
        <h1 className={styles.text_scheme}>
          Real Estate 
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-12 lg:grid-cols-2">
          <div className="relative h-64 lg:h-auto">
            <Image
              className="absolute inset-0 object-cover w-full lg:h-80 sm:h-full"
              src="./home.jpeg"
              alt="Image of a living room with chairs"
            />
          </div>

          <div>
          <h2 className={styles.text_scheme_two}>Companies that buy houses</h2>
            <p className={styles.body_scheme}>
              We add value by bringing our investors directly to you. Not sure where to start, no worries about that. We will provide you with all the neccessary information to get started.
            </p>
            <h2 className={styles.text_scheme_two}>Sell my home for cash</h2>
            <p className={styles.body_scheme}>
              If you&apos;re a property owner looking to sell your property, but you don&apos;t have the right team behind you then we&apos;re here to help!
            </p>
            <h2 className={styles.text_scheme_two}>Houses to buy near me</h2>
            <p className={styles.body_scheme}>
              Helping stakeholders is what we do, whether you&apos;re selling your home or looking for a new investment we are here to serve you. 
            </p>
          </div>
        </div>
      </div>
      <ContactForm/>
    </section>
  );
}

export { PreviewSection };
export { CardSection };

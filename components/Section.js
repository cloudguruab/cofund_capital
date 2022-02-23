// imports go below
import ContactForm from "./Contact";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Home from "../public/home.jpeg";

function NotificationSection() {
  return (
    <aside className="p-3 text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <div className="flex items-center justify-center">
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>

        <a
          className="ml-1.5 text-sm font-medium underline underline-offset-1"
          href="https://calendly.com/adrian-cofund-capital/30min"
        >
          Need to sell home fast, or looking for your next investment? &rarr;
        </a>
      </div>
    </aside>
  );
}

function CTASection() {
  return (
    <div className={styles.background_color}>
      <NotificationSection/>
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className={styles.text_scheme_two}>
          <span className="block">We buy houses. </span>
          <span className="block">Get your offer today!</span>
        </h2>
        <p className={styles.body_scheme}>
          Our mission is to keep it simple. Keeping the process efficient, fair,
          and reliable. Doing business as Source Homes and remaining the source
          for your needs!
        </p>
      </div>
    </div>
  );
}

function CardSection() {
  return (
    <section className={styles.cta_color}>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
        <h1 className={styles.text_scheme}>Real Estate</h1>

        <div className="grid grid-cols-1 gap-8 mt-12 lg:grid-cols-2">
          <div className="relative h-64 lg:h-auto">
            <Image
              className="absolute inset-0 object-cover w-full lg:h-80 sm:h-full"
              src={Home}
              alt="Image of a living room with chairs"
            />
          </div>

          <div>
            <h2 className={styles.text_scheme_two}>
              Companies that buy houses
            </h2>
            <p className={styles.body_scheme}>
              We add value by bringing our best at every corner. Not sure
              where to start, no worries about that. We will provide you with
              all the neccessary information to get started.
            </p>
            <h2 className={styles.text_scheme_two}>Sell my home for cash</h2>
            <p className={styles.body_scheme}>
              If you&apos;re a property owner looking to sell your property, but
              you don&apos;t have the right team behind you then we&apos;re here
              to help!
            </p>
            <h2 className={styles.text_scheme_two}>Houses to buy near me</h2>
            <p className={styles.body_scheme}>
              Helping stakeholders is what we do, whether you&apos;re selling
              your home or looking for a new investment we are here to serve
              you.
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}

export { CardSection };
export { CTASection };
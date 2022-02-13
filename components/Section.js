// imports go below

function MainSection() {
  return (
    <section>
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <dl class="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <dt class="text-xl font-medium">Lorem ipsum dolor sit amet?</dt>

            <dd class="pt-4 mt-4 border-t border-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsa
              impedit rerum adipisci nihil, ab id dolor animi quia nesciunt.
              Sequi nulla voluptas delectus aspernatur quidem ullam, placeat
              maxime, nesciunt expedita est minima beatae. Qui nostrum nemo sed.
              Aliquid, est facilis fuga ipsa asperiores amet nihil harum impedit
              modi dolor.
            </dd>
          </div>

          <div>
            <dt class="text-xl font-medium">Lorem ipsum dolor sit amet?</dt>

            <dd class="pt-4 mt-4 border-t border-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsa
              impedit rerum adipisci nihil, ab id dolor animi quia nesciunt.
              Sequi nulla voluptas delectus aspernatur quidem ullam, placeat
              maxime, nesciunt expedita est minima beatae. Qui nostrum nemo sed.
              Aliquid, est facilis fuga ipsa asperiores amet nihil harum impedit
              modi dolor.
            </dd>
          </div>

          <div>
            <dt class="text-xl font-medium">Lorem ipsum dolor sit amet?</dt>

            <dd class="pt-4 mt-4 border-t border-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsa
              impedit rerum adipisci nihil, ab id dolor animi quia nesciunt.
              Sequi nulla voluptas delectus aspernatur quidem ullam, placeat
              maxime, nesciunt expedita est minima beatae. Qui nostrum nemo sed.
              Aliquid, est facilis fuga ipsa asperiores amet nihil harum impedit
              modi dolor.
            </dd>
          </div>

          <div>
            <dt class="text-xl font-medium">Lorem ipsum dolor sit amet?</dt>

            <dd class="pt-4 mt-4 border-t border-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsa
              impedit rerum adipisci nihil, ab id dolor animi quia nesciunt.
              Sequi nulla voluptas delectus aspernatur quidem ullam, placeat
              maxime, nesciunt expedita est minima beatae. Qui nostrum nemo sed.
              Aliquid, est facilis fuga ipsa asperiores amet nihil harum impedit
              modi dolor.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function PreviewSection() {
  return (
    <section class="relative bg-white">
      <img
        class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src="https://images.unsplash.com/photo-1601758003122-53c40e686a19"
        alt="Couple on a bed with a dog"
      />

      <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

      <div class="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div class="max-w-xl text-center sm:text-left">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            Let us find your
            <strong class="font-extrabold text-rose-700 sm:block">
              Forever Home.
            </strong>
          </h1>

          <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div class="flex flex-wrap gap-4 mt-8 text-center">
            <a
              class="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-green-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              class="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// This component uses @tailwindcss/aspect-ratio

// yarn add @tailwindcss/aspect-ratio
// npm install @tailwindcss/aspect-ratio

// plugins: [require('@tailwindcss/aspect-ratio')]
function TitleSection() {
  return (
    <article>
      <div class="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:px-8">
        <h1 class="max-w-3xl text-3xl font-bold sm:text-5xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          debitis?
        </h1>

        <div class="aspect-w-16 aspect-h-9">
          <img
            class="object-cover rounded-xl"
            src="https://www.hyperui.dev/photos/man-2.jpeg"
            alt=""
          />
        </div>

        <div class="grid items-start grid-cols-1 gap-12 mt-12 lg:grid-cols-3">
          <div class="flex items-center space-x-3">
            <img
              class="object-cover w-16 h-16 rounded-lg shadow-sm"
              src="https://www.hyperui.dev/photos/man-4.jpeg"
              alt=""
            />

            <dl class="flex flex-col space-y-0.5 text-gray-500">
              <div class="inline-flex">
                <dt class="sr-only">Author</dt>
                <dd>Alfie Wickers</dd>
              </div>

              <div class="inline-flex">
                <dt class="sr-only">Published on</dt>
                <dd class="text-sm">Mar 30, 2021</dd>
              </div>
            </dl>
          </div>

          <div class="lg:col-span-2">
            <div class="prose max-w-none">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus reprehenderit sit perferendis culpa voluptas laborum
                omnis aliquid quibusdam eveniet laboriosam ea commodi, ex quae
                repellat asperiores tenetur consequuntur dolorem. Ea!
              </p>

              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                dicta!
              </h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                facere tenetur repellendus minima reiciendis est culpa eos illo
                voluptatem! Modi soluta veritatis ipsam labore voluptatem
                asperiores dolor rem porro dolores.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                repudiandae temporibus maxime assumenda blanditiis fugit neque
                doloremque aut sit vero!
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function CardSection() {
  return (
    <aside class="p-12 bg-gray-100 rounded-xl sm:p-16 lg:p-24">
      <div class="max-w-xl mx-auto text-center">
        <p class="text-sm font-medium text-gray-500">
          Lorem ipsum dolor sit amet.
        </p>

        <p class="mt-2 text-3xl font-bold sm:text-5xl">
          Lorem ipsum dolor sit amet consectetur.
        </p>

        <div class="mt-8 sm:items-center sm:justify-center sm:flex">
          <a
            href=""
            class="block px-5 py-3 font-medium text-white bg-blue-500 rounded-lg shadow-xl hover:bg-blue-600"
          >
            Start free trial
          </a>

          <a
            href=""
            class="block px-5 py-3 mt-4 font-medium text-blue-500 rounded-lg hover:text-blue-600 sm:mt-0"
          >
            Schedule a demo
          </a>
        </div>
      </div>
    </aside>
  );
}

export { MainSection };
export { PreviewSection };
export { TitleSection };
export { CardSection };

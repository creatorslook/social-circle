import styles from "../styles/global";

const InfoDetails = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: any;
}) => {
  function handleOpen() {
    setOpen((prev: any) => !prev);
  }

  return (
    <div className={isOpen ? styles.show : styles.hide}>
      <div className="relative w-full h-full max-w-2xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex text-center items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className=" text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
              Welcome To The Social Circle
            </h3>
            <button
              onClick={handleOpen}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="staticModal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              A fullstack chat application built with React, Tailwind,
              Typescript, Firebase and Vite. Streamlined with development made
              faster with tailwind ui kit, Flowbite and their free components.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Let's chat on <a href="https://www.linkedin.com/in/emmanuelalozie/" className="text-blue-500 underline">Linkedin</a>
            </p>
          </div>

          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={handleOpen}
              data-modal-hide="staticModal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Ok
            </button>
            <button
              data-modal-hide="staticModal"
              type="button"
              onClick={handleOpen}
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoDetails;

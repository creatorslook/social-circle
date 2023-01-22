import { CheckCircle } from "react-feather";
import styles from "../styles/global";

const Success = ({
  setSuccess,
  success,
  successMessage,
}: {
  setSuccess: any;
  success: boolean;
  successMessage: string;
}) => {
  function handleOpen() {
    setSuccess((prev: any) => !prev);
  }

  return (
    <div
      id="popup-modal"
      className={success === true ? styles.show : styles.hide}
    >
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            onClick={handleOpen}
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <svg
              aria-hidden="true"
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
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <CheckCircle className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {successMessage}
            </h3>
            <button
              data-modal-hide="popup-modal"
              type="button"
              onClick={handleOpen}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              Ok
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              onClick={handleOpen}
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;

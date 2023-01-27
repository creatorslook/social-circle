import { Info, Navigation } from "react-feather";
import useAuth from "../../hooks/useAuth";
import useAuthStatus from "../../hooks/useAuthStatus";
import { auth, db } from "../../lib/firebase";
import { addDoc, collection , serverTimestamp} from "firebase/firestore";
import { useState } from "react";
import Error from "../modals/Error";
import Success from "../modals/Success";
import InfoDetails from "../modals/Info";
import Textbox from "../chat/Textbox";

const Header = () => {
  const [message, setMessage] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);
  const authStatus = useAuthStatus();



  const username = auth.currentUser?.displayName;
  const email = auth.currentUser?.email;
  const photoURL:any = auth.currentUser?.photoURL;



  async function sendMessage() {
    if (message === "") {
      alert("Message can't be empty");
    } else {
      await addDoc(collection(db, "Messages"), {
        message: message,
        name: username,
        email: email,
        photoURL: photoURL,
        timestamp: serverTimestamp()
      })
        .then(() => {
          setMessage("");
        })
        .catch(() => {
          handleOpen(setError);
          setMessage("");
        });
    }
  }
  async function sendFeedback() {
    if (feedback === "") {
      alert("You can't send an empty feedback");
    } else {
      await addDoc(collection(db, "Feedback"), {
        message: feedback,
        name: username,
        email: email,
      })
        .then(() => {
          handleOpen(setSuccess);
          setFeedback("");
        })
        .catch(() => {
          handleOpen(setError);
          setFeedback("");
        });
    }
  }
  function handleOpen(setState: any) {
    setState((prev: any) => !prev);
  }



  return (
    <>
      <Error
        setError={setError}
        error={error}
        errorMessage="An error occured, Try again in a few seconds"
      />
      <Success
        setSuccess={setSuccess}
        success={success}
        successMessage="Message successfully sent"
      />
      <InfoDetails setOpen={setOpen} isOpen={isOpen}/>
      
      
      <header aria-label="Page Header" className="border-b-[1px]">
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end gap-4">
            <div className="flex items-center gap-4">
              {authStatus === true ? (
                <div className="relative">
                  <label className="sr-only"> Search </label>

                  <input
                    className="h-10 w-full rounded-md outline-none bg-white pl-4 pr-10 text-sm border-[1px] sm:w-56"
                    id="search"
                    type="search"
                    value={feedback}
                    onChange={(e) => {
                      setFeedback(e.target.value);
                    }}
                    placeholder="Message Us..."
                  />

                  <button
                    type="button"
                    onClick={sendFeedback}
                    className="absolute top-1/2 right-1 -translate-y-1/2 rounded-md bg-blue-700 p-2 text-white"
                  >
                    <span className="sr-only">Submit Search</span>
                    <Navigation width="15px" height="15px" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    useAuth();
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </button>
              )}

              <button
                onClick={() => {handleOpen(setOpen)}}
                className="block shrink-0 rounded-md bg-white p-2.5 text-blue-700 hover:bg-neutral-100 border-[1px]"
              >
                <span className="sr-only">Notifications</span>
                <Info width="18px" height="18px" />
              </button>
            </div>

            <span
              aria-hidden="true"
              className="block h-6 w-px rounded-full bg-gray-200"
            ></span>

            <a href="#" className="block shrink-0">
              <span className="sr-only">Profile</span>
              {authStatus === true ? (
                <img
                  alt="Blue Gradient"
                  src={photoURL}
                  className="h-9 w-9 border-2 border-blue-700 rounded-full object-cover"
                />
              ) : (
                <img
                  alt="Blue Gradient"
                  src="https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80"
                  className="h-9 w-9 border-2 border-blue-700 rounded-full object-cover"
                />
              )}
            </a>
          </div>

          <div className="mt-8">
            <h1 className="text-2xl font-bold sm:text-3xl">
              {authStatus === true
                ? `Welcome Back, ${username}!`
                : "Welcome To Social Circle"}
            </h1>

            <p className="mt-1.5 text-sm">
              We're happy to have you on our platform, feel free to share your
              opinions
            </p>
          </div>
        </div>
      </header>

      {authStatus && <Textbox message={message} setMessage={setMessage} sendMessage={sendMessage} />}
    </>
  );
};

export default Header;

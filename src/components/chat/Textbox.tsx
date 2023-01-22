import { Navigation } from "react-feather";

const Textbox = ({
  message,
  setMessage,
  sendMessage
}: {
  message: string;
  setMessage: any;
  sendMessage: any
}) => {
  return (
    <div className="fixed flex justify-center items-center w-full bottom-0 bg-white h-[9vh] border-t-[1px] z-10">
      <div className="relative mx-2">
        <label className="sr-only"> Input </label>

        <input
          className="h-10 w-full rounded-md outline-none bg-white pl-4 pr-10 text-sm border-[1px] sm:w-56 xl:w-64"
          id="search"
          type="search"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Write your thoughts..."
        />

        <button
          type="button"
          onClick={sendMessage}
          className="absolute top-1/2 right-1 -translate-y-1/2 rounded-md bg-blue-700 p-2 text-white"
        >
          <span className="sr-only">Submit Search</span>
          <Navigation width="15px" height="15px" />
        </button>
      </div>
    </div>
  );
};

export default Textbox;

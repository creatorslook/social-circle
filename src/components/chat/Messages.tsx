import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import lodash from "lodash";

const Messages = () => {
  const [messages, setMessages] = useState<any>([]);
  const total:number = 15

  useEffect(() => {
    async function getMessages() {
      const querySnapshot = await getDocs(collection(db, "Messages"));
      setMessages(
        querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    }
    getMessages();
  });

  const ordereredMessage = lodash.orderBy(messages, ["timestamp"], ["asc"]);
  const handledMessageQuery = lodash.sampleSize(ordereredMessage, total)

  return (
    <div className="mx-auto max-w-full px-4 py-8 sm:px-6 lg:px-8 overflox-x-none mb-32">
      {ordereredMessage.map((message: any) => {
        return (
          <div className="flex items-center mb-5">
           
              <img
                className="w-10 h-10 rounded-full"
                src={message.photoURL}
                alt=""
              />
              

            <div className="flex flex-col ml-3">
              <h1 className="font-semibold">{message.name}</h1>
              <div>
                <p>{message.message}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;

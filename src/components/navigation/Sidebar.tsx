// import { Settings, Home, HelpCircle, Info } from "react-feather";
// import useAuthStatus from "../../hooks/useAuthStatus";
// import { auth } from "../../lib/firebase";

// const Sidebar = () => {
//   const authStatus = useAuthStatus();
//   const username = auth.currentUser?.displayName;
//   const photoURL = auth.currentUser?.photoURL;

//   const span =
//     "opacity-0 text-sm font-medium group-hover:opacity-100 transition absolute bottom-[50px] md:bottom-0 md:left-[55px] bg-white px-3 py-1 rounded flex items-center bg-white border-[1px]";
//   const link =
//     "group mx-4 md:mx-0 flex items-center justify-center relative my-5 cursor-pointer hover:bg-blue-700 rounded p-1 transition";

//   return (
//     <nav className="w-full md:w-[45px] fixed bottom-0 md:left-0 h-[30px] md:h-[100vh] border-t-[1px] md:border-r-[1px] flex md:flex-col justify-around md:justify-between py-5 md:py-3 items-center bg-white z-50">
//       <div className="hidden md:flex md:flex-col items-center">
//         {authStatus === true ? (
//           <img
//             alt="photoURL"
//             src={photoURL}
//             className="h-6 w-6 border-2 border-blue-700 rounded-full object-cover"
//           />
//         ) : (
//           <img
//             alt="Blue Gradient"
//             src="https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80"
//             className="h-6 w-6 border-2 border-blue-700 rounded-full object-cover"
//           />
//         )}
//       </div>

//       <div className="flex md:flex-col">
//         <a className={link}>
//           {" "}
//           <HelpCircle width="20px" className="group-hover:stroke-white" />{" "}
//           <span className={span}>Help</span>{" "}
//         </a>
//         <a className={link}>
//           {" "}
//           <Settings width="20px" className="group-hover:stroke-white" />{" "}
//           <span className={span}>Settings</span>{" "}
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Sidebar;

// import React from "react";

// export type ProjectCardProps = {
//   link: string;
//   name: string;
//   description: string;
//   techologies?: string[];
// };

// export default function ProjectCard({
//   link,
//   description,
//   name,
//   techologies,
// }: ProjectCardProps) {
//   return (
//     <a
//       className="no-underline duration-100 group-hover:blur-sm hover:!blur-none"
//       href={link}
//     >
//       <div className="group my-2 flex w-full rounded-sm border border-stone-500 px-6 py-4 duration-100 hover:my-0 hover:border-orange-600 hover:bg-orange-300/5 hover:py-6">
//         <div className="w-full">
//           <h2 className="text-lg font-bold text-stone-300">{name}</h2>
//           <p className="mb-4 text-stone-400">{description}</p>
//           {techologies && (
//             <>
//               <p className="mb-1 font-bold text-stone-300">technologies</p>
//               <div className="flex flex-wrap gap-3">
//                 {techologies.map((item) => (
//                   <p
//                     className="rounded-sm bg-stone-900 px-2 py-1 text-stone-400"
//                     key={item}
//                   >
//                     {item}
//                   </p>
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//         <svg
//           className="text-stone-500 group-hover:text-orange-600"
//           stroke="0.5"
//           width="20"
//           height="20"
//           viewBox="0 0 15 15"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
//             fill="currentColor"
//             fillRule="evenodd"
//             clipRule="evenodd"
//           ></path>
//         </svg>
//       </div>
//     </a>
//   );
// }

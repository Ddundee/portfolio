// "use client";

// import React from "react";
// import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
// import { toast } from "sonner";

// const contactFormSchema = z.object({
//   firstName: z.string().min(2).max(50),
//   lastName: z.string().min(2).max(50),
//   email: z.string().email(),
//   message: z.string().max(1000),
// });

// export default function ContactForm() {
//   const form = useForm<z.infer<typeof contactFormSchema>>({
//     resolver: zodResolver(contactFormSchema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       message: "",
//     },
//   });

//   function onSubmit(values: z.infer<typeof contactFormSchema>) {
//     console.log(values);
//     toast.loading("submitting form...", {
//       id: "contact-form",
//       duration: 1000,
//     });
//   }

//   return (
//     <Form {...form}>
//       <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
//         <div className="flex flex-wrap gap-2">
//           <div className="w-full min-w-xs md:w-[calc(50%-4px)]">
//             <FormField
//               control={form.control}
//               name="firstName"
//               render={({ field }) => (
//                 <FormItem>
//                   <label className="peer-active::text-stone-100 text-sm text-stone-300">
//                     first name
//                   </label>
//                   <FormControl>
//                     <Input placeholder="dan b." {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <div className="w-full min-w-xs md:w-[calc(50%-4px)]">
//             <FormField
//               control={form.control}
//               name="lastName"
//               render={({ field }) => (
//                 <FormItem>
//                   <label className="peer-active::text-stone-100 text-sm text-stone-300">
//                     last name
//                   </label>
//                   <FormControl>
//                     <Input placeholder="cooper" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//         </div>
//         <div className="w-full">
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <label className="peer-active::text-stone-100 text-sm text-stone-300">
//                   email
//                 </label>
//                 <FormControl>
//                   <Input
//                     type="email"
//                     placeholder="dbcooper1@missing.com"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <div className="w-full">
//           <FormField
//             control={form.control}
//             name="message"
//             render={({ field }) => (
//               <FormItem>
//                 <label className="peer-active::text-stone-100 text-sm text-stone-300">
//                   message
//                 </label>
//                 <FormControl>
//                   <Textarea
//                     placeholder="d. b. cooper jumped off a plane. he is yet to be found."
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <button
//           type="submit"
//           className="rounded-sm border border-stone-300 px-4 py-1 text-stone-100 duration-100 hover:border-orange-600 hover:bg-orange-300/5"
//         >
//           submit
//         </button>
//       </form>
//     </Form>
//   );
// }

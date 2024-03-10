"use client";

import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import QuoteCard from "./components/quoteCard";

export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    handleToastDismiss();
    setPageLoaded(true)
  }, [])

  if(!pageLoaded) return <Loading />;
  else return (
    <div>Hello</div>
  )
}

let handleToastDismiss

function Loading() {
  const toastRef = useRef(null);

  const handleDismiss = () => {
    if (toastRef.current !== null) {
      toast.dismiss(toastRef.current);
      toastRef.current = null;
    }
  }

  useEffect(() => {
    if (toastRef.current === null) {
      toastRef.current = toast((t) => <QuoteCard />, {
        duration: Infinity,
      });
    }
    
    handleToastDismiss = handleDismiss;
    return handleDismiss;
  }, []);
  return (
    <div>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: 'none',
            boxShadow: 'none',
            padding: '0',
            margin: '0',
            border: 'none',
          },
        }}

      />

    </div>
  );
}

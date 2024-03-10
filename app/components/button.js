
"use client";
export default function Button({ action, children }) {


    return (
     <div className="w-max h-max">
        <div className={`px-4 py-2 bg-[#170202] text-white rounded-[6px] duration-100 origin-center active:scale-95 hover:opacity-70`} onClick={() => {
            action();
        }}>{children}</div>
        </div>
    )
  }
  
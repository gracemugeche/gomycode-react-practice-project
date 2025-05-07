import React from "react";

export function SecondaryButton ({children}) {
  return (
    <button className="bg-slate-600 text-white px-6 py-3 rounded-xl m-4 text-2xl font-bold  ">
       {children}
    </button>
  );
}

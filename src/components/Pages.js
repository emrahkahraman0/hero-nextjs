"use client";
import { usePathname } from "next/navigation";

function Pages() {
  const pathname = usePathname();

  return (
    <>
      <div id="page">
        <h6>{pathname}</h6>
      </div>
      {/*page#*/}
    </>
  );
}

export default Pages;

import { Outlet, useLoaderData } from "react-router-dom";
import { getMenu } from "../services/apiMenu";
import MenuItem from "./MenuItem";
import { useEffect, useState } from "react";

export default function Menu() {
  const menu = useLoaderData();
  const [width, setWidth] = useState(0); //To update the width state based on the device

  function updateWidth() {
    const width = window.innerWidth;
    setWidth(width);
  }

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="flex flex-col tablet:grid tablet:grid-cols-[70%_30%] justify-between tablet:gap-10 gap-4 px-4 py-6 bg-rose-50 tablet:px-14 tablet:py-12">
      <ul className="flex flex-col gap-4 mb-8">
        <h1 className="text-3xl text-stone-950 font-bold mb-8">Desserts</h1>
        <div className="tablet:grid tablet:grid-cols-2 tablet:gap-8 desktop:grid-cols-3 ">
          {menu.map((item) => (
            <MenuItem item={item} key={item.id} width={width} />
          ))}
        </div>
      </ul>
      <Outlet />
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

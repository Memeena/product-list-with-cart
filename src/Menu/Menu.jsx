import { Outlet, useLoaderData } from "react-router-dom";
import { getMenu } from "../services/apiMenu";
import MenuItem from "./MenuItem";

export default function Menu() {
  const menu = useLoaderData();
  return (
    <div className="flex flex-col tablet:grid tablet:grid-cols-[70%_30%] justify-between tablet:gap-10 gap-4 px-4 py-6 bg-rose-50 tablet:px-14 tablet:py-12">
      <ul className="flex flex-col gap-4 mb-8">
        <h1 className="text-3xl text-stone-950 font-bold mb-8">Desserts</h1>
        <div className="tablet:grid tablet:grid-cols-2 tablet:gap-8 desktop:grid-cols-3 ">
          {menu.map((item) => (
            <MenuItem item={item} key={item.id} />
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

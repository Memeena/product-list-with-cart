import { Outlet, useLoaderData } from "react-router-dom";
import { getMenu } from "../services/apiMenu";
import MenuItem from "./MenuItem";

export default function Menu() {
  const menu = useLoaderData();
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 px-4 py-6 bg-rose-50">
      <ul className="flex flex-col gap-4 mb-8">
        <h1 className="text-3xl text-stone-950 font-bold mb-8">Desserts</h1>
        {menu.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

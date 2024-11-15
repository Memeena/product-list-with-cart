// const API_URL = "https://memeena.github.io/product-list-json";

import data from "../data/data.json";
export async function getMenu() {
  console.log("inside menu");
  console.log(data.menu);
  // const res = await fetch(`${API_URL}`);
  // console.log(res);
  // // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  // if (!res.ok) throw Error("Failed getting menu");
  // const data = await res.blob();
  return data.menu;
}

// export { data };

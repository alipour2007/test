import { cookies } from "next/headers";

function test() {
  cookies().get("a");
  return {};
}

export default async function getData() {


 
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  let data = await fetch("https://localhost:7228/api/portal/home/test", { next: { revalidate: 10 } })
  let v = (await data.json()).v;
  return v;
}

export async function getData2() {

  cookies().get("");
  await wait(5000);
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  let data = await fetch("https://localhost:7228/api/portal/home/test")
  let v = (await data.json()).v;
  return v;
}

export const wait = (ms: number) => {

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random());
    }, ms);
  });
};
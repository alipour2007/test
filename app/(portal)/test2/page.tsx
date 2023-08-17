import { cookies } from "next/headers";
import Link from "next/link";
export const dynamic = "force-dynamic";


const wait = (ms: number) => {

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.random());
        }, ms);
    });
};


const Test = async () => {
    await wait(5000);
    return <>
              <div>        <Link href="/" prefetch={false}>home</Link></div>
        <div>        <Link href="/test1" prefetch={false} >test1</Link></div>
        <div>        <Link href="/test3" prefetch={false} >test3</Link></div>


        {Math.random()}
    </>
}
export default Test;
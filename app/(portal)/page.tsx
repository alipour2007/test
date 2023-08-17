import { cookies } from "next/headers";
import Link from "next/link";
export const revalidate=10;


const IndexPage = async () => {
 

    return <>
        <div>        <Link href="/test1" prefetch={false}>test 1</Link></div>
        <div>        <Link href="/test2" prefetch={false} >test 2</Link></div>
        <div>        <Link href="/test3" prefetch={false} >test 3</Link></div>
        {Math.random()}
    </>
}
export default IndexPage;
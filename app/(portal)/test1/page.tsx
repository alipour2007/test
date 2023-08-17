import CustomLink from "@/app/link";
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
        <div>        <CustomLink href="/" >home</CustomLink></div>
        <div>        <CustomLink href="/test2"  >test2</CustomLink></div>
        <div>        <CustomLink href="/test3" >test3</CustomLink></div>


        {Math.random()}
    </>
}
export default Test;
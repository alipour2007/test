import { wait } from "./fetchHelper";




export default async function ServerComponent(props: any) {

    await wait(5000);


    return (
        <div className="">
            {/* This is cookie {c} */}
            <div>
                {Math.random()}
            </div>
        </div>
    )
}

import {Suspense} from "react";
import List from "@/app/dynamic/List";

export const dynamic = 'force-dynamic'

export default async function Page() {
    return <Suspense fallback={<div className={'h-screen w-full text-4xl flex items-center justify-center'}>Loading.,.</div>}>
        <List />
    </Suspense>
}
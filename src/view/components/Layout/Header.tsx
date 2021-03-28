import React from "react"
import { IStdProps } from "sz-react-support";
import debugMx from "../../../common/debug-mx";
export default function (props: IStdProps) {
    return <header className={props.className}>
        There's the header
    <h2> {debugMx.NAME}</h2>
        <p>{debugMx.DESC}</p>
    </header>
}
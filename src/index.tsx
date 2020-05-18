import React from "react";
import ReactDOM from "react-dom";
import { add } from './add'

interface HelloMessageProps {
  name: string
}
const HelloMessage: React.FC<HelloMessageProps> = ({ name }: HelloMessageProps) => {
  return (<>
    <div>Hello {name}</div>
    <div>1 + 1 = {add(1, 1)}</div>
  </>
  )
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Jane" />, mountNode);
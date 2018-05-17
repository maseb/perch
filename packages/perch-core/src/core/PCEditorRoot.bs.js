

import * as PCRuntime from "./PCRuntime.bs.js";
import * as PCUIEditor from "./PCUIEditor.bs.js";
import * as ReactDOMRe from "reason-react/src/ReactDOMRe.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";

ReactDOMRe.renderToElementWithId(ReasonReact.element(/* None */0, /* None */0, PCUIEditor.make(PCRuntime.make(/* () */0), /* array */[])), "editor");

export {
  
}
/*  Not a pure module */

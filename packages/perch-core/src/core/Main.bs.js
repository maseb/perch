

import * as PCRuntime from "./PCRuntime.bs.js";
import * as PCUIEditor from "./PCUIEditor.bs.js";
import * as ReactDOMRe from "reason-react/src/ReactDOMRe.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";

function main() {
  var runtime = PCRuntime.make(/* () */0);
  ReactDOMRe.renderToElementWithId(ReasonReact.element(/* None */0, /* None */0, PCUIEditor.make(runtime, /* array */[])), "editor");
  return PCRuntime.init(runtime);
}

main(/* () */0);

export {
  main ,
  
}
/*  Not a pure module */

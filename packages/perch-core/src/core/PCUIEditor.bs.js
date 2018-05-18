

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as ReasonReact from "reason-react/src/ReasonReact.js";

var component = ReasonReact.reducerComponent("PCUIEditor");

function make(runtime, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */(function (self) {
              setInterval((function () {
                      return Curry._1(self[/* send */3], /* Bump */0);
                    }), 1000);
              return /* () */0;
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              var v = runtime[/* version */0];
              var bumps = self[/* state */1][/* bumps */1];
              return React.createElement("div", undefined, "Version: " + (String(v) + ("; Bumps: " + (String(bumps) + " "))));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* appSpecification */"",
                      /* bumps */0
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (_, state) {
              return /* Update */Block.__(0, [/* record */[
                          /* appSpecification */state[/* appSpecification */0],
                          /* bumps */state[/* bumps */1] + 1 | 0
                        ]]);
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

export {
  component ,
  make ,
  
}
/* component Not a pure module */

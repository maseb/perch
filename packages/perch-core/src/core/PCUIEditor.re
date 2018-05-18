type state = {
  appSpecification: string,
  bumps: int,
};

type action =
  | Bump;

let component = ReasonReact.reducerComponent("PCUIEditor");

let make = (~runtime: PCRuntime.t, _children) => {
  ...component,
  initialState: () => {appSpecification: "", bumps: 0},
  reducer: (action: action, state: state) =>
    switch (action) {
    | Bump => ReasonReact.Update({...state, bumps: state.bumps + 1})
    },
  didMount: self =>
    Js.Global.setInterval(() => self.send(Bump), 1000) |> ignore,
  render: self => {
    let v = runtime.version
    and bumps = self.state.bumps;
    <div> (ReasonReact.string({j|Version: $(v); Bumps: $(bumps) |j})) </div>;
  },
};
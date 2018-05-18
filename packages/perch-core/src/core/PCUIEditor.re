let component = ReasonReact.statelessComponent("PCUIEditor");

let make = (~runtime: PCRuntime.t, _children) => {
  ...component,
  render: _self => {
    let v = runtime.version;
    <div> (ReasonReact.string({j|Version: $(v)|j})) </div>;
  },
};
let component = ReasonReact.statelessComponent("PCHelloWorld");

let make = _children => {
  ...component,
  render: _self => <div> (ReasonReact.string("Hello")) </div>,
};
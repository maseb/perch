let main = () => {
  let runtime = PCRuntime.make();
  ReactDOMRe.renderToElementWithId(<PCUIEditor runtime />, "editor");
  PCRuntime.init(runtime);
};

main();
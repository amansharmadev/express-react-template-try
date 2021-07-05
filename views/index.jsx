const React = require("react");
const DefaultLayout = require("./layouts/default");

function Index(props) {
  return (
    <DefaultLayout>
      <div>Hello {props.name}</div>
    </DefaultLayout>
  );
}

module.exports = Index;

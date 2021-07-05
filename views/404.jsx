const React = require("react");
const DefaultLayout = require("./layouts/default");

function Error(props) {
  return (
    <DefaultLayout>
      <div>Sorry this URL {props.path} is not found.</div>
    </DefaultLayout>
  );
}

module.exports = Error;

const React = require("react");
const DefaultLayout = require("./layouts/default");

function Error(props) {
  return (
    <DefaultLayout>
      <div>Something went wrong {JSON.stringify(props.error)}</div>
    </DefaultLayout>
  );
}

module.exports = Error;

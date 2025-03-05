import React from "react";

function CustomAuth(OriginalComponent) {
  function NewComponent(props) {
    const custom_auth = "im-allowed-to-do-this";

    return <OriginalComponent {...props} custom_auth={custom_auth} />;
  }
  return NewComponent;
}

export default CustomAuth;

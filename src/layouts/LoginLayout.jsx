import React from "react";

const LoginLayout = (ViewComponent) => {
  return class extends React.Component {
    render() {
      return (
        <>
            <>
                <ViewComponent />
            </>
        </>
      );
    }
  };
};

export default LoginLayout;

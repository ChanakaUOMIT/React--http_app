import React from "react";

const DefaultLayout = (ViewComponent) => {
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

export default DefaultLayout;

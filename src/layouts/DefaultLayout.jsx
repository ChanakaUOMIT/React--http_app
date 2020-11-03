import React from "react";
import Footer from "../components/common/footer/Footer";
import GeneralHeader from "../components/common/GeneralHeader";
import NewsLetter from "../components/other/cta/NewsLetter";

const DefaultLayout = (ViewComponent) => {
  return class extends React.Component {
    render() {
      return (
        <>
           {/* Header */}
           <GeneralHeader />
            <>
                <ViewComponent />
            </>
            {/* NewsLetter */}
            <NewsLetter />

            {/* Footer */}
            <Footer />

        </>
      );
    }
  };
};

export default DefaultLayout;

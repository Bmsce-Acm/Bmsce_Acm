import React from "react";
import Helmet from "react-helmet";

const Title = ({ title }) => {
    return (
        <Helmet>
            <title>BMSCE-ACM | {title}</title>
        </Helmet>
    );
};

export default Title;
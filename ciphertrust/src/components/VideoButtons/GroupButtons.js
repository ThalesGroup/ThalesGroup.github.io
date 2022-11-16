import React from "react";
import PropTypes from "prop-types";
import GithubButton from "./GithubButton";
import ViewDemoButton from "./ViewDemoButton";

const GroupButtons = ({href, demourl}) => (
        <div className="flex flex-row justify-between">
            <GithubButton href={href} />
            {demourl ?
                <ViewDemoButton href={demourl} />
            : <></>}
        </div>
)

GroupButtons.propTypes = {
    href: PropTypes.string.isRequired,
    demourl: PropTypes.string
};

export default GroupButtons;

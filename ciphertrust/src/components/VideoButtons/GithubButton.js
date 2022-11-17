
import React from "react";
import PropTypes from "prop-types";
import {AiFillGithub} from "react-icons/ai"
import Link from "@docusaurus/Link";

const GithubButton = ({href}) => (
        <div>
        <Link href={href}>
            <button style={{backgroundColor: "#171515"}} className="p-2 my-4 rounded-md border-none cursor-pointer text-white">
                GitHub <AiFillGithub className="text-white" />
            </button>
        </Link>
        </div>
)

export default GithubButton;

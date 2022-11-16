
import React from "react";
import PropTypes from "prop-types";
import {AiOutlineArrowRight} from "react-icons/ai"
import Link from "@docusaurus/Link";

const ViewDemoButton = ({href}) => (
        <div>
        <Link href={href}>
            <button className="p-2 my-4 rounded-md border-none cursor-pointer">
                View Demo <AiOutlineArrowRight />
            </button>
        </Link>
        </div>
)

export default ViewDemoButton;

import React from "react";
import PropTypes from "prop-types";
import GroupButtons from "./VideoButtons/GroupButtons";

const YoutubeEmbed = ({ embedId, github, demourl }) => (
  <>
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  <GroupButtons href={github} demourl={demourl} />
  </>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;

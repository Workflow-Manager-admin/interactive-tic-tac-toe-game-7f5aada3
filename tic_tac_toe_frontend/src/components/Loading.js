import React from "react";

// PUBLIC_INTERFACE
function Loading({ inline }) {
  /**
   * Minimal loading indicator.
   * @param {object} inline - If true, renders inline.
   */
  if (inline)
    return <span className="ttt-loading">⏳</span>;
  return (
    <div className="ttt-loading-full">
      <span role="img" aria-label="Loading">⏳</span> Loading...
    </div>
  );
}
export default Loading;

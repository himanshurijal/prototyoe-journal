import React from "react";

const Link = ({ href, className, children }) => {
  const onLinkClicked = event => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    // Change the URL on the browser window to href
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a href={href} className={className} onClick={onLinkClicked}>
      {children}
    </a>
  );
};

export default Link;

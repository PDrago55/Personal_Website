import React from "react";
import { Icon } from "react-icons-kit";
import { circle_up } from "react-icons-kit/ikons/circle_up";
function ArrowUp() {
  //an arrow function to bring the user back to the top of the page.
  const handlleScrollUp = () => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (err) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="icon-container-arrow">
      <Icon
        size={64}
        icon={circle_up}
        onClick={(ev) => {
          handlleScrollUp(ev);
        }}
      />
    </div>
  );
}

export default ArrowUp;

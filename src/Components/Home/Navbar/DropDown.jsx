import React from "react";

const DropDown = () => {
  return (
    <div className="dropdown dropdown-bottom dropdown-hover dropdown-end mx-2">
      <div tabIndex={0} role="button" className="">
        <div className="avatar ">
          <div className="w-12">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-red-400 rounded-box z-[1] w-40 p-2 shadow"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;

import React, { useState, useEffect } from "react";

function ThemeBtn() {
  const [isChecked, setIsChecked] = useState(false);

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    setIsChecked(darkModeStatus); // Update state
  };

  useEffect(() => {
    document.querySelector('html').classList.remove("dark", "light")
    document.querySelector('html').classList.add(isChecked ? "dark" : "light");

  }, [isChecked]);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={onChangeBtn}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900">
        {isChecked ? "Dark Mode" : "Light Mode"}
      </span>
    </label>
  );
}

export default ThemeBtn;

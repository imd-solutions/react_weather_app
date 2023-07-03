const headerNavigation = [
  {
    title: "Home",
    css: "block mb-5 py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500",
    link: "/application",
    type: "link",
  },
  {
    title: "Locations",
    css: "block mb-5 py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500",
    link: "/locations",
    type: "link",
  },
  {
    title: "Logout",
    css: "block mb-5 py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500",
    link: "/logout",
    type: "button",
    btnInfo: {
      btnCss:
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",
      btnTxt: "Logout",
    },
  },
];

export { headerNavigation };

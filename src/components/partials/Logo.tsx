import { NavLink } from "react-router-dom";

interface iLogo {
  icon: string;
}

export default function Logo({ icon }: iLogo) {
  return (
    <NavLink to="/application" className="flex items-center">
      <img src={icon} className="h-8 mr-3" alt="Main Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        WeatherApp
      </span>
    </NavLink>
  );
}

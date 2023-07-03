import { Link } from "react-router-dom";

export default function PartialFooter({
  paragraph,
  linkName,
  linkUrl = "#",
}: any) {
  return (
    <p className="mt-2 text-center text-sm text-gray-600 mt-5">
      {paragraph}{" "}
      <Link
        to={linkUrl}
        className="font-medium text-purple-600 hover:text-purple-500"
      >
        {linkName}
      </Link>
    </p>
  );
}

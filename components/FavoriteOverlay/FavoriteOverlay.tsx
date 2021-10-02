import { HeartIcon } from "@heroicons/react/outline";

interface IProps {
  onClick?: () => void;
}

export default function FavoriteOverlay({ onClick }: IProps) {
  return (
    <a
      onClick={onClick}
      className="absolute top-0 right-0 z-10 p-4 text-secondary-default"
    >
      <HeartIcon
        className="h-6 w-6 stroke-current"
        fill="#fff"
        stroke="#212121"
        strokeWidth={2}
      />
    </a>
  );
}

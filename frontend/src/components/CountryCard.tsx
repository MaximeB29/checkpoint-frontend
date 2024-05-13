import Link from "next/link";
import { RecentCountry } from "./RecentCountry";

type CountryCardProps = {
  country: RecentCountry;
  link: string;
};
export default function Card({
  country: { name, emoji },
  link,
}: CountryCardProps) {
  return (
    <div className="w-[400px]">
      <Link href={link}>
        <div className="shadow-md border rounded-lg  p-6 bg-white mr-3 mb-3">
          <img
            className="h-[200px] w-full object-cover rounded-md"
            src={emoji}
          />
          <div className="flex justify-between pt-6">
            <div className="ad-card-title">{name}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

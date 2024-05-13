import { useCountriesQuery } from "@/graphql/generated/schema";
import CountryCard from "./CountryCard";

export type RecentCountry = {
  name: string;
  emoji: string;
  code: string;
  id: number;
};

export default function RecentCountry() {
  const { data, loading } = useCountriesQuery();
  if (loading) return "Chargement...";

  const countries = data?.countries || [];

  return (
    <section className="">
      {countries.map((country) => (
        <CountryCard
          key={country.id}
          country={country}
          link={`/countries/${country.code}`}
        />
      ))}
    </section>
  );
}

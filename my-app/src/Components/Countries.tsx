import { useQuery, gql } from "@apollo/client";
import { NavLink, useParams } from "react-router-dom";

const CONTINENT_QUERY = gql`
  query Continent($code: ID!) {
    continent(code: $code) {
      countries {
        name
        emoji
      }
    }
  }
`;

export default function ContinentsComponent() {
  const { continentCode } = useParams();
  console.log("récupération du code du continent via l'url:", continentCode);

  const { data, loading, error } = useQuery(CONTINENT_QUERY, {
    variables: { code: continentCode },
  });

  console.log(data);

  interface Country {
    id: number;
    name: string;
    emoji: string;
  }

  if (loading) return <>"Loading..."</>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="countries-list">
      {data.continent.countries.map((country: Country, index: number) => (
        <NavLink className="country" key={index} to={`/info/${country.name}`}>
          <p>{country.emoji}</p>
          <p>{country.name}</p>
        </NavLink>
      ))}
    </div>
  );
}

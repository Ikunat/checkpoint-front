import { useQuery, gql } from "@apollo/client";
import { NavLink } from "react-router-dom";

const CONTINENTS_QUERY = gql`
  query getContinents {
    continents {
      code
      name
    }
  }
`;

export default function ContinentsComponent() {
  const { data, loading, error } = useQuery(CONTINENTS_QUERY);

  interface Continent {
    code: number;
    name: string;
  }

  if (loading) return <>"Loading..."</>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="continents-list">
      {data.continents.map((continent: Continent, index: number) => (
        <NavLink
          className="continent"
          key={index}
          to={`/info/${continent.code}`}
        >
          <p>{continent.name}</p>
        </NavLink>
      ))}
    </div>
  );
}

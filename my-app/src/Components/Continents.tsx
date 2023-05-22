import { useQuery, gql } from "@apollo/client";

const CONTINENTS_QUERY = gql`
  {
    continents {
      code
      name
    }
  }
`;

export default function ContinentsComponent() {
  const { data, loading, error } = useQuery(CONTINENTS_QUERY);

  interface Continent {
    id: number;
    name: string;
  }

  if (loading) return <>"Loading..."</>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="continents-list">
      {data.continents.map((continent: Continent, index: number) => (
        <div className="continent" key={index}>
          <p>{continent.name}</p>
        </div>
      ))}
    </div>
  );
}

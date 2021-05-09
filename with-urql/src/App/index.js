import React from "react";
import { useQuery } from 'urql';

const FILMS_QUERY = `
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;

export default function App() {
  const [result] = useQuery({
    query: FILMS_QUERY,
  });

  const { data, fetching, error } = result;

  if (fetching) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <ul>
        {data.launchesPast.map((launch) => (
          <li key={launch.id}>{launch.mission_name}</li>
        ))}
      </ul>
    </div>
  );
}

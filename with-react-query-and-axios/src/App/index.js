import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const endpoint = 'https://api.spacex.land/graphql/';
const FILMS_QUERY = `
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;

export default function App() {
  const { data, isLoading, error } = useQuery('launches', () => {
    return axios({
      url: endpoint,
      method: 'POST',
      data: {
        query: FILMS_QUERY,
      },
    }).then((response) => response.data.data);
  });

  if (isLoading) return 'Loading...';
  if (error) return <pre>{error.message}</pre>;

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

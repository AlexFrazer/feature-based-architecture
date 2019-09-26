import * as React from 'react';

interface Props {
  readonly name: string;
  readonly id: string;
}

export default function RepositoryCard({ name, id, html_url }) {
  return (
    <div key={id}>
      <h3>{name}</h3>
      <a href={html_url}>View Repository</a>
    </div>
  );
}

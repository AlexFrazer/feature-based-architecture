import * as React from 'react';

interface Props {
  readonly name: string;
  readonly id: string;
}

export default function RepositoryCard({
  name,
  id,
}) {
  return (
    <div key={id}>
      <h1>{name}</h1>
    </div>
  );
}

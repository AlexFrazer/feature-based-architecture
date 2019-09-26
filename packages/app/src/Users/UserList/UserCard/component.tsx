import * as React from 'react';

interface Props {
  readonly id: string;
  readonly avatar_url: string;
  readonly html_url: string;
  readonly login: string;
}

export default function UserCard({ id, avatar_url, html_url, login }: Props) {
  return (
    <div key={id}>
      <div style={{ display: 'flex' }}>
        <div>
          <img height="128" width="128" src={avatar_url} />
        </div>
        <div style={{ flex: 1, marginLeft: 20 }}>
          <h3>{login}</h3>
          <a href={html_url}>View Profile</a>
        </div>
      </div>
    </div>
  );
}

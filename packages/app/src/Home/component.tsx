import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h3>Welcome Traveler</h3>
      <ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/repos">Repos</Link>
        </li>
      </ul>
    </div>
  )
}
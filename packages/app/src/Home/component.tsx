import * as React from 'react';
import { Link } from 'react-router-dom';
import { useQueryParam } from '~/utils/useQueryParams';

export default function Home() {
  const sort = useQueryParam('sort', 'asc');
  React.useEffect(() => {
    console.log(sort);
  }, [sort]);
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
      <Link
        to={{
          pathname: '/',
          search: '?sort=desc',
        }}
      >
        Sort Descending
      </Link>
      <Link
        to={{
          pathname: '/',
          search: '?sort=asc',
        }}
      >
        Sort Ascending
      </Link>
    </div>
  );
}

import * as React from 'react';

export interface Props {
  readonly loading?: boolean;
  readonly data?: any[];
  readonly children?: (item: any, index: number, arr: any[]) => React.ReactChild;
}

/**
 * Renders a list of items
 */
export default function List({
  loading = false,
  data = [],
  children = () => null,
}) {
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <ul>
      {data.map(children)}
    </ul>
  );
}
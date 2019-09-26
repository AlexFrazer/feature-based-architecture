import { useMemo } from 'react';
import { parse } from 'query-string';
import { useLocation } from 'react-router-dom';

export default function useQueryParams() {
  const { search } = useLocation();
  return useMemo(() => parse(search.replace(/^\?/, '')), [search]);
}

import { parse } from 'query-string';
import { pipe, replace, path } from 'ramda';
import { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import defaultTo from 'ramda/es/defaultTo';

const getQuery = pipe(
  replace(/^\?/, ''),
  parse,
);

function useHistoryListen(callback: History.LocationListener) {
  const history = useHistory();
  useEffect(() => {
    return history.listen(callback);
  }, [history, callback]);
}

export function useQueryParams() {
  const [query, setQuery] = useState({});
  const onResponse = useCallback(
    ({ search }) => {
      setQuery(getQuery(search));
    },
    [setQuery],
  );
  useHistoryListen(onResponse);
  return query;
}

/**
 *
 * @param param parameter to find.
 * @param defaultValue Value to use as default if the parameter wasn't found.
 */
export function useQueryParam(param: string, defaultValue?: string | string[]) {
  const [value, setValue] = useState(defaultValue);
  const onListen = useCallback(({ search }) => {
    const query = getQuery(search);
    setValue(
      // @ts-ignore
      pipe(
        path([param]),
        defaultTo(defaultValue),
      )(query),
    );
  }, []);
  useHistoryListen(onListen);
  return value;
}

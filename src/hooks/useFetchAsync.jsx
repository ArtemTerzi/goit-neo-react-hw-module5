import { useState, useCallback } from 'react';

export function useFetchAsync(asyncFunc) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(
    async (...args) => {
      setLoading(true);
      setError(null);

      try {
        const result = await asyncFunc(...args);
        setData(result);
        return result;
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [asyncFunc]
  );

  return { data, loading, error, execute };
}

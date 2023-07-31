import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (page: number, query: string) => {
  const url = 'https://apitest.taxnotes.com/search/v1/query';
  const accessToken =
    'eyJraWQiOiJpSGhLWldneFpmQlNUdDdOc1ExaVJpQ1VrYTNDQTJMYk9iRlE3RTRyWTlNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2YzU3amJrZTUza25xdGx2Y2NkdnA1bWM0YyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiaHR0cHM6XC9cL2FwaXRlc3QudGF4bm90ZXMuY29tXC9zZWFyY2hcL3F1ZXJ5LnJlYWQiLCJhdXRoX3RpbWUiOjE2OTA1NzQwNTYsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX3d6T3BFdnJQRCIsImV4cCI6MTY5MDU3NzY1NiwiaWF0IjoxNjkwNTc0MDU2LCJ2ZXJzaW9uIjoyLCJqdGkiOiI0MDU0YzA1Zi1iNDNkLTQwMjgtYTkxYS03M2Y1NmRjNzY1ZTciLCJjbGllbnRfaWQiOiI2YzU3amJrZTUza25xdGx2Y2NkdnA1bWM0YyJ9.mk9zrqswKKYcAkcFfg_8uijuQAW1HpOfKJdNdP7BQGCc4XjiWN7Zj7K5Hba5wgTiBINp96UjxHPPLsfH3uFwrwFPxHwtwuTg-sXGUUo9R58QuItLWE-EAIDytlFBYnQqirJK9US0tproPJHmp4biHIZGtd5j27KLuw_2i85-iUiOZCWDd1hkXVXf6C76Tu_FaS6S29C6G3XxhA_wPbe8IH9_OrKbRGtzilB7HM4m72Wkkd7xsFU3ZPVl8BXqj65A47t0cfp_8IOZsjfpsEyrzSxFLn6xkFBxvYVQRjSBlMh-OwY4jtnSlo5nZbq8z1puycFnIGemxS256-m9Su4nrg';
  const requestData2 = {
    query: {
      query_string: {
        query,
      },
      filter: [
        {
          product_name: {
            terms: ['Tax Notes Today Federal', 'Tax Notes Today State'],
            operator: 'OR',
          },
        },
      ],
    },

    from: page * 20,
    size: 20,
    sort: [
      {
        date: 'desc',
      },
    ],
    facets: {
      fields: ['product_name', 'product_section', 'document_type'],
      size: 5,
    },
  };

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalLength, setTotalLength] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setData([]);
    setTotalLength(0);
  }, [query]);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        if (totalLength >= data.length) {
          const response = await axios.post(url, requestData2, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
          });
          console.log(response.data.hits.total);

          setTotalLength(response?.data?.hits?.total);
          setData((p) => [...p, ...response?.data?.hits?.hits || []]);
          setLoading(false);
        }
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    }
    query && fetchData();
  }, [page, query]);

  return { data, loading, error };
};

export default useFetch;

import axios from "axios";
import { useEffect, useState } from 'react';

export function useApi<T = unknown>(url: string) {
   const [data, setData] = useState<T |  null>(null)

   useEffect(() => {
      axios.get(url)
         .then((response) => {
            setData(response.data.results);
         })
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return { data }
}

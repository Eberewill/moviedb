import { useState } from 'react';
import { Pagination   } from '@mantine/core';

const DefaultPagination = ({activePage, setPage, total }: {activePage ?: number , setPage : (page ?: number)=>void, total: number   }) => {
  

 // const [activePage, setPage] = useState(1);
  return (
  <Pagination page={activePage} onChange={setPage} total={total} color="cyan" />
  )
}

export default DefaultPagination


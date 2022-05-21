import { useState } from 'react';
import { Pagination   } from '@mantine/core';

const DefaultPagination = () => {
  

  const [activePage, setPage] = useState(1);
  return (
  <Pagination page={activePage} onChange={setPage} total={10} color="cyan" />
  )
}

export default DefaultPagination


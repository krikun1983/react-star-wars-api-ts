import { useLocation } from 'react-router';

const useQueryParams = (): URLSearchParams => {
  return new URLSearchParams(useLocation().search);
};

export default useQueryParams;

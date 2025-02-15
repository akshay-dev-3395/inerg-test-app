import React, {useState} from 'react';

const useDashboardHook = () => {
  const [isClickFilter, setIsClickFilter] = useState(false);

  return {
    isClickFilter,
    setIsClickFilter,
  };
};

export default useDashboardHook;

import {useAppDispatch} from '@app/store/service/appStoreHook';
import {getCovidApi, setUpdateState} from '@app/store/slice/appSlice';
import React, {useState, useEffect, useCallback} from 'react';
import {Alert} from 'react-native';

const useDashboardHook = () => {
  const dispatch = useAppDispatch();
  const [isClickFilter, setIsClickFilter] = useState(false);

  const fetchApi = useCallback(async () => {
    const resultAction = await dispatch(getCovidApi(null));
    if (getCovidApi.fulfilled.match(resultAction)) {
      await dispatch(setUpdateState({name: 'Kerala'}));
    } else {
      Alert.alert('Something went wrong', 'API call error!');
    }
  }, []);

  useEffect(() => {
    fetchApi();
  }, []);

  return {
    isClickFilter,
    setIsClickFilter,
  };
};

export default useDashboardHook;

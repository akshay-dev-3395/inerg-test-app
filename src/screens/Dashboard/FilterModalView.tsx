import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useState} from 'react';
import {COLORS, FONTS} from '@app/constants/theme';
import {normalizeFontSize, wp} from '@app/constants/common';
import IconComponent from '@app/components/IconComponent/IconComponent';
import {useAppDispatch, useAppSelector} from '@app/store/service/appStoreHook';
import {setUpdateState} from '@app/store/slice/appSlice';

type Props = {
  setIsClickFilter: (state: boolean) => void;
};

const FilterModalView = (props: Props) => {
  const {setIsClickFilter} = props;
  const dispatch = useAppDispatch();
  const {allStateData} = useAppSelector(state => state.appReducer);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(allStateData);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text === '') {
      setFilteredData(allStateData); // Show full list when search is cleared
    } else {
      const filtered = allStateData.filter(item =>
        item.state.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredData(filtered);
    }
  };

  const onSelectList = (data: any) => {
    dispatch(setUpdateState({name: data?.state}));
    setIsClickFilter(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="search state"
        style={styles.inputStyle}
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredData}
        keyExtractor={state => state.state}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.nameWrap}
            onPress={() => onSelectList(item)}>
            <Text style={styles.nameStyle}>{item?.state}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.closeWrap}
        onPress={() => setIsClickFilter(false)}>
        <IconComponent
          name={'close-circle'}
          packageName={'MaterialCommunityIcons'}
          size={35}
          color={COLORS.primaryDark}
        />
      </TouchableOpacity>
    </View>
  );
};

export default memo(FilterModalView);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 0.7,
    borderTopLeftRadius: wp(10),
    borderTopRightRadius: wp(10),
    paddingTop: wp(60),
    paddingHorizontal: wp(20),
    position: 'relative',
  },
  nameWrap: {
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: wp(8),
    paddingVertical: wp(8),
    marginBottom: wp(10),
  },
  nameStyle: {
    ...FONTS.medium,
    fontSize: normalizeFontSize(16),
    color: COLORS.black,
    textAlign: 'center',
  },
  inputStyle: {
    ...FONTS.medium,
    fontSize: normalizeFontSize(14),
    color: COLORS.black,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: wp(8),
    height: wp(40),
    paddingLeft: wp(10),
    marginBottom: wp(20),
    backgroundColor: COLORS.gray4,
  },
  closeWrap: {
    position: 'absolute',
    right: wp(20),
    top: wp(20),
  },
});

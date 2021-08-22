import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import AppTextInput from './AppTextInput';

function PickerItem({label,onPress}) {
    return (
        <TouchableOpacity onPress={ onPress }>
            <AppTextInput>{ label }</AppTextInput>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
     
})
export default PickerItem;
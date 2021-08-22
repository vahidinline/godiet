import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import { oneOfType } from 'prop-types';

function AppFormField({name,...otherProps}) {
    const{setFieldTouched,handleChange,errors,touched} = useFormikContext();
    return (
        <>
            <AppTextInput 
                onChangeText={handleChange(name)} 
                onBlur={()=> setFieldTouched(name)}
                {...otherProps}
            />
            <ErrorMessage error= {errors[name]}  visible={touched[name]}/>
        </>
    );
}

export default AppFormField;
import React from 'react';
import { StyleSheet } from 'react-native';

import * as Yup from 'yup';
import Screen from '../components/Screen';
import { AppForm, AppFormField,SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
    height: Yup.string().required().label("Height"),
    weight: Yup.string().required().min(2).label("Weight")
});

function BMI(props) {
    return (
        <Screen>
            <AppForm
                initialValues={{height:"", weight:""}}
                onSubmit={(values) =>console.log(values)}
                validationSchema = {validationSchema}
            >
                 <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}              
                        
                        name="Weight"
                        icon="weight"
                        placeholder="Weight - KG"
                        
                    />
                    <AppFormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="human-male-height-variant"
                        name="height"
                        placeholder="Height - CM"    
                        
                    />
                   <SubmitButton 
                   onPress= {()=> console.log("height + weight")}
                   title="Calculate"/>
            </AppForm>
        </Screen>
    );
}

export default BMI;

const styles = StyleSheet.create({
    
})
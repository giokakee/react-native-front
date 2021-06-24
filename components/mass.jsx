import React from 'react';
import { Text, TextInput, Pressable, View } from 'react-native';
import { Formik, useField } from 'formik';
import * as yup from 'yup'


const getBodyMassIndex = (mass, height) => {
  return Math.round(mass / Math.pow(height, 2));
};
const CalculatorForm = ({onSubmit}) => {
    const [massField, massMeta, massHelpers] = useField('mass')
    const [heightField, heightMeta, heightHelpers] = useField('height')

    const showError = massMeta.touched && massMeta.error || heightMeta.touched && heightMeta.error

    return(
        <View>
            <TextInput 
                placeholder='weight(kh)'
                value={massField.values}
                onChangeText={value => massHelpers.setValue(value)}
            />
            <TextInput
                placeholder='height(m)'
                value={heightField.value}
                onChangeText={value => heightHelpers.setValue(value)}
            />
            <Pressable onPress={onSubmit}>
                <Text>calculate</Text>
            </Pressable>
        </View>
    )

}

const validatiotionSchema = yup.object().shape({
    mass: yup
        .number()
        .min(1, ' this will be error message i think')
        .required(' this will be required message'),
    height: yup
            .number()
            .min(1, ' this will be height error message i think')
            .required('require message')
    
})


const MassIndexCalculator = () => {
    const calculate = ({mass, height}) => {
        if(!isNaN(mass) && !isNaN(height)){
           console.log(getBodyMassIndex(mass,height))
        }
    }

    return(
        <Formik 
            initialValues={{mass:'', height:''}} 
            onSubmit={calculate}
            validationSchema={validatiotionSchema}
        >
            {({handleSubmit}) => <CalculatorForm onSubmit={handleSubmit} /> }
        </Formik>
    )
}


export default MassIndexCalculator
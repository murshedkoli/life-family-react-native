import React, { useCallback, useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


const Registration = () => {


    const [selectedValue, setSelectedValue] = useState("A+");

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    console.log(name, phone, address, selectedValue)



    const formOnSubmit = e => {
        const formDataForSubmit = {
            name: name,
            address: address,
            phone: phone,
            blood: selectedValue,

        }

        if (formDataForSubmit.name !== "" && formDataForSubmit.address !== "" && formDataForSubmit.phone !== "" && formDataForSubmit.blood !== "") {

            fetch('https://life-family-server.herokuapp.com/adddoner', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formDataForSubmit)

            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedCount > 0) {

                        alert('Succefully Registered')

                    } else {
                        alert('Failed to Registration')

                    }
                })

        } else {
            alert("Fil up all field")
        }
        e.preventDefault()
    }


    return (
        <View style={{ padding: 20, backgroundColor: '#5B17BB' }}>
            <TextInput
                placeholder="Enter Your Name"
                onChangeText={(text) => { setName(text) }}
                style={{ borderWidth: 2, borderColor: 'white', padding: 10, margin: 20, color: 'white' }}
            />

            <TextInput
                placeholder="Phone Number"
                onChangeText={(text) => { setPhone(text) }}
                style={{ borderWidth: 2, borderColor: 'white', padding: 10, margin: 20, color: 'white' }}
            />
            <View style={{ margin: 20, borderWidth: 2, borderColor: 'white' }}>
                <RNPickerSelect
                    onValueChange={(value) => setSelectedValue(value)}

                    items={[
                        { label: "A+", value: "A+" },
                        { label: "A-", value: "A-" },
                        { label: "B+", value: "B+" },
                        { label: "B-", value: "B-" },
                        { label: "O+", value: "O+" },
                        { label: "O-", value: "O-" },
                        { label: "AB+", value: "AB+" },
                        { label: "AB-", value: "AB-" }
                    ]}

                />
            </View>


            <TextInput
                placeholder="Address"
                onChangeText={(text) => { setAddress(text) }}
                style={{ borderWidth: 2, borderColor: 'white', padding: 10, margin: 20, color: 'white' }}
            />


            <Button
                onPress={formOnSubmit}
                title="Registration"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />



        </View>

    );
};

export default Registration;
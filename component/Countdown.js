import React from 'react';
import { Text, View } from 'react-native';

const Countdown = ({ date, doner }) => {

    const { name } = doner;

    const donerDate = new Date(date);
    const today = new Date();

    const diffTime = today.getTime() - donerDate.getTime();
    const diffDays = diffTime / (1000 * 3600 * 24);
    const days = Math.floor(diffDays) - 90
    const available = 90 - Math.floor(diffDays)


    return (
        days < 0 ? <Text style={{ backgroundColor: 'red', borderRadius: 5, color: 'white', fontWeight: 'bold', padding: 10 }}>{name} আরও {available} দিন পরে রক্ত দিতে পারবেন।</Text> : <Text style={{ backgroundColor: 'green', borderRadius: 5, color: 'white', fontWeight: 'bold', padding: 10 }}>{name} আজকে রক্ত দিতে পারবেন। </Text>
    );
};

export default Countdown;
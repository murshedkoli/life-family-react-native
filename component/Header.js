import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

const Header = () => {


    return (
        <Appbar.Header>

            <Appbar.Content title="Life Family Blood Group" subtitle="Blood For Life" />

        </Appbar.Header>

    );
};

export default Header;
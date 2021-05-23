import React from 'react';
import { View } from 'react-native';
import { Card, Title, Paragraph, Avatar, IconButton } from 'react-native-paper';
import Countdown from './Countdown';




const SingleCardForHome = ({ doner }) => {
    const { name, address, blood, lastDate, phone, _id } = doner;
    return (
        <View style={{
            textTransform: 'capitalize', borderRadius: 10, marginBottom: 10, boxShadow: '-2px 1px 37px 1px rgba(0,0,0,0.54)'
        }}>
            <Card >
                <Card.Title
                    title={name}
                    subtitle={address}

                />
                <Card.Content>
                    <Title>{blood}</Title>
                    <Paragraph>{lastDate}</Paragraph>
                </Card.Content>
                <Countdown doner={doner} date={lastDate} />
            </Card>
        </View>
    );
};



export default SingleCardForHome;
import React, { useEffect, useState } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import DonerList from '../component/DonerList';



const wait = timeout => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
};

const Home = () => {

    const [formData, setFormData] = useState('');
    const [doners, setDoners] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    //http://localhost:5000
    //https://life-family-server.herokuapp.com
    useEffect(() => {
        fetch('https://life-family-server.herokuapp.com/doner?blood=' + formData)
            .then(res => res.json())
            .then(data => {

                setDoners(data.reverse());

            })
    }, [formData, refreshing])



    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);


    return (
        <ScrollView style={{ backgroundColor: '#5B17BB', flex: 1 }}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>


            <DonerList doners={doners} />
        </ScrollView>
    );
};

export default Home;
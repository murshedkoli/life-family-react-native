
import React from 'react';
import { ScrollView } from 'react-native';
import SingleCardForHome from '../component/SingleCardForHome';



const DonerList = ({ doners }) => {



    return (
        <ScrollView style={{ padding: 20, flex: 1 }}

        >
            {
                doners.map(doner => <SingleCardForHome doner={doner} key={doner._id} />)
            }
        </ScrollView>
    );
};

export default DonerList;
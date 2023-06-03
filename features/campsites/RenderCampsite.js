import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderCampsite = ({ campsite }) => {
    if (campsite) {
        return (
            <Card containerStyle={{padding: 0}}>
                <Card.Image source={campsite.image}>
                    <View style={{ justifyContent: 'center', flex: 1}}>
                        <Text
                            styel={{ color: 'white',
                                    textAlign: 'center', 
                                    frontSize:20
                                    }}
                        >
                            {campsite.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{campsite.description}</Text>
            </Card>
        );
    }
    return <View/>;
}

export default RenderCampsite;
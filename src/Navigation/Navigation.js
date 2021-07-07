import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import FeatureOne from '../Views/FeatureOne';
import FeatureThree from '../Views/FeatureThree';
import FeatureTwo from '../Views/FeatureTwo';
import HomeScreen from '../Views/HomeScreen';

const Tab = createMaterialBottomTabNavigator();

function MainTabScreen() {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			activeColor="#e91e63"
			barStyle={ { backgroundColor: 'white' } }>
			<Tab.Screen
				name="Home"
				component={ HomeScreen }
				options={ {
					tabBarLabel: 'Home',
					tabBarIcon:  ( { color } ) => (
						<Icon name="ios-home" color={ color } size={ 26 }/>
					),
				} }
			/>
			<Tab.Screen
				name="FeatureOne"
				component={ FeatureOne }
				options={ {
					tabBarLabel: 'FeatureOne',
					tabBarIcon:  ( { color } ) => <Icon name="cube" color={ color } size={ 26 }/>,
				} }
			/>
			<Tab.Screen
				name="FeatureTwo"
				component={ FeatureTwo }
				options={ {
					tabBarLabel: 'FeatureTwo',
					tabBarIcon:  ( { color } ) => <Icon name="cube" color={ color } size={ 26 }/>,
				} }
			/>
			<Tab.Screen
				name="FeatureThree"
				component={ FeatureThree }
				options={ {
					tabBarLabel: 'FeatureThree',
					tabBarIcon:  ( { color } ) => <Icon name="cube" color={ color } size={ 26 }/>,
				} }
			/>
		</Tab.Navigator>
	);
}

export default MainTabScreen;

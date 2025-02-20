import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../index';
import ExplorePage from './explore';
import PaymentPage from './payment';

const Tab = createBottomTabNavigator();

export default function Layout() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Explore" component={ExplorePage} />
            <Tab.Screen name="Payment" component={PaymentPage} />
        </Tab.Navigator>
    );
}

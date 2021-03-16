import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Search from './pages/Search';
import Menu from './components/Menu';

const Drawer = createDrawerNavigator();

function Routes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Minha Cidade'
                }}
            />

            <Drawer.Screen
                name="Search"
                component={Search}
                options={{
                    title: "Pesquisar"
                }}

            />
        </Drawer.Navigator>
    )
}

export default Routes;
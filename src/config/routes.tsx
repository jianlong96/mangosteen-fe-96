import { RouteRecordRaw } from 'vue-router'
import { First } from '../components/welcome/First'
import { FirstActions } from "../components/welcome/FirstActions";
import { Forth } from '../components/welcome/Forth'
import { ForthActions } from "../components/welcome/ForthActions";
import { Second } from '../components/welcome/Second'
import { SecondActions } from "../components/welcome/SecondActions";
import { Third } from '../components/welcome/Third'
import { ThirdActions } from "../components/welcome/ThirdActions";
import { Welcome } from '../views/Welcome';
import { StartPage } from '../views/StartPage';
import { ItemPage } from '../views/ItemPage';
import { ItemList } from '../views/ItemList';
import { ItemCreate } from '../views/ItemCreate';

export const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/welcome/1' },
    {
        path: '/welcome',
        component: Welcome,
        children: [
            { path: '1', components: { main: First, footer: FirstActions }, },
            { path: '2', components: { main: Second, footer: SecondActions }, },
            { path: '3', components: { main: Third, footer: ThirdActions }, },
            { path: '4', components: { main: Forth, footer: ForthActions }, },
        ],
    },
    { path: '/start', component: StartPage },
    {
        path: '/items', component: ItemPage,
        children: [
            { path: '', component: ItemList },
            { path: 'create', component: ItemCreate },
        ]
    }
]
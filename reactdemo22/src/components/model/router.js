
import Home from '../Home';
import News from '../News';
    import NewsList from '../news/NewsList';
    import NewsAdd from '../news/NewsAdd';
    import NewsEdit from '../news/NewsEdit';
import User from '../User';
    import UserList from '../user/UserList';
    import UserAdd from '../user/UserAdd';
    import UserEdit from '../user/UserEdit';

let routes = [
    {
        path:"/",
        component:Home,
        exact:true
    },
    {
        path:"/news",
        component:News,
        routes:[
            {
                path:"/news/",
                component:NewsList
            },
            {
                path:"/news/add",
                component:NewsAdd
            },
            {
                path:"/news/edit",
                component:NewsEdit
            }
        ]
    },
    {
        path:"/user",
        component:User,
        routes:[
            {
                path:"/user/",
                component:UserList
            },
            {
                path:"/user/add",
                component:UserAdd
            },
            {
                path:"/user/edit",
                component:UserEdit
            }

        ]
    }
];
export default routes;
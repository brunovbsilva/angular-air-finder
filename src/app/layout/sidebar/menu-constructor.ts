import { Menu } from './models/menu.model';

export default [
  {
    name: 'Sidebar.Home.Name',
    path: 'home',
  },
  {
    name: 'test',
    path: 'test',
    submenus: [
      {
        name: 'test1',
        path: 'test1',
      },
      {
        name: 'test2',
        path: 'test2',
      },
      {
        name: 'test3',
        path: 'test3',
      },
    ]
  },
] as Menu[];

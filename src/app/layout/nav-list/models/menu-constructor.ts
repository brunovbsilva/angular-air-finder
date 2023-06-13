import { Menu } from './menu.model';

export default [
  {
    name: 'Layout.Sidebar.Home.Name',
    path: 'home',
  },
  {
    name: 'Layout.Sidebar.Games.Name',
    path: 'games',
  },
  {
    name: 'Layout.Sidebar.Test.Name',
    path: 'test',
    submenus: [
      {
        name: 'Layout.Sidebar.Test.Submenus.QRCodeGenerator',
        path: 'qrcode-generator',
      }
    ]
  },
] as Menu[];

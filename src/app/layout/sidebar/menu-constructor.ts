import { Menu } from './models/menu.model';

export default [
  {
    name: 'Sidebar.Home.Name',
    path: 'home',
  },
  {
    name: 'Sidebar.Test.Name',
    path: 'test',
    submenus: [
      {
        name: 'Sidebar.Test.Submenus.QRCodeGenerator',
        path: 'qrcode-generator',
      },
      {
        name: 'Sidebar.Test.Submenus.QRCodeReader',
        path: 'qrcode-reader',
      },
    ]
  },
] as Menu[];

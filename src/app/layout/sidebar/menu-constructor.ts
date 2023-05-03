import { Menu } from './models/menu.model';

export default [
  {
    name: 'Layout.Sidebar.Home.Name',
    path: 'home',
  },
  {
    name: 'Layout.Sidebar.Test.Name',
    path: 'test',
    submenus: [
      {
        name: 'Layout.Sidebar.Test.Submenus.QRCodeGenerator',
        path: 'qrcode-generator',
      },
      {
        name: 'Layout.Sidebar.Test.Submenus.QRCodeReader',
        path: 'qrcode-reader',
      },
    ]
  },
] as Menu[];

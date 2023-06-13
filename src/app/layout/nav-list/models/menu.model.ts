export class Menu {
  name: string = '';
  path?: string;
  submenus?: Menu[];
  collapsed?: boolean = true;
  active?: boolean = false;
}

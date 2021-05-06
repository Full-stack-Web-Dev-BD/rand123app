import { adminRoot } from './defaultValues';

const data = [
  // {
  //   id: 'gogo',
  //   icon: 'iconsminds-air-balloon-1',
  //   label: 'menu.gogo',
  //   to: `${adminRoot}/gogo`,
  //   subs: [
  //     {
  //       icon: 'simple-icon-paper-plane',
  //       label: 'menu.start',
  //       to: `${adminRoot}/gogo/start`,
  //     },
  //   ],
  // },
  // {
  //   id: 'secondmenu',
  //   icon: 'iconsminds-three-arrow-fork',
  //   label: 'menu.second-menu',
  //   to: `${adminRoot}/second-menu`,
  //   // roles: [UserRole.Admin, UserRole.Editor],
  //   subs: [
  //     {
  //       icon: 'simple-icon-paper-plane',
  //       label: 'menu.second',
  //       to: `${adminRoot}/second-menu/second`,
  //     },
  //   ],
  // },
  {
    id: 'Asset Manager',
    icon: 'simple-icon-layers',
    label: 'Asset Manager',
    to: `${adminRoot}/asset-manager`,
  },
  {
    id: 'Brand Kit ',
    icon: 'simple-icon-star',
    label: 'Brand Kit ',
    to: `${adminRoot}/brand-kit`,
  },
  {
    id: 'My Projects',
    icon: 'simple-icon-organization',
    label: 'My Projects',
    to: `${adminRoot}/my-project`,
  },
  {
    id: 'Settings',
    icon: 'iconsminds-gears',
    label: 'Settings',
    to: `${adminRoot}/setting`,
  },
];
export default data;

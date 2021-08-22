import {TransactionPoint} from './types';

export const menu = [
  {
    icon: 'zap',
    label: 'Outfit Ideas',
    screen: 'OutfitIdeas',
    color: 'primary',
  },
  {
    icon: 'heart',
    label: 'Favorites Outfits',
    screen: 'FavoritesOutfits',
    color: 'drawer1',
  },
  {
    icon: 'user',
    label: 'Edit Profile',
    screen: 'EditProfile',
    color: 'drawer2',
  },
  {
    icon: 'clock',
    label: 'Transactions History',
    screen: 'TransactionsHistory',
    color: 'drawer3',
  },
  {
    icon: 'settings',
    label: 'Notifications Settings',
    screen: 'NotificationsSettings',
    color: 'drawer4',
  },
  {
    icon: 'log-out',
    label: 'Logout',
    screen: 'Logout',
    color: 'secondary',
  },
];

export const slides = [
  {
    title: 'Relaxed',
    color: '#BFEAF5',
    subtitle: 'Find your outfit',
    description:
      "Confused about your outfit ? Don't worry! find the best outfit here",
  },
  {
    title: 'Playful',
    color: '#BEECC4',
    subtitle: 'Hear is first, wear is first',
    description:
      'Hating you clothes in your wardrobe ?, explore hundreds of outfit ideas',
  },
  {
    title: 'Excentric',
    color: '#FFE4D9',
    subtitle: 'Your style, your way',
    description:
      'Create your individual and unique style and look amazing everyday',
  },
  {
    title: 'Funky',
    color: '#FFDDDD',
    subtitle: 'Look good, feel good',
    description:
      'Discover the latest trends in fashion and explore your personality',
  },
];

export const categories = [
  {
    id: 'newin',
    title: 'Newin',
    color: '#FFDDDD',
  },
  {
    id: 'summer',
    title: 'Summer',
    color: '#BEECC4',
  },
  {
    id: 'activewear',
    title: 'Activewear',
    color: '#BFEAF5',
  },
  {
    id: 'outlet',
    title: 'outlet',
    color: '#F1E0FF',
  },
  {
    id: 'accesories',
    title: 'Accesories',
    color: '#FFE8E9',
  },
];

export const outfits = [
  {
    id: 1,
    color: '#BFEAF5',
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 2,
    color: '#BEECC4',
    aspectRatio: 200 / 145,
    selected: false,
  },
  {
    id: 3,
    color: '#FFE4D9',
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 4,
    color: '#FFDDDD',
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 5,
    color: '#BFEAF5',
    aspectRatio: 150 / 145,
    selected: false,
  },
  {
    id: 6,
    color: '#F3F0EF',
    aspectRatio: 120 / 145,
    selected: false,
  },
  {
    id: 7,
    color: '#D5C3BB',
    aspectRatio: 210 / 145,
    selected: false,
  },
  {
    id: 8,
    color: '#DEEFC4',
    aspectRatio: 160 / 145,
    selected: false,
  },
];

export const cards = [
  {
    id: 3,
  },
  {
    id: 2,
  },
  {
    id: 1,
  },
  {
    id: 0,
  },
];

export const transactions: TransactionPoint[] = [
  {
    date: '2020-11-01T00:00:00.000-05:00',
    value: 129.42,
    color: 'primary',
    id: 245671,
  },
  {
    date: '2020-12-01T00:00:00.000-05:00',
    value: 281.23,
    color: 'graph1',
    id: 245672,
  },
  {
    date: '2021-02-01T00:00:00.000-05:00',
    value: 198.54,
    color: 'graph2',
    id: 245673,
  },
];

export const tabs = [
  {
    id: 'configuration',
    title: 'Configuration',
  },
  {
    id: 'info',
    title: 'Personal Info',
  },
];

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
    screen: 'Settings',
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

export const outfitType = [
  {value: 'men', label: 'For men'},
  {value: 'women', label: 'For women'},
  {value: 'both', label: 'For both'},
];

export const genders = [
  {value: 'male', label: 'Male'},
  {value: 'female', label: 'Female'},
];

export const sizes = [
  {value: 's'},
  {value: 'm'},
  {value: 'l'},
  {value: 'xl'},
  {value: 'xxl'},
];

export const colors = [
  {value: '#0C0D34'},
  {value: '#FF0058'},
  {value: '#50B9DE'},
  {value: '#00D99A'},
  {value: '#FE5E33'},
];

export const preferredBrands = [
  {value: 'adidas', label: 'Adidas'},
  {value: 'nike', label: 'Nike'},
  {value: 'converse', label: 'Converse'},
  {value: 'tommy-hilfiger', label: 'Tommy Hilfiger'},
  {value: 'billionaire-boys-club', label: 'Billionaire Boys Club'},
  {value: 'jordan', label: 'Jordan'},
  {value: 'le-coq-sportif', label: 'Le Coq Sportif'},
];

export const shoppingCartItems = [
  {
    id: 1,
    sizes: ['M', 'L'],
    name: 'Short Sleeve Organic Top',
    price: '$29,99',
  },
  {
    id: 2,
    sizes: ['M', 'L'],
    name: 'Short Sleeve Organic Top',
    price: '$29,99',
  },
  {
    id: 3,
    sizes: ['M', 'L'],
    name: 'Short Sleeve Organic Top',
    price: '$29,99',
  },
  {
    id: 4,
    sizes: ['M', 'L'],
    name: 'Short Sleeve Organic Top',
    price: '$29,99',
  },
];

export enum CardType {
  VISA,
  MASTERCARD,
}

export interface CreditCard {
  id: number;
  type: CardType;
  last4Digits: number;
  expiration: string;
}

export const creditCards = [
  {
    id: 0,
    type: CardType.VISA,
    last4Digits: 5467,
    expiration: '05/24',
  },
  {
    id: 1,
    type: CardType.MASTERCARD,
    last4Digits: 2620,
    expiration: '05/24',
  },
];

type GameProps = {
  id: number;
  name: string;
  tags: string[];
  extraTag?: string;
  url: string;
  coverImage: string;
};

export const games: GameProps[] = [
  {
    id: 0,
    name: 'Brawlhalla',
    tags: ['Platform fighter', 'Multiplayer', 'Cross-Play'],
    extraTag: 'Stressful',
    url: 'https://brawlhalla.com/',
    coverImage:
      'https://static-cdn.jtvnw.net/ttv-boxart/460316_IGDB-285x380.jpg',
  },
  {
    id: 1,
    name: 'Undertale',
    tags: ['Indie', 'RPG', 'Emotional narrative'],
    extraTag: 'OST',
    url: 'https://undertale.com/',
    coverImage:
      'https://static-cdn.jtvnw.net/ttv-boxart/490713_IGDB-285x380.jpg',
  },
  {
    id: 2,
    name: 'Cuphead',
    tags: ['Retro', 'Run-and-gun', 'Co-op'],
    extraTag: 'OST',
    url: 'https://store.steampowered.com/app/268910/Cuphead/',
    coverImage:
      'https://static-cdn.jtvnw.net/ttv-boxart/459064_IGDB-285x380.jpg',
  },
  {
    id: 3,
    name: 'Metal Gear Rising: Revengeance',
    tags: ['Hack-and-slash', 'Action-packed', 'Epic Boss Fights'],
    extraTag: 'OST',
    url: 'https://store.steampowered.com/app/235460/METAL_GEAR_RISING_REVENGEANCE/',
    coverImage:
      'https://static-cdn.jtvnw.net/ttv-boxart/24208_IGDB-144x192.jpg',
  },
  {
    id: 4,
    name: 'Grand Theft Auto V',
    tags: ['Open world', 'Multiplayer', 'Action'],
    extraTag: 'Classic',
    url: 'https://www.rockstargames.com/gta-v',
    coverImage:
      'https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-144x192.jpg',
  },
];

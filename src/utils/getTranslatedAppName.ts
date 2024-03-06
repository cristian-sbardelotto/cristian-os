export function getTranslatedAppName(slug: string) {
  switch (slug) {
    case 'aboutMe':
      return 'apps.about-me';

    case 'tracks':
      return 'apps.tracks';

    case 'games':
      return 'apps.games';

    case 'recentProjects':
      return 'apps.recent-projects';

    default:
      return '';
  }
}

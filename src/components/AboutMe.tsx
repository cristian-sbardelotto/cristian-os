import { Application } from './Application';

import { useTranslation } from 'react-i18next';

export function AboutMe() {
  const { t } = useTranslation();

  return (
    <Application.Root>
      <Application.Header>{t('apps.about-me')}</Application.Header>

      <Application.Content>
        <p className='about-me-paragraph'>{t('about-me.paragraph-1')}</p>

        <p className='mt-4 about-me-paragraph'>{t('about-me.paragraph-2')}</p>

        <p className='mt-4 about-me-paragraph'>{t('about-me.paragraph-3')}</p>

        <p className='mt-4 about-me-paragraph'>{t('about-me.paragraph-4')}</p>

        <p className='mt-4 about-me-paragraph'>{t('about-me.paragraph-5')}</p>

        <p className='mt-4 about-me-paragraph'>
          {t('about-me.paragraph-6')}{' '}
          <a
            className='underline hover:brightness-50 transition-all duration-500'
            href='https://portfolio-chi-lemon-51.vercel.app'
            target='_blank'
            rel='noreferrer'
          >
            portfolio-chi-lemon-51.vercel.app
          </a>
        </p>
      </Application.Content>
    </Application.Root>
  );
}

import { Application } from './Application';

import { useTranslation } from 'react-i18next';

export function AboutMe() {
  const { t } = useTranslation();

  return (
    <Application.Root>
      <Application.Header>{t('apps.about-me')}</Application.Header>

      <Application.Content>
        <div className='max-w-5xl'>
          <p className='about-me-paragraph'>{t('about-me.paragraph-1')}</p>

          <p className='mt-4 about-me-paragraph'>{t('about-me.paragraph-2')}</p>

          <p className='mt-4 about-me-paragraph'>{t('about-me.paragraph-3')}</p>

          <p className='mt-4 about-me-paragraph'>{t('about-me.paragraph-4')}</p>

          <p className='mt-4 about-me-paragraph'>{t('about-me.paragraph-5')}</p>

          <p className='mt-4 about-me-paragraph'>
            {t('about-me.paragraph-6')}{' '}
            <a
              className='underline hover:brightness-50 transition-all duration-500'
              href='https://cristiansbardelotto.com.br'
              target='_blank'
              rel='noreferrer'
            >
              cristiansbardelotto.com.br
            </a>
          </p>
        </div>
      </Application.Content>
    </Application.Root>
  );
}

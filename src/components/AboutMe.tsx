import { Application } from './Aplication';

type AboutMeProps = {
  onClose: () => void;
};

export function AboutMe({ onClose }: AboutMeProps) {
  return (
    <Application.Root>
      <Application.Header onClose={onClose}>About Me</Application.Header>

      <Application.Content>
        <p>Hey there! I’m Cristian Sbardelotto, a FullStack Developer.</p>

        <p className='mt-4'>
          I kicked off my web programming journey back in August 2022 and my
          current goal is to land my first job and eventually become a Tech Lead
          down the road.
        </p>

        <p className='mt-4'>
          By now, my go-to tech stack includes Javascript, Typescript, React,
          NextJS, NodeJS, Prisma, Fastify.
        </p>

        <p className='mt-4'>
          As a young programmer, I got some &quot;default&quot; hobbies, such as
          playing videogames (you can check out some of them on the Games App,
          on Start Menu), listen to a lot of music, especially Eminem (you can
          also see some of them on the Songs App), playing some football, and of
          course, programming.
        </p>

        <p className='mt-4'>
          Wanna chat about tech, games, or sports? Shoot me a message!
        </p>

        <p className='mt-4'>
          Check out my portfolio right here:{' '}
          <a
            className='underline'
            href='https://bit.ly/portfolioSbardelotto'
            target='_blank'
            rel='noreferrer'
          >
            bit.ly/portfolioSbardelotto
          </a>
        </p>
      </Application.Content>
    </Application.Root>
  );
}

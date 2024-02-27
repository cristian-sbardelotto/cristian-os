import { Application } from './Application';

export function AboutMe() {
  return (
    <Application.Root>
      <Application.Header>About Me</Application.Header>

      <Application.Content>
        <p className='lg:text-xl lg:leading-relaxed'>
          Hey there! I’m Cristian Sbardelotto, a FullStack Developer.
        </p>

        <p className='mt-4 lg:text-xl lg:leading-relaxed'>
          I kicked off my web programming journey back in August 2022 and my
          current goal is to land my first job and eventually become a Tech Lead
          down the road.
        </p>

        <p className='mt-4 lg:text-xl lg:leading-relaxed'>
          By now, my go-to tech stack includes Javascript, Typescript, React,
          NextJS, NodeJS, Prisma, Fastify.
        </p>

        <p className='mt-4 lg:text-xl lg:leading-relaxed'>
          As a young programmer, I got some &quot;<i>default</i> &quot; hobbies,
          such as playing videogames (you can check out some of them on the
          Games App, on Start Menu), listen to a lot of music, especially Eminem
          (you can also see some of your most listened tracks on the Tracks
          App), playing some football, and of course, programming.
        </p>

        <p className='mt-4 lg:text-xl lg:leading-relaxed'>
          Wanna chat about tech, games, or sports? Shoot me a message!
        </p>

        <p className='mt-4 lg:text-xl lg:leading-relaxed'>
          Check out my portfolio right here:{' '}
          <a
            className='underline hover:brightness-50 transition-all duration-500'
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

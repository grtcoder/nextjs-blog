import Head from 'next/head';
import Hero from '../components/Hero';
import { profile } from '../data/profile';

export default function Home() {
  return (
    <>
      <Head>
        <title>{profile.name} — Portfolio</title>
        <meta name="description" content={`${profile.name} — ${profile.title}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
    </>
  );
}

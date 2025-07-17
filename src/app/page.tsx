import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { ImageGrid } from '@/components/ImageGrid'
import { Map } from '@/components/Map'
import { Timeline } from '@/components/Timeline'
import { GettingHere } from '@/components/GettingHere'

const stats = [
  { id: 1, name: 'Outdoor park and plaza space', value: '3+ acres' },
  { id: 2, name: 'Unique outdoor fine art', value: '3 pieces' },
  { id: 3, name: 'Open every day, rain or shine', value: '24/7/365' },
]

function Stats() {
  return (
    <div className="bg-white py-20 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  description:
    'Visit Embarcadero Plaza, a celebrated part of San Francisco’s waterfront for more than 50 years',
}

export default async function Home() {

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Visit a celebrated part of San Francisco’s waterfront
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            For over 50 years, Embarcadero Plaza has been an integral part of San Francisco’s downtown and waterfront.
            Located between the end of Market Street and the Ferry Building, it’s frequented by locals and tourists alike.
          </p>
          <div className="mt-6 flex items-center gap-x-6 lg:mt-6 lg:shrink-0">
            <Link href="/visit"
              className="rounded-md bg-green-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {' '}
              Visit now{' '}
            </Link>
          </div>
        </FadeIn>
      </Container>

      <ImageGrid />

      <Stats />

      <Map />

      <GettingHere />

      <Timeline />

    </RootLayout>
  )
}

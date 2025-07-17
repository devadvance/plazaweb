import { type Metadata } from 'next'

import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { Timeline } from '@/components/Timeline'


export const metadata: Metadata = {
  title: 'History',
  description:
    'With over 50 years of history, Embarcadero Plaza is deeply connected to San Francisco’s past and is an important part of its future.',
}

export default function Process() {
  return (
    <RootLayout>
      {/* <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro> */}

      <Timeline />

    </RootLayout>
  )
}

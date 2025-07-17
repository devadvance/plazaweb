import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { GettingHere } from '@/components/GettingHere'

function Hours() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Hours
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        While there may be events happening, Embarcadero Plaza is open every day, rain or shine.
      </p>
      <ul className="mt-6">
        <li>Monday: 24 hours</li>
        <li>Tuesday: 24 hours</li>
        <li>Wednesday: 24 hours</li>
        <li>Thursday: 24 hours</li>
        <li>Friday: 24 hours</li>
        <li>Saturday: 24 hours</li>
        <li>Sunday: 24 hours</li>
      </ul>
    </FadeIn>
  )
}

function Events() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Events
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Want to hold an event at Embarcadero Plaza? Reach out to the San Francisco Recreation and Parks Department to learn more.
      </p>
      <p className="mt-6 text-base">
        You can visit the <a href="https://sfrecpark.org/868/Embarcadero-Plaza" target="_blank">San Francisco Recreation and Parks Department website</a>
        , reach out via phone to <a href="tel:+14158312700" target="_blank">+1-415-831-2700</a>, or email via <a href="mailto:rpdinfo@sfgov.org" target="_blank">rpdinfo@sfgov.org</a>.
      </p>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Visit',
  description: 'Experience San Francisco’s history by visiting Embarcadero Plaza today',
}

export default function Visit() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Take your first step" title="Visit Embarcadero Plaza today">
        <p>Experience San Francisco’s history.</p>
      </PageIntro>

      <GettingHere />

      <Container className="mt-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <Hours />
          <Events />
        </div>
      </Container>
    </RootLayout>
  )
}

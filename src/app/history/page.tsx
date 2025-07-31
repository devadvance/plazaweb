import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { Timeline } from '@/components/Timeline'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

import AAR_6551 from '@/images/sfpl/fountain/AAR-6551.jpg'
import AAR_6560 from '@/images/sfpl/fountain/AAR-6560.jpg'
import AAR_6564 from '@/images/sfpl/fountain/AAR-6564.jpg'
import AAR_6572 from '@/images/sfpl/fountain/AAR-6572.jpg'
import AAR_6527 from '@/images/sfpl/fountain/AAR-6527.jpg'
import AAR_6566 from '@/images/sfpl/fountain/AAR-6566.jpg'
import AAR_6575 from '@/images/sfpl/plaza/AAR-6575.jpg'
import AAR_6553 from '@/images/sfpl/plaza/AAR-6553.jpg'
import aerial_1931_10_11_C_1820_6_UCSB from '@/images/aerials/1931-10-11_C_1820_6_UCSB.jpg'
import aerial_1938_aerial_ccsf from '@/images/aerials/1938_aerial_ccsf.jpg'
import aerial_1948_aerial_ccsf from '@/images/aerials/1948_aerial_ccsf.jpg'
import aerial_1965_05_01_CAS_65_130_1_160_UCSB from '@/images/aerials/1965-05-01_CAS_65_130_1-160_UCSB.jpg'
import aerial_1993_aerial_ccsf from '@/images/aerials/1993_aerial_ccsf.jpg'
import aerial_2000_01_HM_2000_USA_1123_145_UCSB from '@/images/aerials/2000-01_HM-2000-USA_1123-145_UCSB.jpg'
import aerial_2002_aerial_ccsf from '@/images/aerials/2002_aerial_ccsf.jpg'
import aerial_2004_aerial_ccsf from '@/images/aerials/2004_aerial_ccsf.jpg'
import aerial_2009_aerial_ccsf from '@/images/aerials/2009_aerial_ccsf.jpg'
import aerial_2015_aerial_ccsf from '@/images/aerials/2015_aerial_ccsf.jpg'
import aerial_2024_aerial_ccsf from '@/images/aerials/2024_aerial_ccsf.jpg'
import laChiffonniereMarkManguerra from '@/images/community/plaza/2008-03-25_-_La_Chiffonniere_by_Dubuffet_at_the_Embarcadero_Plaza_-_Mark_Manguerra.jpg'
import dancersGaryStevens from '@/images/community/plaza/2009-09-12_-_Dancers_at_Justin_Herman_Plaza_-_Gary_Stevens.jpg'
import zeppelinRideCraigHowell from '@/images/community/plaza/2010-09-25_-_zeppelin-ride-020100925-185_-_Craig_Howell.jpg'
import ringsofFirezoxcleb from '@/images/community/plaza/2012-06-14_-_Rings_of_Fire_-_zoxcleb.jpg'
import holidayIceRinkWillisLam from '@/images/community/plaza/2015-12-31_-_Holiday_Ice_Rink_-_Willis_Lam.jpg'

export const metadata: Metadata = {
  title: 'History',
  description:
    'With over 50 years of history, Embarcadero Plaza is deeply connected to San Francisco’s past and is an important part of its future.',
}

const historicImages = [
  {
    title: 'Historic fountain photos',
    images: [
      {
        description: 'Fountain plan circa 1968-1971. Courtesy of San Francisco History Center, SFPL',
        image: { src: AAR_6551 },
      },
      {
        description: 'Fountain model circa 1968-1971. Courtesy of San Francisco History Center, SFPL',
        image: { src: AAR_6560 },
      },
      {
        description: 'Fountain dedication 1971-04-22. Courtesy of San Francisco History Center, SFPL',
        image: { src: AAR_6564 },
      },
      {
        description: 'Fountain 1971-03. Courtesy of San Francisco History Center, SFPL',
        image: { src: AAR_6572 },
      },
      {
        description: 'Fountain under construction circa 1968-1971. Courtesy of San Francisco History Center, SFPL',
        image: { src: AAR_6527 },
      },
      {
        description: 'Armand Vaillancourt signing fountain 1971-04-22. Courtesy of San Francisco History Center, SFPL',
        image: { src: AAR_6566 },
      }
    ]
  },
  {
    title: 'Historic plaza photos',
    images: [
      {
        description: 'Plaza construction circa 1971. Courtesy of San Francisco History Center, SFPL',
        image: { src: AAR_6575 },
      },
      {
        description: 'Plaza and fountain drawing circa 1968-1971. Courtesy of San Francisco History Center, SFPL',
        image: { src: AAR_6553 },
      },
      {
        description: '“Holiday Ice Rink at Embarcadero Center” in December 2015 by Willis Lam, CC BY-SA 2.0',
        image: { src: holidayIceRinkWillisLam },
      },
      {
        description: '“Dancers at Justin Herman Plaza” in September 2009 by Gary Stevens, CC BY 2.0',
        image: { src: dancersGaryStevens },
      },
      {
        description: '“Rings of Fire” in June 2012 by zoxcleb, CC BY-SA 2.0',
        image: { src: ringsofFirezoxcleb },
      },
      {
        description: '“zeppelin-ride-020100925-185” in September 2010 by Craig Howell, CC BY 2.0',
        image: { src: zeppelinRideCraigHowell },
      },
      {
        description: '“La Chiffonniere by Dubuffet at the Embarcadero Plaza” in March 2008 by Mark Manguerra, CC BY-NC-ND 2.0',
        image: { src: laChiffonniereMarkManguerra },
      }
    ]
  },
  {
    title: 'Historic Plaza aerials',
    images: [
      {
        description: 'Aerial from flight C_1820, frame 6, 1931-10-11. Courtesy of UCSB Library Geospatial Collection',
        image: { src: aerial_1931_10_11_C_1820_6_UCSB },
      },
      {
        description: 'Aerial from 1938. Courtesy of CCSF Planning Department',
        image: { src: aerial_1938_aerial_ccsf },
      },
      {
        description: 'Aerial from 1948. Courtesy of CCSF Planning Department',
        image: { src: aerial_1948_aerial_ccsf },
      },
      {
        description: 'Aerial from flight CAS_65_130, frame 1-160, 1965-05-01. Courtesy of UCSB Library Geospatial Collection',
        image: { src: aerial_1965_05_01_CAS_65_130_1_160_UCSB },
      },
      {
        description: 'Aerial from 1993. Courtesy of CCSF Planning Department',
        image: { src: aerial_1993_aerial_ccsf },
      },
      {
        description: 'Aerial from flight HM-2000-USA, frame 1123-145, 2000-01. Courtesy of UCSB Library Geospatial Collection',
        image: { src: aerial_2000_01_HM_2000_USA_1123_145_UCSB },
      },
      {
        description: 'Aerial from 2002. Courtesy of CCSF Planning Department',
        image: { src: aerial_2002_aerial_ccsf },
      },
      {
        description: 'Aerial from 2004. Courtesy of CCSF Planning Department',
        image: { src: aerial_2004_aerial_ccsf },
      },
      {
        description: 'Aerial from 2009. Courtesy of CCSF Planning Department',
        image: { src: aerial_2009_aerial_ccsf },
      },
      {
        description: 'Aerial from 2015. Courtesy of CCSF Planning Department',
        image: { src: aerial_2015_aerial_ccsf },
      },
      {
        description: 'Aerial from 2024. Courtesy of CCSF Planning Department',
        image: { src: aerial_2024_aerial_ccsf },
      }
    ]
  }
];

function HistoricImages() {
  return (
    <Container className="mt-16 sm:mt-16 lg:mt-16">
      <div className="space-y-24">
        {historicImages.map((category) => (
          <FadeInStagger key={category.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {category.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid items-center grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2 xl:gap-4"
                >
                  {category.images.map((individualImage) => (
                    <li key={individualImage.description}>
                      <FadeIn>
                        <a href={individualImage.image.src.src} target="_blank">
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...individualImage.image}
                            className="h-auto max-w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                            {/* <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p> */}
                            <p className="mt-2 text-sm text-white">
                              {individualImage.description}
                            </p>
                          </div>
                        </div>
                        </a>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
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

      <PageIntro eyebrow="" title="Learn about the history of Embarcadero Plaza">
        <p>
          With over 50 years of history, Embarcadero Plaza is deeply connected to San Francisco’s past
          and is an important part of its future.
        </p>
      </PageIntro>

      <HistoricImages />

      <Timeline />

    </RootLayout>
  )
}

import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-16 rounded-4xl bg-green-950 py-20 sm:mt-16 sm:py-32 lg:mt-16">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Timeline() {
  return (
    <>
      <SectionIntro
        eyebrow="Timeline"
        title="Learn about the history of Embarcadero Plaza"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          With over 50 years of history, Embarcadero Plaza is deeply connected to San Francisco's past
          and is an important part of its future.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1950s-1960s</time>
            <h3 className="text-lg font-semibold text-gray-900">Space acquired by San Francisco</h3>
            <p className="mb-4 text-base font-normal text-gray-500">San Francisco Redevelopment Agency acquires and clears the space that now makes up Embarcadero Plaza.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1955</time>
            <h3 className="text-lg font-semibold text-gray-900">Embarcadero Freeway begins construction</h3>
            <p className="mb-4 text-base font-normal text-gray-500">The now-controversial Embarcadero Freeway begins construction.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1959</time>
            <h3 className="text-lg font-semibold text-gray-900">Embarcadero Freeway opens</h3>
            <p className="mb-4 text-base font-normal text-gray-500">The freeway fully opens, an imposing structure separating the waterfront from downtown.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1962</time>
            <h3 className="text-lg font-semibold text-gray-900"><em>What to do About Market Street</em></h3>
            <p className="mb-4 text-base font-normal text-gray-500">Lawrence Halprin describes five distinct districts of Market Street in the 1962 report <em>What to do About Market Street</em>.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1966</time>
            <h3 className="text-lg font-semibold text-gray-900">Fountain design competition</h3>
            <p className="mb-4 text-base font-normal text-gray-500">A design competition for the fountain at Embarcadero Plaza kicks off. Five international sculptors submit designs: Armand Vaillancourt, James Melchert, Reuben Nakian, Jacques Overhoff, and Alicia Penalba. The competition's jury is composed of Lawrence Halprin, John Savage Bolles, and Mario Ciampi.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1967</time>
            <h3 className="text-lg font-semibold text-gray-900">Vaillancourt Fountain selected</h3>
            <p className="mb-4 text-base font-normal text-gray-500">Armand Vaillancourt, a Québecois sculptor, is selected for the Embarcadero Plaza fountain.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1969</time>
            <h3 className="text-lg font-semibold text-gray-900">Vaillancourt Fountain construction begins</h3>
            <p className="mb-4 text-base font-normal text-gray-500">Construction involves the installation of 710 tons of material, with some of the concrete elements weighing over 10 tons each.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1971</time>
            <h3 className="text-lg font-semibold text-gray-900">Vaillancourt Fountain is completed</h3>
            <p className="mb-4 text-base font-normal text-gray-500">The fountain is completed at a cost of $310,000, with a dedication attended by local and national leaders. When running, the fountain circulates 30,000 gallons of water per minute.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1972</time>
            <h3 className="text-lg font-semibold text-gray-900">Embarcadero Plaza is completed</h3>
            <p className="mb-4 text-base font-normal text-gray-500">Design by Lawrence Halprin & Associates in a joint venture with Mario Ciampi & Associates and John Bolles & Associates.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1974</time>
            <h3 className="text-lg font-semibold text-gray-900">Plaza renamed as "Justin Herman Plaza"</h3>
            <p className="mb-4 text-base font-normal text-gray-500">Until this point, the plaza was known as Embarcadero Plaza. It is renamed after the former Executive Director of the San Francisco Redevelopment Agency.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1983</time>
            <h3 className="text-lg font-semibold text-gray-900">Renovation of the brick of Embarcadero Plaza</h3>
            <p className="mb-4 text-base font-normal text-gray-500">This renovation included tiered seating, expanded steps, and an outdoor stage platform.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">Late 1980s</time>
            <h3 className="text-lg font-semibold text-gray-900">World-renowned skateboarding</h3>
            <p className="mb-4 text-base font-normal text-gray-500">The plaza becomes an international sensation during the rise of modern street skateboarding in the late 1980s.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1989</time>
            <h3 className="text-lg font-semibold text-gray-900">Loma Prieta earthquake damages the Embarcadero Freeway</h3>
            <p className="mb-4 text-base font-normal text-gray-500">The Loma Prieta Earthquake severely damages the Embarcadero Freeway.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1991</time>
            <h3 className="text-lg font-semibold text-gray-900">Demolition of the Embarcadero Freeway begins</h3>
            <p className="mb-4 text-base font-normal text-gray-500">After the damage of the Loma Prieta Earthquake, the Embarcadero Freeway is demolished beginning is 1991. At the same time, plans for a renovation of Embarcadero Plaza are discussed.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1991-1998</time>
            <h3 className="text-lg font-semibold text-gray-900">Embarcadero Plaza almost disappears</h3>
            <p className="mb-4 text-base font-normal text-gray-500">Early renovation designs around 1992-1994 called for new plaza and removal of the Vaillancourt Fountain. The plans are scaled back and eventually enacted in 1998.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1999</time>
            <h3 className="text-lg font-semibold text-gray-900">Digitally skating Embarcadero Plaza</h3>
            <p className="mb-4 text-base font-normal text-gray-500">A model of the plaza is included in the popular Tony Hawk Pro Skater video game due to its skateboarding fame.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1998-2001</time>
            <h3 className="text-lg font-semibold text-gray-900">Plaza renovation</h3>
            <p className="mb-4 text-base font-normal text-gray-500">Between 1998 and 2001, substantial renovations take place across the entire plaza. At the same time, Harry Bridges Plaza plaza is constructed between the two directions of traffic on the Embarcadero.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">2008</time>
            <h3 className="text-lg font-semibold text-gray-900">Abraham Lincoln Brigade Monument installed</h3>
            <p className="mb-4 text-base font-normal text-gray-500">Designed by Ann Chamberlain and Walter Hood, it is dedicated to the Americans who volunteered to fight fascism in Spain during the 1930s. The monument is 40 feet long and 8 feet high, with 44 translucent panels displayed in a large steel frame.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">2010</time>
            <h3 className="text-lg font-semibold text-gray-900">Bocce courts added</h3>
            <p className="mb-4 text-base font-normal text-gray-500">With community funding and labor, two bocce courts are installed on the Southern portion of the plaza.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">2017</time>
            <h3 className="text-lg font-semibold text-gray-900">Embarcadero Plaza as named</h3>
            <p className="mb-4 text-base font-normal text-gray-500">The plaza was renamed from "Justin Herman Plaza" back to its original Embarcadero Plaza name.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">2020</time>
            <h3 className="text-lg font-semibold text-gray-900">Abraham Lincoln Brigade Monument repaired</h3>
            <p className="mb-4 text-base font-normal text-gray-500">The monument was repaired between 2018-2020, after which it was returned to Embarcadero Plaza.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">2023</time>
            <h3 className="text-lg font-semibold text-gray-900">Temporary padel courts installed</h3>
            <p className="mb-4 text-base font-normal text-gray-500">Temporary padel courts with are installed next to the Vaillancourt Fountain on the brick of Embarcadero Plaza.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">2016</time>
            <h3 className="text-lg font-semibold text-gray-900">Market Street Cultural Landscape District</h3>
            <p className="mb-4 text-base font-normal text-gray-500">Embarcadero Plaza becomes a contributor to the Market Street Cultural Landscape District, a historic resource listed on the California Register of Historical Resources. The California Register program encourages public recognition and protection of historic resources.</p>
          </li>

        </ol>
      </Container>
    </>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Web development">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit.
            </ListItem>
            <ListItem title="E-commerce">
              We are at the forefront of modern e-commerce development. Which
              mainly means adding your logo to the Shopify store template we’ve
              used for the past six years.
            </ListItem>
            <ListItem title="Custom content management">
              At Studio we understand the importance of having a robust and
              customised CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

const stats = [
  { id: 1, name: 'Outdoor park and plaza space', value: '3+ acres' },
  { id: 2, name: 'Unique outdoor fine art', value: '3 pieces' },
  { id: 3, name: 'Visitors annually to the surrounding waterfront', value: 'Millions' },
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
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Visit a celebrated part of San Francisco's waterfront
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            For over 50 years, Embarcadero Plaza has been an integral part of San Francisco's downtown and waterfront.
            Located between the end of Market Street and the Ferry Building, it's frequented by locals and tourists alike.
          </p>
          <div className="mt-6 flex items-center gap-x-6 lg:mt-6 lg:shrink-0">
            <a
              href="#"
              className="rounded-md bg-green-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {' '}
              Visit now{' '}
            </a>
          </div>
        </FadeIn>
      </Container>

      <Stats />

      <Timeline />

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>

      <Services />

      <ContactSection />
    </RootLayout>
  )
}

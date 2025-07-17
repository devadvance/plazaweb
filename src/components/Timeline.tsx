import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'

export function Timeline() {
  return (
    <>
      <SectionIntro
        eyebrow="Timeline"
        title="Learn about the history of Embarcadero Plaza"
        className="mt-16"
      >
        <p>
          With over 50 years of history, Embarcadero Plaza is deeply connected to San Francisco’s past
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
            <p className="mb-4 text-base font-normal text-gray-500">A design competition for the fountain at Embarcadero Plaza kicks off. Five international sculptors submit designs: Armand Vaillancourt, James Melchert, Reuben Nakian, Jacques Overhoff, and Alicia Penalba. The competition’s jury is composed of Lawrence Halprin, John Savage Bolles, and Mario Ciampi.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1967</time>
            <h3 className="text-lg font-semibold text-gray-900">Vaillancourt Fountain selected</h3>
            <p className="mb-4 text-base font-normal text-gray-500">The design by Armand Vaillancourt, a Québecois sculptor, wins the competition the Embarcadero Plaza fountain.</p>
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
            <h3 className="text-lg font-semibold text-gray-900">Plaza renamed as “Justin Herman Plaza”</h3>
            <p className="mb-4 text-base font-normal text-gray-500">Until this point, the plaza has been known as Embarcadero Plaza. It is renamed after the former Executive Director of the San Francisco Redevelopment Agency.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1981</time>
            <h3 className="text-lg font-semibold text-gray-900"><em>La Chiffonnière</em> sculpture installed</h3>
            <p className="mb-4 text-base font-normal text-gray-500"><em>La Chiffonnière</em> (“Rag Woman”) by Jean Dubuffet is installed in Embarcadero Plaza. The sculpture is part of the privately-owned Embarcadero Center art collection.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1983</time>
            <h3 className="text-lg font-semibold text-gray-900">Renovation of the brick portion of Embarcadero Plaza</h3>
            <p className="mb-4 text-base font-normal text-gray-500">This renovation, led by William Turnbull of the firm MLTW/Turnbull, includes tiered seating, expanded steps, and an outdoor stage platform.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">Late 1980s</time>
            <h3 className="text-lg font-semibold text-gray-900">World-renowned skateboarding</h3>
            <p className="mb-4 text-base font-normal text-gray-500">The plaza becomes an international sensation during the rise of modern street skateboarding in the late 1980s.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1987</time>
            <h3 className="text-lg font-semibold text-gray-900">U2 takes over the plaza</h3>
            <p className="mb-4 text-base font-normal text-gray-500">U2 performs a free concert at Embarcadero Plaza. Bono climbs on the Vaillancourt Fountain during the performance.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1989</time>
            <h3 className="text-lg font-semibold text-gray-900">Loma Prieta earthquake damages the Embarcadero Freeway</h3>
            <p className="mb-4 text-base font-normal text-gray-500">The Loma Prieta earthquake severely damages the Embarcadero Freeway.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1991</time>
            <h3 className="text-lg font-semibold text-gray-900">Demolition of the Embarcadero Freeway begins</h3>
            <p className="mb-4 text-base font-normal text-gray-500">After the damage of the Loma Prieta earthquake, the Embarcadero Freeway is demolished beginning in 1991. At the same time, plans for a renovation of Embarcadero Plaza are discussed.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">1991-1998</time>
            <h3 className="text-lg font-semibold text-gray-900">Embarcadero Plaza almost disappears</h3>
            <p className="mb-4 text-base font-normal text-gray-500">Early renovation designs in the 1990s called for new plaza and removal of the Vaillancourt Fountain. The plans are eventually scaled back.</p>
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
            <p className="mb-4 text-base font-normal text-gray-500">Between 1998 and 2001, substantial renovations take place across the entire plaza. At the same time, Harry Bridges Plaza is constructed between the two directions of traffic on the Embarcadero.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">2004</time>
            <h3 className="text-lg font-semibold text-gray-900">Fountain threatened then turned back on</h3>
            <p className="mb-4 text-base font-normal text-gray-500">Supervisor Aaron Peskin introduces a resolution to explore the possible removal and replacement of the Vaillancourt Fountain. The water, which had been turned off, is turned back on, which had been the true intent of the resolution.</p>
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
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">2016</time>
            <h3 className="text-lg font-semibold text-gray-900">Market Street Cultural Landscape District</h3>
            <p className="mb-4 text-base font-normal text-gray-500">Embarcadero Plaza becomes a contributor to the Market Street Cultural Landscape District, a historic resource listed on the California Register of Historical Resources. The California Register program encourages public recognition and protection of historic resources.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">2017</time>
            <h3 className="text-lg font-semibold text-gray-900">Embarcadero Plaza as named</h3>
            <p className="mb-4 text-base font-normal text-gray-500">The plaza is renamed from “Justin Herman Plaza” back to its original Embarcadero Plaza name.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">2020</time>
            <h3 className="text-lg font-semibold text-gray-900">Abraham Lincoln Brigade Monument repaired</h3>
            <p className="mb-4 text-base font-normal text-gray-500">The monument is repaired between 2018-2020, after which it is returned to Embarcadero Plaza.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">2023</time>
            <h3 className="text-lg font-semibold text-gray-900">Temporary padel courts installed</h3>
            <p className="mb-4 text-base font-normal text-gray-500">Temporary, privately run padel courts are installed next to the Vaillancourt Fountain on the brick of Embarcadero Plaza.</p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-green-950 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-700">2025+</time>
            <h3 className="text-lg font-semibold text-gray-900">Continuing public art installations</h3>
            <p className="mb-4 text-base font-normal text-gray-500">Embarcadero Plaza hosts temporary public art installations, with the most recent being <em>R-Evolution</em> by Marco Cochrane in 2025.</p>
          </li>
        </ol>
      </Container>
    </>
  )
}
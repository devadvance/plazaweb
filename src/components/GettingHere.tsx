import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

const routingServices = [
  { title: 'Google Maps', url: 'https://maps.app.goo.gl/8kBeFe9depoCAAXy6' },
  { title: 'Apple Maps', url: 'https://maps.apple/p/NfmLQmZBZCK4GY' },
  { title: 'SFMTA Muni Service Map', url: 'https://www.sfmta.com/maps/muni-service-map' },
  { title: 'SFMTA Muni Trip Planner', url: 'https://www.sfmta.com/muni-transit' },
]

export function GettingHere() {
  return (
    <div className="mt-8 rounded-4xl bg-green-950 py-20 sm:py-20">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Getting here is easy
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        
        <FadeIn>
          <p className="text-white mt-8">Get directions from your preferred transportation and mapping apps:</p>
        </FadeIn>
        
        <FadeInStagger faster>
          
          <ul className="mt-2">
            <FadeIn>
            {routingServices.map((service) => (
              <li role="list" key={service.title}>
                <a href={service.url} target="_blank" className="text-white hover:text-neutral-300">
                  {service.title}
                </a>
              </li>
            ))}
            </FadeIn>
          </ul>
          
        </FadeInStagger>

        <FadeIn>
          <p className="text-white mt-8">Open every day of the year!</p>
        </FadeIn>
        
      </Container>
    </div>
  )
}
import { FadeIn } from '@/components/FadeIn'
import historicCrowd from '@/images/grid/AAR-6564-1971-04-22-SFRA.jpg'
import historicFountain from '@/images/grid/AAR-6528-1971-05-SFRA.jpg'
import fountainVertical2 from '@/images/grid/fountain-vertical-2.jpg'
import fountainVertical from '@/images/grid/fountain-vertical.jpg'
import eagleView from '@/images/grid/eagleview.jpg'
import overview from '@/images/grid/overview.jpg'

export function ImageGrid() {
  return (
    <FadeIn>
      <div className="lg:mx-64 grid grid-cols-3 md:grid-cols-3 gap-4 mt-4">
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={fountainVertical.src} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={historicCrowd.src} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={overview.src} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={fountainVertical2.src} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={historicFountain.src} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={eagleView.src} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mt-2 text-xs">
        <em>Image credits: Private donors, EagleView Technology via SF PIM, and the San Francisco Public Library
          : <a href="https://digitalsf.org/record/3956?ln=en&p=AAR-6564&v=uv#?xywh=-809%2C-115%2C6832%2C3766">AAR-6564</a>
          , <a href="https://digitalsf.org/record/3920?ln=en&p=AAR-6528&v=uv#?xywh=-3297%2C-171%2C10208%2C5627">AAR-6528</a>.
        </em>
      </div>
    </FadeIn>
  )
}

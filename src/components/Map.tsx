import { FadeIn } from '@/components/FadeIn'
import map from '@/images/map.jpg'

export function Map() {
    return (
        <FadeIn>
            <div className="flex flex-row md:mx-32 xl:mx-64 justify-center items-center mt-2 text-xs">
                <img className="h-auto  max-w-full rounded-lg" src={map.src} alt="" />
            </div>
        </FadeIn>
    )
}
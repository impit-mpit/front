
import { createFileRoute } from '@tanstack/react-router'
import { useMediaServiceGetMediaById } from '../../api/endpoints/nmost-api'
import { Player } from '../../components/player'

export const Route = createFileRoute('/videos/$videoid')({
  component: RouteComponent,
})

function RouteComponent() {
  const id = Route.useParams()
  const {data} = useMediaServiceGetMediaById(id.videoid)
  console.log(data)
  return (
    <div>
      <Player url={data?.videoUrl} thumb={data?.thumbnailUrl} title={data?.title} />
      <p>
      {data?.description}
      </p>
    </div>
  )
}

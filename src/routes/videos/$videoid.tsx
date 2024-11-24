
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
    <div className='px-10 py-5 my-5 flex flex-col gap-4 bg-white rounded-[20px]'>
      <p className='label text-2xl'>{data?.title}</p>
      <Player url={data?.videoUrl} thumb={data?.thumbnailUrl} title={data?.title} />
      <p >
      {data?.description}
      </p>
    </div>
  )
}

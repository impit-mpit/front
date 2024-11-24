
import { createFileRoute } from '@tanstack/react-router'
import { useNewsServiceGetNewsById } from '../../api/endpoints/nmost-api'

export const Route = createFileRoute('/article/$articleid')({
  component: RouteComponent,
})

function RouteComponent() {
  const id = Route.useParams()
  const {data} = useNewsServiceGetNewsById(id.articleid)
  console.log(data)
  return (
    <div className='px-10 py-5 my-5 flex flex-col gap-4 bg-white rounded-[20px]'>
      <p>{data?.title}</p>
      <img src={data?.imageUrl} className='max-w-[500px] max-h-[200px]' />
      <p>
      {data?.body}
      </p>
    </div>
  )
}

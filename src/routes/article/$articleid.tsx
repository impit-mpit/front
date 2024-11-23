
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
    <div>
      <p>
      {data?.body}
      </p>
    </div>
  )
}

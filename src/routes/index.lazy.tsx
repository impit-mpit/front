import { createLazyFileRoute } from '@tanstack/react-router'
import { getNews } from '../api/news'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  const page = 1
  const pageSize = 4
  const {data} = getNews({page,pageSize})
  
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  )
}
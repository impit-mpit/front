
import { createLazyFileRoute } from '@tanstack/react-router'
import AdminSidebar from '../../components/adminsidebar'

export const Route = createLazyFileRoute('/admin/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
        <AdminSidebar />
    </div>
  )
}

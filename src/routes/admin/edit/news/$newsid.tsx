import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/edit/news/$newsid')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /admin/edit/news/$newsid!'
}

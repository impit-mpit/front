
import { createLazyFileRoute } from '@tanstack/react-router'
import AdminSidebar from '../../components/adminsidebar'
import { useActive } from '../../utils/zustand'
import News from '../../components/admin/news'
import Archive from '../../components/admin/archive'
import Resourses from '../../components/admin/resourses'
import Specialist from '../../components/admin/specialist'

export const Route = createLazyFileRoute('/admin/')({
  component: RouteComponent,
})


function RouteComponent() {
    const active = useActive((state)=>state.active)
    let componentToRender
    switch (active) {
        case "news":
            componentToRender = <News />;
            break;
        // Вы можете добавить другие случаи здесь
        case "archive":
            componentToRender = <Archive />;
            break;
        case "resourses":
            componentToRender = <Resourses />;
            break;
        case "specialist":
            componentToRender = <Specialist />;
            break;
        default:
            componentToRender = <div>Выберите категорию</div>; // или любой другой компонент по умолчанию
            break;
    }

    return (
    <div className='flex flex-row gap-4'>
        <AdminSidebar />
        {componentToRender}
    </div>
  )
}

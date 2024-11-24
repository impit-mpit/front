import { createLazyFileRoute, Link, useNavigate } from '@tanstack/react-router';
import {
  useMediaServiceGetMediaFeed,
  useNewsServiceGetNewsFeed,
} from '../api/endpoints/nmost-api';
import { ArrowRight16, Chat } from '@atomaro/icons';
import Image from "./../img/image1.png"

export const Route = createLazyFileRoute('/')({
  component: Index,
});

const CommunityCard = ({data}:any) =>{
  return(
    <Link to={`/article/${data.id}`}>
      <div className="xl:w-[506px] xl:h-[400px] w-[140px] h-[108px] flex flex-col justify-between xl:px-6 xl:py-6 px-2 py-3 bg-white xl:rounded-[20px] rounded-[4px]">
          <img src={data.imageUrl} className='w-full object-fill xl:h-[320px] h-[66px] xl:rounded-[20px] rounded-[4px]' />
          <p className="font-medium xl:text-2xl text-[6px] label truncate max-w-[400px]">
            {data.title}
          </p>
      </div>
    </Link>
  )
}
const VideoCard = ({ data }: any) => {
  return (
    <Link to={`/videos/${data.id}`}>
      <div className="xl:w-[506px] xl:h-[280px] w-[140px] h-[116px] flex flex-col justify-between xl:px-6 px-2 xl:py-[30px] py-3 bg-white xl:rounded-[20px] rounded-[4px]">
        <div className="flex flex-row justify-between">
          <p className="font-medium xl:text-2xl text-[6px] label truncate xl:max-w-[400px] max-w-[100px]">
            {data.title}
          </p>
          <div className="bg-content-primary rounded-full flex items-center justify-center !w-8 !h-8">
            <ArrowRight16 fill="#fff" />
          </div>
        </div>
        <p className="xl:text-2xl text-[6px] text-text-secondary h-fit text-wrap">
          {data.shortDescription}
        </p>
      </div>
    </Link>
  );
};

function Index() {
  const navigate = useNavigate();
  const { data } = useNewsServiceGetNewsFeed({
    page: 1,
    pageSize: 10,
  });
  const { data: videos } = useMediaServiceGetMediaFeed({
    page: 1,
    pageSize: 10,
  });

  console.log(data)
  return (
    <div className="flex flex-col xl:gap-16 gap-4 ">
      <div className="flex flex-row rounded-[20px] bg-white items-center justify-center mt-5 gap-4">
        <div className="w-full xl:h-[641px] h-[110px] flex items-center justify-center rounded-[20px]">
          <div className='flex flex-col gap-4 items-center justify-center'>
            <div className="uppercase font-medium xl:text-[54px] text-[.75rem] label">
              <p>Информация</p>
              <p className="text-content-primary">О нашей деятельности</p>
            </div>
            <p className='mx-auto xl:w-[550px] w-[124px] text-[6px] xl:text-2xl'>
              Мы объединяем родителей, специалистов и общественные организации,
              чтобы помочь детям с РАС жить полноценной жизнью.
            </p>
          </div>
        </div>
        <div className='bg-url(`./../img/image 13.png`) w-full h-full rounded-r-[20px]'><img className='rounded-r-[20px]' src={Image}  /></div>
      </div>
      
      <div className="flex flex-row items-center label xl:text-4xl text-[10px] uppercase">
      <p className="text-content-primary">Информация о деятельности сообщества</p>

      </div>
      <div className="grid xl:grid-cols-3 grid-cols-2 gap-2">
          {videos?.media?.map((media, index) => {
            if (index < 3) return <VideoCard key={index} data={media} />;
          })}
        </div>
      <div className="flex flex-row items-center label xl:text-4xl text-[10px] uppercase gap-3">
        
      <p>Свежие новости и</p>
        <p className="text-content-primary">статьи</p>
      </div>
      <div className="flex xl:py-9 flex-col gap-6">
        {/* <div className="xl:grid  hidden grid-cols-3 h-[320px] items-center bg-white rounded-[20px]">
          <div className="bg-slate-500 h-full !w-[500px] rounded-[20px]"></div>
          <div className="flex flex-col col-span-2 gap-4 py-7 pr-8">
            <p className="text-4xl text-balance label">
              Программы для домашней школы для аутистов: индивидуальные учебные
              планы и ресурсы.
            </p>
            <Divider />
            <p className="text-xl text-balance text-text-secondary">
              Уникальные стили обучения аутистов выигрывают от индивидуального
              домашнего обучения. Оно открывает мир индивидуальных возможностей.
              Оно позволяет использовать полезные инструменты. Это и наглядные
              пособия, и практические занятия, и высокотехнологичные средства.
              Все они подстраиваются под конкретные потребности детей.
            </p>
          </div>
        </div> */}
        <div className="grid xl:grid-cols-3 grid-cols-2 gap-8">
          {data?.news?.map((news, index) => {
            if (index < 6) return <CommunityCard key={index} data={news} />;
          })}
        </div>
        
      </div>
      <div
        className="fixed bottom-10 right-5 bg-content-primary rounded-full flex items-center justify-center p-2"
        onClick={() => navigate({ to: '/chat' })}
      >
        <Chat fill="#fff" />
      </div>
    </div>
  );
}

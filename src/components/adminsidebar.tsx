import { DocumentText } from '@atomaro/icons';
import Logo from './../img/ico.png';
import { useActive } from '../utils/zustand';
const AdminSidebar = () => {
  const active = useActive((state) => state.active);
  const setActive = useActive((state) => state.setActive);
  return (
    <div className="w-[267px] bg-white flex flex-col gap-5 p-4 rounded-[20px] h-fit">
      <div className="bg-bg flex flex-row items-center gap-[10px] py-3 px-[21px] w-[235px] rounded-lg">
        <img src={Logo} className="w-8 h-8" />
        <div className="flex text-[21px] leading-6 label font-bold flex-row items-center">
          <p>НЕЙРО</p>
          <p className="text-content-primary">АДМИНКА</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div
          className={`flex flex-row items-center p-2 gap-3 rounded-xl hover:bg-[#E8F7FF] ${active === 'news' ? 'bg-content-primary bg-opacity-20' : ''} `}
          onClick={() => setActive('news')}
        >
          <DocumentText fill={active === 'news' ? '#00A9FF' : '#000'} />
          <p>Новостные статьи</p>
        </div>
        <div
          className={`flex flex-row items-center p-2 gap-3 rounded-xl hover:bg-[#E8F7FF] ${active === 'archive' ? 'bg-content-primary bg-opacity-20' : ''} `}
          onClick={() => setActive('archive')}
        >
          <DocumentText fill={active === 'archive' ? '#00A9FF' : '#000'} />
          <p>Архив</p>
        </div>
        <div
          className={`flex flex-row items-center p-2 gap-3 rounded-xl hover:bg-[#E8F7FF] ${active === 'resourses' ? 'bg-content-primary bg-opacity-20' : ''} `}
          onClick={() => setActive('resourses')}
        >
          <DocumentText fill={active === 'resourses' ? '#00A9FF' : '#000'} />
          <p>Ресурсы</p>
        </div>
        <div
          className={`flex flex-row items-center p-2 gap-3 rounded-xl hover:bg-[#E8F7FF] ${active === 'specialist' ? 'bg-content-primary bg-opacity-20' : ''} `}
          onClick={() => setActive('specialist')}
        >
          <DocumentText fill={active === 'specialist' ? '#00A9FF' : '#000'} />
          <p>Специалисты</p>
        </div>
        <div
          className={`flex flex-row items-center p-2 gap-3 rounded-xl hover:bg-[#E8F7FF] ${active === 'tags' ? 'bg-content-primary bg-opacity-20' : ''} `}
          onClick={() => setActive('tags')}
        >
          <DocumentText fill={active === 'tags' ? '#00A9FF' : '#000'} />
          <p>Теги</p>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;

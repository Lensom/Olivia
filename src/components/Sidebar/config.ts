import { INavConfig } from './interface';
import { home, categories, profile, newVideo } from '../../global/img/sidebar';

export const config: INavConfig = {
  items: [
    {
      id: 0,
      text: 'Главная',
      url: '/',
      Image: home,
    },
    {
      id: 1,
      text: 'Добавить видео',
      url: '/new-video',
      Image: newVideo,
    },
    {
      id: 2,
      text: 'Категории',
      url: '/caterogies',
      Image: categories,
    },
    {
      id: 3,
      text: 'Профиль',
      url: '/profile',
      Image: profile,
    }
  ]
}
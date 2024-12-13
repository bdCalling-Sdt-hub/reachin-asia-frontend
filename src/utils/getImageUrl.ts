import { imageUrl } from '@/redux/base/baseApi';
import Logo from '@/assets/images/main/logo.svg';
export const getImageUrl = (url: string | undefined) => {
      if (!url) {
            return Logo.src;
      }

      if (url.startsWith('https')) {
            return url;
      }
      return `${imageUrl}/${url}`;
};

export const checkIsLiked = (likeList: string[],) => {
    return likeList.includes('');
  };

 export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }


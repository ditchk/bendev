import React from 'react';

type TruncateProps = {
  text: string;
  maxLength: number;
};

const truncate = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};

const TruncateTitle: React.FC<TruncateProps> = ({ text, maxLength }) => {
  return (
    <div>
        <p className="Blog-Title">{truncate(text, maxLength)}</p>
    </div>
  )
};

export default TruncateTitle;
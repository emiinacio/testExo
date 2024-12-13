import React from 'react';
import { FormatterComponentProps } from '.';
import { FaStar, FaRegStar } from 'react-icons/fa';

export interface StarsFormatterProps {
  stars?: number;
}

function StarsFormatter({ params, value }: FormatterComponentProps<StarsFormatterProps>) {
  const totalStars = params.stars ? params.stars : 5;
  const activatedStars = Number(value);

  return (
    <>
      {Array.from({ length: totalStars }).map((_, index) => (
        <span key={index} style={{ color: '#ffc107' }}>
          {index < activatedStars ? <FaStar /> : <FaRegStar />}
        </span>
      ))}
    </>
  );
}

export default StarsFormatter;

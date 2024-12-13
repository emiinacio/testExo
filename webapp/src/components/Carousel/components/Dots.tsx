import React, { useCallback, useEffect, useState } from 'react';
import { DotsProps } from '../types/types';

const Dots = ({ qtdPages, selectedPage, onChangeSelectedPage }: DotsProps) => {
  const [circles, setCircles] = useState<number>(1);

  useEffect(() => {
    setCircles(Number(qtdPages));
  }, [qtdPages]);

  const styleToInsert = useCallback(
    (index: number) => {
      if (selectedPage == index + 1) {
        return { fontSize: 10, color: '#ffffff' };
      } else {
        return { fontSize: 10, color: '#ffffff', opacity: '50%' };
      }
    },
    [selectedPage]
  );

  return (
    <>
      {circles > 0 &&
        Array(circles)
          .fill(0)
          .map((item, index) => {
            return (
              <div
                key={index}
                onClick={(ev) => {
                  onChangeSelectedPage(index + 1);
                }}
                style={{ cursor: 'pointer' }}
              >
                <i className="fa-solid fa-circle" style={styleToInsert(index)}></i>
              </div>
            );
          })}
    </>
  );
};

export default Dots;

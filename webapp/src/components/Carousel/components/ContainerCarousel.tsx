import React, { useEffect, useState } from 'react';
import { CarouselProps } from '../types/types';
import styles from './styles.module.css';
import Dots from './Dots';

export const ContainerCarousel = ({
  qtdPages,
  selectedPage,
  timeToChange,
  children,
  className
}: CarouselProps) => {
  const [quantityPage, setQuantityPage] = useState<number>(qtdPages ?? 1);
  const [currSelectedPage, setCurrSelectedPage] = useState<number>(selectedPage);

  const onChangeSelectedPage = (val: number) => {
    setCurrSelectedPage(val);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextValue = currSelectedPage + 1;
      if (nextValue > quantityPage) {
        setCurrSelectedPage(1);
      } else {
        setCurrSelectedPage(nextValue);
      }
    }, timeToChange);
    return () => clearTimeout(timer);
  }, [currSelectedPage, quantityPage]);

  return (
    <div className={`${styles.containerCarousel} ${className}`}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return;
        const { keyValue } = child.props;
        if (!keyValue) return;
        if (keyValue === currSelectedPage) {
          return child;
        }
      })}
      <div className={styles.containerDots}>
        <div className={styles.boxDots}>
          <Dots
            qtdPages={quantityPage}
            selectedPage={currSelectedPage}
            onChangeSelectedPage={onChangeSelectedPage}
          />
        </div>
      </div>
    </div>
  );
};

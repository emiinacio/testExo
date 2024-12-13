export type CarouselProps = {
  selectedPage: number;
  qtdPages: number;
  timeToChange: number;
  children: React.ReactNode;
  className?: string;
};

export type DotsProps = {
  qtdPages: number;
  selectedPage: number;
  onChangeSelectedPage: (val: number) => void;
};

export type ItemProps = {
  keyValue: number;
  children?: React.ReactNode;
};

export interface ChristmasCard {
  id: string;
  message: string;
  backgroundColor: string;
  textColor: string;
  font: string;
  createdAt: string;
}

export interface ContentfulChristmasCard {
  sys: {
    id: string;
  };
  fields: {
    message: string;
    backgroundColor: string;
    textColor: string;
    font: string;
  };
}

export interface CardProps {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  message?: string; // オプション (存在しない場合もあるため)
  html?: string;
};

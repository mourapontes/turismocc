
export interface GuideItem {
  name: string;
  image?: string;
  description?: string;
  details: { [key: string]: string | string[] };
  subItems?: GuideItem[];
}

export interface Section {
  key: SectionKey;
  title: string;
  items: GuideItem[];
}

export type SectionKey = 
  | 'home'
  | 'natural_attractions'
  | 'cultural_attractions'
  | 'religious_attractions'
  | 'lodging'
  | 'food_drink'
  | 'leisure_events'
  | 'support_services';

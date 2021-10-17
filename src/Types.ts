export interface LocProp {
  location: {
    state: number | undefined;
  };
}

export interface WorkProp {
  id: number;
  name: string[];
  thumbnails?: string;
  script: string[];
  titleImg?: string;
  works: {
    name: string;
    img?: string;
    video?: string;
    form?: string;
    ytLink?: string;
  }[];
}

export interface ThumbnailProp {
  src: string;
  alt: string;
}

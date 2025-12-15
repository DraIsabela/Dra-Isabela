export interface ExpertInfo {
  name: string;
  profession: string;
  address: string;
  whatsappLink: string;
  instagramLink: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  category: 'hero' | 'gallery' | 'expert';
}

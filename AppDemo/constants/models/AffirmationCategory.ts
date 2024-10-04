export interface AffirmationCategory {
     title: string;
     data: GalleryPreviewData[];
 }
 
 export interface GalleryPreviewData {
     id: number |string;
     text: string;
     image: any;
 }
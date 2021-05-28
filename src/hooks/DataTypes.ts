type EmbededPostData = {
  imageIdentifier?:string;
  description?:string;
  userId?:string;
  title?:string;
  designerId: string;
  imageUrls?:string[];

}
type PostData = {
  id?:string;
  data: EmbededPostData;
}
export type {PostData};
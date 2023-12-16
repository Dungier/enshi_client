export interface IUploadPhoto {
  setFile: (arg: File) => void;
  setResponseData: (arg: IUploadPhotoResponse[]) => void;
}

export interface IUploadPhotoResponse {
  url: string;
  name: string;
}

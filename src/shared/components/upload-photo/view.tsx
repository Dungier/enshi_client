import { Box, Button } from "@mui/material";
import { FC, useRef } from "react";
import PhotoService from "./model";
import { IUploadPhoto } from "./types";
import { useMutation } from "@tanstack/react-query";

export const UploadPhoto: FC<IUploadPhoto> = ({ setFile, setResponseData }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { mutateAsync: upload } = useMutation({
    mutationKey: ["upload-photo"],
    mutationFn: async (file: File) => {
      try {
        const response = await PhotoService.upload(file, "sliders");
        setResponseData(response);
      } catch (error) {
        console.error("Error uploading the file:", error);
      }
    },
  });

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      setFile(files[0]);
      await upload(files[0]);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return (
    <Box>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept=".jpg, .jpeg, .gif, .png"
      />
      <Button
        sx={{ width: "100%" }}
        onClick={() => fileInputRef.current?.click()}
      >
        Выбрать файл
      </Button>
    </Box>
  );
};

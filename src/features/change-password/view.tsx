import { Input } from "@/shared/components/input";
import { Box, Button, Typography } from "@mui/material";

export const ChangePassword = () => {
  return (
    <Box>
      <Box>
        <Typography>Сменить пароль</Typography>
        <Input placeholder="Старый пароль" />
        <Input placeholder="Новый пароль" />
        <Input placeholder="Повторите пароль" />
        <Button>Сохранить</Button>
      </Box>
    </Box>
  );
};

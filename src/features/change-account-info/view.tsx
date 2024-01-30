import { Input } from "@/shared/components/input";
import { Box, Button, Typography } from "@mui/material";

export const ChangeAccountInfo = () => {
  return (
    <Box>
      <Box>
        <Typography>Логин</Typography>
        <Input placeholder="Старый пароль" />
        <Typography>Почта</Typography>
        <Input placeholder="Новый пароль" />

        <Button>Сохранить</Button>
      </Box>
    </Box>
  );
};

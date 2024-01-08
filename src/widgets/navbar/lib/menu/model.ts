import { IUser } from "@/shared/types/user.type";

export const navList = (
  user: IUser | undefined
): { link: string; label: string }[] =>
  [
    {
      link: "/",
      label: "Главная",
    },
    {
      link: "/catalog",
      label: "Каталог",
    },
    {
      link: "/top",
      label: "ТОП - 100",
    },

    user
      ? {
          link: `/profile`,
          label: "Профиль",
        }
      : {
          link: "/login",
          label: "Войти",
        },
    {
      link: "https://vk.com/app5727453",
      label: "Поддержать нас",
    },
    user &&
      user.admin && {
        link: "/admin",
        label: "Админ Панель",
      },
  ].filter(Boolean) as { link: string; label: string }[];

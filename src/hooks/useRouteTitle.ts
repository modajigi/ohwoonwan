import { usePathname, useRouter } from "next/navigation";

const useRouteTitle = (): string => {
  const pathname = usePathname();
  const router = useRouter();

  switch (pathname) {
    case "/today":
      return "오늘의 운세";
    case "/fortune":
      return "🌙 사주";
    default:
      return "";
  }
};

export default useRouteTitle;
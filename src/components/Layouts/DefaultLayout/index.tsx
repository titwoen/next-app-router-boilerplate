import type { ReactNode } from "react";

import { StoreProvider } from "@/components/Providers";

export default function DefaultLayout({ children }: { children?: ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}

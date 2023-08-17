"use client";
import { usePathname } from "next/navigation";

/* 
  This file is responsible for preventing any component defined 
  outside of the children component in the layout.tsx file from showing up on the studio.

  * To use it, simply wrap the component with <UnmountStudio></UnmountStudio>
*/

export default function UnmountStudio({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (pathname.startsWith("/studio")) return null;
  return <>{children}</>;
}

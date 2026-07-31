import Image from "next/image";

export function VisionCraftLogo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Image src="/logo-icon.png" width={22} height={22} alt="logo" />
      <h1 className="text-xl font-semibold text-dark-700">VisionCraft AI</h1>
    </div>
  );
}

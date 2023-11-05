import { Drawer } from "@/components/Drawer";

export default function DiplayDrawer() {
  return (
    <>
      <Drawer
        items={[{ itemName: "example1" }, { itemName: "example2" }]}
        text="open Drawer"
      />
    </>
  );
}

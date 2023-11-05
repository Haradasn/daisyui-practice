import { Button } from "@/components/Button";

export default function Home() {
  return (
    <>
      <div className="flex mx-auto w-full justify-center">
        {/* 以下スタイルでほぼ同じ表示が出ます */}

        {/* Tailwind CSS */}
        <Button
          text="Tailwind"
          className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900 example-button"
        />

        {/* daisyUI */}
        <Button text="daisy" className="btn example-button" />
      </div>
    </>
  );
}

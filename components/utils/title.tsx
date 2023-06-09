"use client";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div className="flex items-center mb-2 w-full">
      <h2 className="h2 mt-2 mb-2 mr-4 text-purple-400 font-semibold">
        {title}
      </h2>
      <hr className="flex-1 border-t-0 md:border-t-2 border-gray-500" />
    </div>
  );
}

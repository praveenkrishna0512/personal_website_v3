"use client";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div className="flex items-center mb-6">
      <h2 className="h2 mt-2 mb-2 mr-4 text-purple-400">
        {title}
      </h2>
      <hr className="w-0 md:w-1/2 border-t-2 border-gray-500" />
    </div>
  );
}

"use client";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div className="flex items-center">
      <h1 className="h1 mt-2 mb-2 mr-8">
        {title}
      </h1>
      <hr className="w-1/2 border-t-2 border-gray-500" />
    </div>
  );
}

interface TagProps {
    title: string;
  }

export default function Tag({ title }: TagProps) {
    return (
        <div className="w-auto h-auto text-xs px-2 py-1 text-white border-2 border-purple-700 rounded-full">
            {title}
        </div>
    )

}
interface TagProps {
    title: string;
  }

export default function Tag({ title }: TagProps) {
    return (
        <div className="text-xs px-2 py-1 my-1 mr-1 text-white border-2 border-purple-700 rounded-full">
            {title}
        </div>
    )

}
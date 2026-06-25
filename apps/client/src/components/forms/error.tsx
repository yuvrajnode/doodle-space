const Error = ({ text }: { text?: string }) => {
  if (!text) return null;
  return (
    <div className="flex items-center gap-2 text-red-400 text-sm">
      <div className="w-1 h-1 rounded-full bg-red-400" />
      {text}
    </div>
  );
}

export default Error;

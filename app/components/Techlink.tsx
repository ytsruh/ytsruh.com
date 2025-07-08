
interface TechlinkProps {
  text: string;
}

export default function Techlink({ text }: TechlinkProps) {
  return (
    <div className="bg-theme px-2 py-1 text-xs uppercase">
      {text}
    </div>
  );
}

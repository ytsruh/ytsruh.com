
interface VisitlinkProps {
  type: string;
  link: string;
}

export default function Visitlink({ type, link }: VisitlinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="border border-theme px-4 py-2 text-sm capitalize hover:bg-theme"
    >
      {type}
    </a>
  );
}

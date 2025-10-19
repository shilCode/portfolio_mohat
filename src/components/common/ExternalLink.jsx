const ExternalLink = ({ href, children, className = "" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`hover:text-palette1 transition-colors ${className}`}
    >
      {children}
    </a>
  );
};

export default ExternalLink;

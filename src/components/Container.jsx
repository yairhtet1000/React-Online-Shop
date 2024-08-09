export default function Container(prop) {
  const { children, className } = prop;
  return (
    <div className={` w-full lg:max-w-6xl mx-auto px-5 ${className}`}>
      {children}
    </div>
  );
}

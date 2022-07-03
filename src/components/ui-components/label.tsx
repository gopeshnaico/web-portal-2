export interface labelProps {
  labelText?: string;
  className?: string;
}

export function label({ labelText, className }: labelProps) {
  return (
    <>
      <p className={className}>{labelText} </p>
    </>
  );
}
export default label;

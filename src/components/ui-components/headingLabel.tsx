export interface headingLabelProps {
  labelText?: string;
  className?: string;
}

export function headingLabel({ labelText, className }: headingLabelProps) {
  return (
    <>
      <h1 className={className}>{labelText}</h1>
    </>
  );
}
export default headingLabel;

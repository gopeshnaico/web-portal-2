export interface passwordProps {
  placeHolder?: string;
  textBoxName?: string;
  className?: string;
}

export function password({
  placeHolder,
  textBoxName,
  className,
}: passwordProps) {
  return (
    <>
      <input
        type="password"
        className={className}
        name={textBoxName}
        placeholder={placeHolder}
      />
    </>
  );
}
export default password;

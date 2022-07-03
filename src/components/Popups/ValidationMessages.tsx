export const ValidationMessages = ({ message }) => {
  return (
    <div className="errorMessage details warning-color">
      <p data-testid="passwordErrorMessage">{message}</p>
    </div>
  );
};

import { useEffect, useState } from 'react';
import { MessageBox } from '../components/Popups/MessageBox';

export const ErrorHandlingWithResponse = ({ error, setErrorOpen }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [type, setType] = useState<string>('error');

  const titleCase = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
      })
      .join(' ');
  };

  useEffect(() => {
    if (error?.isVerified === false || error?.isVerified === null) {
      setType('error');
      setOpen(true);
      setMessage(error?.message);
    } else if (error?.errors?.length !== 0) {
      if (error?.errors && error?.errors[0]?.extensions) {
        if (
          error?.errors &&
          error?.errors[0]?.extensions?.code === 'BAD_USER_INPUT'
        ) {
          if (error?.errors[0]?.extensions?.message?.length > 0) {
            if (
              error?.errors[0]?.extensions?.message[0]?.constraints?.length > 0
            ) {
              if (
                error?.errors[0]?.extensions?.message[0]?.constraints[0]
                  ?.constraints?.length > 0
              ) {
                const message =
                  error?.errors[0]?.extensions?.message[0]?.constraints[0]
                    ?.constraints[0]?.constraints[0]?.constraints;
                setType('error');
                setOpen(true);
                setMessage(titleCase(message));
              } else {
                const keys = Object?.keys(
                  error?.errors[0]?.extensions?.message[0]?.constraints[0]
                    ?.constraints
                )[0];

                setType('error');
                setOpen(true);
                setMessage(
                  error?.errors[0]?.extensions?.message[0]?.constraints[0]
                    ?.constraints[keys]
                );
              }
            } else {
              const keys = Object?.keys(
                error?.errors[0]?.extensions?.response?.message[0]?.constraints
              )[0];
              setType('error');
              setOpen(true);
              setMessage(
                error?.errors[0]?.extensions?.response?.message[0]?.constraints[
                  keys
                ]
              );
            }
          } else {
            setType('error');
            setOpen(true);
            setMessage(error?.errors[0]?.message);
          }
        } else if (
          error?.errors &&
          error?.errors[0]?.extensions?.code === 'FORBIDDEN'
        ) {
          if (error?.errors && error?.errors[0]) {
            setType('error');
            setOpen(true);
            setMessage(error?.errors[0].message);
          }
        } else if (
          error?.errors &&
          error?.errors[0]?.extensions?.code === 'INTERNAL_SERVER_ERROR'
        ) {
          setType('error');
          setOpen(true);
          setMessage(error?.errors[0].message);
        } else if (
          error?.errors &&
          error?.errors[0]?.extensions?.code === 'UNAUTHENTICATED'
        ) {
          setType('error');
          setOpen(true);
          setMessage(error?.errors[0].message);
        } else if (
          error?.errors &&
          error?.errors[0]?.extensions?.code === '500'
        ) {
          setType('error');
          setOpen(true);
          setMessage(error?.errors[0].message);
        } else {
          setType('error');
          setOpen(true);
          setMessage('Something went wrong !');
        }
      } else {
        setType('error');
        setOpen(true);
        setMessage('Something went wrong !');
      }
    }
  }, [error]);

  const closeError = () => {
    setOpen(false);
    setErrorOpen(false);
  };

  return (
    <>
      <MessageBox {...{ open, message, type }} setOpen={closeError} />
    </>
  );
};

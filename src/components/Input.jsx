import { forwardRef } from 'react';
const className = 'w-full p-2 border border-gray-300 rounded mt-1';

const Input = forwardRef(({label, textarea, newProjectRef, ...props}, ref) => {
  return (
    <>
      <label className="block text-lg font-medium">{label}</label>
      {textarea ? (
      <textarea
        ref={ref}
        className={className}
        required
        {...props}
      />
      ) : (
      <input
        ref={ref}
        className={className}
        required
        {...props}
      />
      )}
    </>
  )
});

export default Input;
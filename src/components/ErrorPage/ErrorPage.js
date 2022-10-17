import React from 'react';
import ErrorSvg from '../../ErrorSvg';
function ErrorPage() {
  return (
    <div className='container'>
      <div className='max-w-[400px] mx-auto min-h-[300px] text-slate-200 text-3xl font-medium mb-24'>
        <ErrorSvg />
        404 This Page doesn't Exist.
      </div>
    </div>
  );
}

export default ErrorPage;

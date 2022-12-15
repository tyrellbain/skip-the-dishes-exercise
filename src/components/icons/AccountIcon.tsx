import * as React from 'react';

function AccountIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 2.4A9.6 9.6 0 112.4 12 9.611 9.611 0 0112 2.4zM12 0a12 12 0 100 24 12 12 0 000-24z"
        fill="#8D9499"
      />
      <path
        d="M12 4.488a3.6 3.6 0 100 7.2 3.6 3.6 0 000-7.2zM18.927 16c-.38-.751-.805-1.351-1.264-1.563-2.033-.938-3-1.258-5.747-1.258-2.693 0-3.786.451-5.541 1.208-.48.206-.92.823-1.31 1.6a7.993 7.993 0 0013.862.014V16z"
        fill="#8D9499"
      />
    </svg>
  );
}

export default AccountIcon;

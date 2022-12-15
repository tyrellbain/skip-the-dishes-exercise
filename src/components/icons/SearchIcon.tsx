import * as React from 'react';

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} {...props}>
      <path
        d="M12.669 11.227l3.034 3.034a1.021 1.021 0 010 1.44 1.02 1.02 0 01-1.44 0l-3.035-3.033a7.03 7.03 0 111.44-1.44h.001zm-5.639.998a5.196 5.196 0 100-10.391 5.196 5.196 0 000 10.391z"
        fill="#8D9499"
      />
    </svg>
  );
}

export default SearchIcon;

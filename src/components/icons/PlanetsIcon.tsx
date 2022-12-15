import * as React from "react"

function PlanetsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.614 6.255c.1.454.154.924.171 1.404H.097C.246 3.449 3.696.08 7.941.08c1.207 0 2.346.28 3.368.766v.918h-.561v.561h1.122v.562h-.561v.56h1.123v.562h.56v.561H11.31v.562h2.245v.561h-1.122v.561h3.182zM7.38 4.01a2.246 2.246 0 10-4.491 0 2.246 2.246 0 004.49 0zm1.684 11.226h.561v.376a7.886 7.886 0 01-1.684.185C3.696 15.797.246 12.43.097 8.22h15.688c-.017.48-.072.95-.17 1.403h-2.622v.561h1.123v.562H11.87v.561h-1.122v.561h1.684v.562h1.122v.56h-.561v.562h-1.684v.562h-.561v.56H9.064v.562z"
        fill="#172026"
      />
    </svg>
  )
}

export default PlanetsIcon

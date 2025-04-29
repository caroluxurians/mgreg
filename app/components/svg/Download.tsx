const Download = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Interface / Download">
        <path
          id="Vector"
          d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default Download;

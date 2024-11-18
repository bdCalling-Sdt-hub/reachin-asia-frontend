import React from 'react';

const Loader = () => {
      return (
            <div className="loader-container container min-h-[calc(100vh-80px)]">
                  <svg
                        className="container"
                        x="0px"
                        y="0px"
                        viewBox="0 0 55 23.1"
                        height="23.1"
                        width="55"
                        preserveAspectRatio="xMidYMid meet"
                  >
                        <path
                              className="track"
                              fill="none"
                              strokeWidth="4"
                              pathLength="100"
                              d="M26.7,12.2c3.5,3.4,7.4,7.8,12.7,7.8c5.5,0,9.6-4.4,9.6-9.5C49,5,45.1,1,39.8,1c-5.5,0-9.5,4.2-13.1,7.8l-3.4,3.3c-3.6,3.6-7.6,7.8-13.1,7.8C4.9,20,1,16,1,10.5C1,5.4,5.1,1,10.6,1c5.3,0,9.2,4.5,12.7,7.8L26.7,12.2z"
                        />
                        <path
                              className="car"
                              fill="none"
                              strokeWidth="4"
                              pathLength="100"
                              d="M26.7,12.2c3.5,3.4,7.4,7.8,12.7,7.8c5.5,0,9.6-4.4,9.6-9.5C49,5,45.1,1,39.8,1c-5.5,0-9.5,4.2-13.1,7.8l-3.4,3.3c-3.6,3.6-7.6,7.8-13.1,7.8C4.9,20,1,16,1,10.5C1,5.4,5.1,1,10.6,1c5.3,0,9.2,4.5,12.7,7.8L26.7,12.2z"
                        />
                  </svg>

                  <style jsx>{`
                        .loader-container {
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              height: 100vh;
                        }

                        .container {
                              --uib-size: 130px;
                              --uib-color: #2375d0;
                              --uib-speed: 1.3s;
                              --uib-bg-opacity: 0.1;
                              height: calc(var(--uib-size) * (2.1 / 5));
                              width: var(--uib-size);
                              transform-origin: center;
                              overflow: visible;
                        }

                        .car {
                              fill: none;
                              stroke: var(--uib-color);
                              stroke-dasharray: 15, 85;
                              stroke-dashoffset: 0;
                              stroke-linecap: round;
                              animation: travel var(--uib-speed) linear infinite;
                              will-change: stroke-dasharray, stroke-dashoffset;
                              transition: stroke 0.5s ease;
                        }

                        .track {
                              stroke: var(--uib-color);
                              opacity: var(--uib-bg-opacity);
                        }

                        @keyframes travel {
                              0% {
                                    stroke-dashoffset: 0;
                              }
                              100% {
                                    stroke-dashoffset: 100;
                              }
                        }
                  `}</style>
            </div>
      );
};

export default Loader;

import "../../App.css";

interface IButtons {
  handleReset: () => void;
  handleFontClick: (increase: boolean) => void;
}

export default function Buttons({ handleReset, handleFontClick }: IButtons) {
  return (
    <div className="buttonsWrapper">
      <div className="button size">
        <span>Adjust Font</span>

        <span onClick={() => handleFontClick(false)} className="operator minus">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z"
              fill="#006cff"
            />
          </svg>
        </span>

        <span onClick={() => handleFontClick(true)} className="operator plus">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 3C13.5 2.44772 13.0523 2 12.5 2H11.5C10.9477 2 10.5 2.44772 10.5 3V10.5H3C2.44772 10.5 2 10.9477 2 11.5V12.5C2 13.0523 2.44772 13.5 3 13.5H10.5V21C10.5 21.5523 10.9477 22 11.5 22H12.5C13.0523 22 13.5 21.5523 13.5 21V13.5H21C21.5523 13.5 22 13.0523 22 12.5V11.5C22 10.9477 21.5523 10.5 21 10.5H13.5V3Z"
              fill="#006cff"
            />
          </svg>
        </span>
      </div>

      <div onClick={handleReset} className="button randomness">
        Reset
      </div>
    </div>
  );
}

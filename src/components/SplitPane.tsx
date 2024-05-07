type SplitPlanePropsType = {
    left: JSX.Element,
    right: JSX.Element
};

function SplitPane({ left, right }: SplitPlanePropsType) {
  return ( 
    <div>
      <div>
        { left }
      </div>
      <div>
        { right }
      </div>
    </div>
   );
}

export default SplitPane;
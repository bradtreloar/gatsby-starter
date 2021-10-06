import React from "react";

interface WrapperProps {
  items: ItemProps[];
}

interface ItemProps {
  label: string;
  render: () => JSX.Element;
}

const Wrapper: React.FC<WrapperProps> = ({ items }) => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  const options = items.map(({ label }, index) => (
    <option key={index} value={index}>
      {label}
    </option>
  ));

  const content = items[activeTabIndex].render();

  return (
    <>
      <select
        className="custom-select my-3"
        onChange={event => {
          const index = parseInt(event.target.value);
          setActiveTabIndex(index);
        }}
      >
        {options}
      </select>
      <div>{content}</div>
    </>
  );
};

export default Wrapper;

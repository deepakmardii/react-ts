interface childProps {
  color: string;
}

const Child: React.FC<childProps> = ({ color }) => {
  return <div>{color}</div>;
};

export default Child;

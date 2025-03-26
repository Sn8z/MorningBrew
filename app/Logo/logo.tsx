import { useEffect, useState } from "react";

export const Logo = ({ size = 128 }) => {
  const [logoSize, setLogoSize] = useState(size);
	const [count, setCount] = useState(0);

  const handleClick = () => {
    setLogoSize(logoSize + 32);
		setCount(count + 1);
  };

	useEffect(() => {
		console.log(logoSize);
	}, [logoSize]);

	useEffect(() => {
		console.log(count);
	}, [count]);

	useEffect(() => {
		console.log("Robin va hör");
	}, [logoSize, count]);
	
  return (
    <button onClick={handleClick}>
      <img
        src='https://placehold.co/160'
        alt='MorningBrew logo'
        width={logoSize}
        height={logoSize}
      />
			<p>{count}</p>
    </button>
  );
};

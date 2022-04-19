import { useEffect, useState } from 'react';

const BottonSheet = ({
  isBottonSheetOpen,
  setIsBottonSheetOpen,
  children,
  setbottonSheetAnimation,
  bottonSheetAnimation,
}) => {
  const [animation, setAnimation] = useState({
    container: '',
    bottonSheet: 'default-hidden',
  });

  useEffect(() => {
    setAnimation({
      container: '',
      bottonSheet: 'bottonsheet-animation-in',
    });
  }, []);

  useEffect(() => {
    const closeAlert = () => {
      const timer = setTimeout(() => {
        setbottonSheetAnimation(false);
        setIsBottonSheetOpen(false);
        return () => clearTimeout(timer);
      }, 300);
    };

    bottonSheetAnimation &&
      setAnimation({
        container: 'container-bottonsheet-animation-out',
        bottonSheet: 'bottonsheet-animation-out',
      });
    bottonSheetAnimation && closeAlert();
  }, [bottonSheetAnimation, setIsBottonSheetOpen, setbottonSheetAnimation]);

  return (
    <div className={`bottonSheet-container ${animation.container}`}>
      <div className={`bottonSheet ${animation.bottonSheet}`}>{children}</div>
    </div>
  );
};

export default BottonSheet;

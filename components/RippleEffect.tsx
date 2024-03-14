"use client";

const RippleEffect = ({ children, onClick, style }: RippleEffectTypes) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick ? onClick(e) : null;
    const ripple = document.createElement("span");
    const x =
      ((e.pageX - e.currentTarget.offsetLeft) * 100) /
      e.currentTarget.offsetWidth;
    const y =
      ((e.pageY - e.currentTarget.offsetTop) * 100) /
      e.currentTarget.offsetHeight;
    ripple.style.position = "absolute";
    ripple.style.transform = "translate(-50%, -50%)";
    ripple.style.animation = "ripple-effect 0.7s linear infinite";
    ripple.style.borderRadius = "100%";
    ripple.style.left = `${x}%`;
    ripple.style.top = `${y}%`;
    ripple.style.background = "rgba(59,83,205,0.3)";
    ripple.style.width = "5px";
    ripple.style.height = "20px";
    ripple.style.pointerEvents = "none";
    e.currentTarget.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 700);
  };
  return (
    <button
      className={`relative overflow-hidden duration-200 hover:bg-slate-200 ${style}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default RippleEffect;

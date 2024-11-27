export default function ProfileIcon({
  width = '24',
  height = '24',
  className = 'profile-icon',
}) {
  return (
    <div className="profile-icon-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={width}
        height={height}
        className={className}
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.91"
        strokeMiterlimit="10"
      >
        <circle cx="12" cy="7.25" r="5.73" />
        <path d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05" />
      </svg>
    </div>
  );
}

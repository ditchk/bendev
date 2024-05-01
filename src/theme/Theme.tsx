import { useTheme } from './useTheme';

export const Theme = () => {
  const [theme, handleChange] = useTheme();

  return (
    <div className="container-switch">
      <span>Change Theme </span>
      <label className="switch">
        <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
        <span className="slider"></span>
      </label>
    </div>
  );
};
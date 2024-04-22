import './Ability.scss';

export default function Ability({ tool, name}: any) {
  return (
    <>
      <div className="tool">
        <div className="name">{name}</div>
        <div className="icon">{tool}</div>
      </div>
    </>
  );
}
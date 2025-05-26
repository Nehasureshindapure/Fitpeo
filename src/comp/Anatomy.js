function Anatomy() {
  return (
    <div className="anatomy">
        <h2> Dashboard </h2>
      <img src="/img/avtar.jpg" alt="body" className="anatomy-img" />
      <div className="labels">
        <div className="label green">
            <h4> This Week &#9660;</h4>
          <img src="/img/heart.png" alt="Heart" className="icon" />
          <strong>&nbsp;Heart</strong> Healthy
        </div>
        <div className="label red">
          <img src="/img/lungs.png" alt="Lungs" className="icon" />
          <strong>Lungs</strong> Low Oxygen
        </div>
        <div className="label blue">
          <img src="/img/teeth.png" alt="Teeth" className="icon" />
          <strong>&nbsp;Teeth</strong> Good
        </div>
        <div className="label gray">
          <img src="/img/bone.png" alt="Bone" className="icon" />
          <strong>&nbsp;Bone</strong> Stable
        </div>
      </div>
    </div>
  );
}

export default Anatomy;

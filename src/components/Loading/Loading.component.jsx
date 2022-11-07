import './Loading.styles.scss';

export const Loading = () => {

  return (
    <>
      <h5 className='loading-text'>Let me check...</h5>
      <div class="scene">
        <img class="car" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/car.svg" alt="" />
        <img class="poof" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/poof.svg" alt="" />
        <img class="sign" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/sign.svg" alt="" />
      </div>
    </>
  );
}

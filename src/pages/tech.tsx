export default function Tech() {
  function handleError() {
    throw new Error();
  }

  return (
    <div>
      <button onClick={handleError}>Break the world</button>;
    </div>
  );
}

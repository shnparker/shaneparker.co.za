export default function Tech() {
  function handleError() {
    throw new Error("Caught error with sentry");
  }

  return (
    <div>
      <button onClick={handleError}>Break the world</button>;
    </div>
  );
}

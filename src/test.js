export default function Test() {
  const elmStyel = {
    backgroundColor: "red",
  };
  return (
    <div>
      <h3>Test</h3>
      <h3 style={elmStyel}>Test1</h3>
      <button onClick={hiAlert}>Click</button>
    </div>
  );
}
function hiAlert() {
  alert("Hi");
}

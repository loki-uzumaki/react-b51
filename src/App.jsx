function Hello(props) {
  return (
    <p>Hello {props.username}</p>
  )
}
function App() {
  let user1 = 'lokesh';
  let user2 = 'luffy';
  return (
    <div>
      <h1>Greetings</h1>
      <Hello username={user1} />
      <Hello username={user2} />
    </div>
  )

}
export default App;
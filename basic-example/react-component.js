function Person(props) {
  return (
    <div class="person">
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}

var app = (
  <div>
    <Person name="Oscar" age="28" />
    <Person name="Carlos" age="21" />
  </div>
);

ReactDOM.render(app, document.querySelector('#app')); 
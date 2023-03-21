class TableOfContents extends React.Component {
  render() {
    return (
      <article>
        <h1>My First Component</h1>
        <ol>
          <li>Components: UI Building Blocks</li>
          <li>Defining a Component</li>
          <li>Using a Component</li>
        </ol>
      </article>
    );
  }
}

function App() {
  return (
    <div>
      <header>Header</header>
      <nav>Sidebar</nav>
      <section>
        <TableOfContents />
      </section>
      <footer>Footer</footer>
    </div>
  );
}
ReactDOM.render(<TableOfContents />, document.getElementById('app'));

const Highlight = ({children, type}) => (
  <span className={`relative highlight highlight-${type}`}>
    <span className="relative z-2">{children}</span>
  </span>
);

const Intro = () => (
  <div className="center-ns f4 f3-m f2-l tc w-80-l normal">
    <div className="mb3 mb4-ns">
      <Highlight type="aqua">Lost in Tokyo</Highlight> is a directory of fun places to see, play in
      and <Highlight type="yellow">explore</Highlight>, in <Highlight type="blue">Tokyo</Highlight>,
      Japan.
    </div>
    <div>
      From <Highlight type="blue">museums</Highlight> and{' '}
      <Highlight type="blue">galleries</Highlight>, to{' '}
      <Highlight type="pink">robot restaurants</Highlight> and{' '}
      <Highlight type="pink">kitten cafes</Highlight>, Tokyo is the gift that keeps on giving.{` `}
      <Highlight type="yellow">Dattebayo!</Highlight>
    </div>
  </div>
);

const App = () => (
  <div>
    <div className="min-vh-100 ph4 flex flex-column">
      <Intro />
    </div>
    <div className="flex flex-wrap container">
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

import React from 'react'
import useTimeout from '@taystack/use-timeout'


const TestRow = ({
  isDone,
  timeout,
}) => (
  <div style={{
    background: "cornflowerblue",
    color: "white",
    opacity: isDone ? 1 : 0,
  }}>
    Shows after {timeout / 1000} seconds
  </div>
);


const App = () => {
  const items = [];
  const [t1] = useTimeout(100);
  items.push(<TestRow isDone={t1} timeout={100} />);
  const [t2] = useTimeout(500);
  items.push(<TestRow isDone={t2} timeout={500} />);
  const [t3] = useTimeout(1000);
  items.push(<TestRow isDone={t3} timeout={1000} />);
  const [t4] = useTimeout(1500);
  items.push(<TestRow isDone={t4} timeout={1500} />);
  const [t5] = useTimeout(2000);
  items.push(<TestRow isDone={t5} timeout={2000} />);
  const [t6] = useTimeout(2500);
  items.push(<TestRow isDone={t6} timeout={2500} />);
  const [t7] = useTimeout(3000);
  items.push(<TestRow isDone={t7} timeout={3000} />);

  return (
    <div>
      {items}
    </div>
  )
}
export default App

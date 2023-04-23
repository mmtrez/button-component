import Button from './components/Button';
import './App.scss';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buttons</h1>
      <div className="item">
        <code>{`<Button startIcon="add" />`}</code>
        <Button startIcon="add" />
      </div>
      <div className="item">
        <code>{`<Button variant='outline' endIcon="cart" />`}</code>
        <Button variant="outline" endIcon="cart" />
      </div>
      <div className="item">
        <code>{`<Button variant='text' startIcon="login" />`}</code>
        <Button variant="text" startIcon="login" />
      </div>
      <div className="item">
        <code>{`<Button variant='outline' color='primary' />`}</code>
        <Button variant="outline" color="primary" />
      </div>
      <div className="item">
        <code>{`<Button variant='text' color='danger' />`}</code>
        <Button variant="text" color="danger" />
      </div>
      <div className="item">
        <code>{`<Button variant='text' color='secondary' shadow />`}</code>
        <Button variant="text" color="secondary" shadow />
      </div>
      <div className="item">
        <code>{`<Button shadow />`}</code>
        <Button shadow />
      </div>
      <div className="item">
        <code>{`<Button disable />`}</code>
        <Button disable />
      </div>
      <div className="item">
        <code>{`<Button size='sm' />`}</code>
        <Button size="sm" />
      </div>
      <div className="item">
        <code>{`<Button size='md' />`}</code>
        <Button size="md" />
      </div>
      <div className="item">
        <code>{`<Button size='xl' />`}</code>
        <Button size="xl" />
      </div>
      <div className="item">
        <code>{`<Button color='default' />`}</code>
        <Button color="default" />
      </div>
      <div className="item">
        <code>{`<Button color='primary' />`}</code>
        <Button color="primary" />
      </div>
      <div className="item">
        <code>{`<Button color='secondary' />`}</code>
        <Button color="secondary" />
      </div>
      <div className="item">
        <code>{`<Button color='danger' />`}</code>
        <Button color="danger" />
      </div>
      <div className="item">
        <code>{`<Button color="primary" disable />`}</code>
        <Button color="primary" disable />
      </div>
      <div className="item">
        <code>{`<Button variant="outline" color="secondary" disable />`}</code>
        <Button variant="outline" color="secondary" disable />
      </div>
      <div className="item">
        <code>{`<Button variant="text" color="danger" disable />`}</code>
        <Button variant="text" color="danger" disable />
      </div>
    </div>
  );
}

export default App;

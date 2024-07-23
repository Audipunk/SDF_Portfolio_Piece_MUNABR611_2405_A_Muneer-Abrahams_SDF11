import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);

// Alert dismissible function
document.querySelector('.loopple-alert.loopple-alert-dismissible .close').onclick = function() {
 document.querySelector('.loopple-alert').classList.add('loopple-opacity-0');
 setTimeout(function(){
   document.querySelector('.loopple-alert').remove();
 }, 1000);
}

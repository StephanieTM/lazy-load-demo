import React from 'react';

export default () => {
  if (Math.random() < 0.0001) {
    return render();
  } else {
    return <p>Article</p>;
  }
};

function render() {
  return (
    <div>
      This is an article... a lot of text here
    </div>
  );
}

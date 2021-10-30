import { React } from 'react';

// Understanding React under the hood!

// const Car = (props) => {
//   return React.createElement('div', {id:props.id, className: "carsList"}, [
//     React.createElement('h3', {}, props.make),
//     React.createElement('h3', {}, props.model),
//     React.createElement('h3', {}, props.year),
//   ]);
// };

const Car = (props) => {
  return (
    <div id={props.id} className="carsList">
      <h3>{props.make}</h3>
      <h3>{props.model}</h3>
      <h3>{props.year}</h3>
    </div>
  );
};

export default Car;

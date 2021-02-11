import React from 'react'
import ReactDom from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
//import CommentDetails from './CommentDetails';
//import ApprovalProcess from "./ApprovalProcess";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     (err) => console.log(err) 
//      );
//   return (
//     <div>Latitude: </div>
//     // <div className="ui container comments">
//     // <ApprovalProcess>
//     // <CommentDetails author="NIkita" dateLog="Today 2:00AM" description="Nice blog"/>
//     //  </ApprovalProcess>
//     // <ApprovalProcess>
//     // <CommentDetails author="renuka" dateLog="Yesterday 9:00 PM" description="didn't like it" />
//     // </ApprovalProcess>
//     // </div>
//   );
//    }

   class App extends React.Component {
     render() {
       return <div>Latitude: </div>;
     }
   }

ReactDom.render(<App />,document.getElementById('root'));

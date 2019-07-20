import NotificationBellDemo from './demos/NotificationBellDemo';
import FormInputSuccessDemo from './demos/FormInputDemo';
import StarburstDemo from './demos/StarburstDemo';
import CheckboxDemo from './demos/CheckboxDemo';
import SocialLineIcons from './SocialLineIcons';
import ToggleDemo from './demos/ToggleDemo';
import PlayPauseDemo from './demos/PlayPauseDemo';
import HamburgerDemo from './demos/HamburgerDemo';
import TabSwitchDemo from './demos/TabSwitchDemo';
import LoadingLinesDemo from './demos/LoadingLinesDemo';

export default [
  HamburgerDemo,
  ToggleDemo,
  PlayPauseDemo,
  FormInputSuccessDemo,
  // SocialLineIcons,
  NotificationBellDemo,
  CheckboxDemo,
  StarburstDemo,
  // TabSwitchDemo,
  LoadingLinesDemo
];


// TODO: Delete all below once reactified.
// export default [
//   {
//     title: 'Notification bell',
//     getHtmlCode: () => (
//       <div className="rx-notification">
//         <img className="rx-notification__img" src={notificationBell} />
//         <div className="rx-notification__badge" />
//       </div>
//     ),
//     animate: () => {
//       const notification = document.getElementsByClassName('rx-notification')[0];
//       animate(
//         notification.getElementsByClassName('rx-notification__img')[0],
//         'rx-notification__img--animate'
//       );
//       animate(
//         notification.getElementsByClassName('rx-notification__badge')[0],
//         'rx-notification__badge--animate',
//         1000
//       );
//     }
//   },
//   {
//     title: 'Button',
//     getHtmlCode: () => <button className="rx-button">button</button>
//   },
//   {
//     title: 'Form Error',
//     getHtmlCode: () => (
//       <div className="preview">
//         <div className="rx-input-label">Email</div>
//         <input className="rx-input rx-input-error" type="text" onBlur="animateInputError(this)" />
//       </div>
//     ),
//     animate: () => {
//       const inputField = document.getElementsByClassName('rx-input-error')[0];
//       animate(inputField, 'rx-input--error');
//     }
//   },
//   {
//     title: 'Form Success',
//     getHtmlCode: () => (
//       <div className="preview">
//         <div className="rx-input-label">First name</div>
//         <div className="rx-input-success">
//           <input
//             className="rx-input rx-input-success__input"
//             type="text"
//             onBlur="animateInputSuccess(this)"
//           />
//           <div className="rx-input-success__img-wrapper">
//             <img className="rx-input-success__img" src={checkCircle} />
//           </div>
//         </div>
//       </div>
//     ),
//     animate: () => {
//       const inputField = document.getElementsByClassName('rx-input-success__input')[0];
//       animate(inputField, 'rx-input--success', 1000);
//       const checkImg = inputField.parentElement.getElementsByClassName('rx-input-success__img')[0];
//       animate(checkImg, 'rx-input-success__img--animate', 1000);
//     }
//   },
//   {
//     title: 'Page loading progress',
//     getHtmlCode: () => (
//       <div className="rx-progress-bar">
//         <div className="rx-progress-bar__progress-bar" />
//       </div>
//     ),
//     animate: () => {
//       const element = document.getElementsByClassName('rx-progress-bar__progress-bar')[0];
//       animate(element, 'rx-progress-bar__progress-bar--animate', 2000);
//     }
//   },
//   {
//     title: 'Search Loading',
//     getHtmlCode: () => (
//       <div className="preview">
//         <div className="rx-loading-search-input">
//           <input placeholder="Search" className="rx-loading-search-input--input" />
//           <div className="rx-loading-search-input--line" />
//           <div className="rx-loading-search-input--loading-line" />
//         </div>
//       </div>
//     )
//   },
//   {
//     title: 'Checkbox',
//     getHtmlCode: () => (
//       <div className="preview">
//         <input className="rx-checkbox" id="rx-checkbox" type="checkbox" />
//         <label for="rx-checkbox">
//           <svg
//             className="rx-checkbox-svg"
//             version="1.1"
//             id="check"
//             xmlns="http://www.w3.org/2000/svg"
//             x="0px"
//             y="0px"
//             viewBox="0 0 16 16"
//           >
//             <polyline id="check-line" className="st0" points="2.1,7.6 6.2,11.5 13.9,3.7 " />
//           </svg>
//         </label>
//       </div>
//     )
//   }
//   // {
//   //   title: 'Tab Switch',
//   //   getHtmlCode: () => (
//
//   //   )
//   // }
// ];

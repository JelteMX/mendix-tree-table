// import { createElement } from "react";
// import { shallow } from "enzyme";

// import { Alerts } from "../Alert";

// describe("Alert", () => {
//     it("renders the structure when an alert message is specified", () => {
//         const message = "This is an error";
//         const alert = shallow(<Alerts bootstrapStyle="danger" className="widget-badge-alert" message={message} />);

//         expect(alert.equals(<div className="alert alert-danger widget-badge-alert">{message}</div>)).toEqual(true);
//     });

//     it("renders a list", () => {
//         const message = ["1", "2"];
//         const alert = shallow(<Alert bootstrapStyle="danger" className="widget-badge-alert" message={message} />);

//         expect(
//             alert.equals(
//                 <div className="alert alert-danger widget-badge-alert">
//                     <ul>
//                         <li>1</li>
//                         <li>2</li>
//                     </ul>
//                 </div>
//             )
//         ).toEqual(true);
//     });

//     it("renders no structure when the alert message is not specified", () => {
//         const alert = shallow(<Alert bootstrapStyle="danger" />);

//         expect(alert.isEmptyRender()).toEqual(true);
//     });
// });

// import './Sidebar.css';
// import React, { Component } from 'react';

// class Sidebar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() {
//     return (

//     <div className="wrapper d-flex align-items-stretch">
//     <nav id="sidebar">
//       <div className="custom-menu">
//         <button type="button" id="sidebarCollapse" className="btn btn-primary">
//           <i className="fa fa-bars"></i>
//           <span className="sr-only">Toggle Menu</span>
//         </button>
//       </div>
//       <div className="p-4">
//         <h1><a href="index.html" className="logo">Donyaro </a></h1>
//         <ul className="list-unstyled components mb-5">
//           <li className="active">
//             <a  href={" "}><i className="fas fa-home mr-3"></i> Dashboard</a>
//           </li>
//           <li>
//             <a href={" "}><i className="fas fa-user mr-3"></i> Customer</a>
//           </li>
//           <li>
//             <a href={" "}><i className="fas fa-th-large mr-3"></i> Category</a>
//           </li>
//           <li>
//             <a href={" "}><i className="fas fa-shopping-bag mr-3"></i> Transaction</a>
//           </li>
//           <li>
//             <a href={" "}><i className="fas fa-map-marker-alt mr-3"></i> Pick-up</a>
//           </li>
//           <li>
//             <a href={" "}><i className="fas fa-chart-line mr-3"></i> Stock</a>
//           </li>
//           <li>
//             <a href={" "}><i className="fas fa-wallet mr-3"></i> Financial</a>
//           </li>
//           <li>
//             <a href={" "}><i class="fas fa-file-alt mr-3"></i> Report</a>
//           </li>
//         </ul>
//       </div>
//       <div class="footer">
//         <a href={" "}> <i className="fas fa-caret-down"></i></a>
//         <h6><span>Welcome, </span><a href="index.html" className="add-business">Add Bussines</a>
//         </h6>
//       </div>
//     </nav>
//   </div>
//   );
//   }
// }

// export default Sidebar;

import "./Sidebar.css";
import React, { Component } from "react";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    // Change your menu array from array of strings to array of objects so that you can provide a different icon for each menu
    this.state = {
      menuItems: [
        { name: "Dashboard", icon: "fas fa-home", href: "" },
        { name: "Customer", icon: "fas fa-user", href: "" },
        { name: "Category", icon: "fas fa-th-large", href: "" },
        { name: "Transaction", icon: "fas fa-shopping-bag", href: "" },
        { name: "Pick-up", icon: "fas fa-map-marker-alt", href: "" },
        { name: "Stock", icon: "fas fa-chart-line ", href: "" },
        { name: "Financial", icon: "fas fa-wallet", href: "" },
        { name: "Report", icon: "fas fa-file-alt", href: "" },
      ],
    };
  }

  render() {
    return (
      <div className="wrapper d-flex align-items-stretch">
        <nav id="sidebar">
          <div className="custom-menu">
            <button
              type="button"
              id="sidebarCollapse"
              className="btn btn-primary"
            >
              <i className="fa fa-bars"></i>
              <span className="sr-only">Toggle Menu</span>
            </button>
          </div>
          <div className="p-4">
            <h1>
              <a href={" "} className="logo">
                Brand
              </a>
            </h1>
            <ul className="list-unstyled components mb-5">
              {this.state.menuItems && this.state.menuItems.lenght
                ? this.state.menuItems
                : []}

              {this.state.menuItems.map((item) => (
                <li className={item.name === "Dashboard" ? "active" : ""}>
                  <a href={item.href}>
                    <i className={`${item.icon} mr-3`}></i>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div class="footer">
            <a href={" "}>
              <i className="fas fa-caret-down"></i>
            </a>
            <h6>
              <span>Welcome, </span>
              <a href="index.html" className="add-business">
                Add Bussines
              </a>
            </h6>
          </div>
        </nav>
      </div>
    );
  }
}

export default Sidebar;

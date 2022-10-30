import React from "react";
import "./widgetLg.css";
import pic from "../Images/profile.jpg";

function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status </th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={pic} alt="pic" className="widgetLgImg" />
            <span className="widgetLgName">Ahsan Antal</span>
          </td>
          <td className="widgetLgDate">25 oct 2022</td>
          <td className="widgetLgAmount">$130</td>
          <div className="widgetLgStatus">
            {" "}
            <Button type="Approved" />
          </div>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={pic} alt="pic" className="widgetLgImg" />
            <span className="widgetLgName">Ahsan Antal</span>
          </td>
          <td className="widgetLgDate">25 oct 2022</td>
          <td className="widgetLgAmount">$130</td>
          <div className="widgetLgStatus">
            {" "}
            <Button type="Pending" />
          </div>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={pic} alt="pic" className="widgetLgImg" />
            <span className="widgetLgName">Ahsan Antal</span>
          </td>
          <td className="widgetLgDate">25 oct 2022</td>
          <td className="widgetLgAmount">$130</td>
          <div className="widgetLgStatus">
            {" "}
            <Button type="Declined" />
          </div>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg;

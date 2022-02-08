import React from "react";
import { arrayOf, shape } from "prop-types";
import "./style.css";

const Profile = ({ clientData }) => {
  return (
    <>
      {clientData.map((client, index) => {
        return (
          <div id="container">
            <div className="product-details">
              <h1>
                {client.first_name}
                {client.last_name}
              </h1>
              <span className="hint-star star">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </span>

              <p className="information">
                {`Hi.. I'm ${client?.first_name} and i live at ${client?.last_name}-villa. If you want to contact me. You can Email me on - ${client?.email}`}
              </p>

              <div className="control">
                <button className="btn">
                  <span className="price">ID</span>
                  <span className="shopping-cart">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </span>
                  <span className="buy">{client?.id}</span>
                </button>
              </div>
            </div>

            <div className="product-image">
              <img
                src={client?.avatar}
                alt={(client?.first_name, "+", client?.id)}
              />

              <div className="info">
                <h2> details</h2>
                <ul>
                  <li>
                    <strong>First Name : </strong>
                    {client?.first_name}
                  </li>
                  <li>
                    <strong>Last Name : </strong>
                    {client?.last_name}
                  </li>
                  <li>
                    <strong>Email: </strong>
                    {client?.email}
                  </li>
                  <li>
                    <strong>My ID: </strong>
                    {client?.id}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
Profile.propTypes = {
  clientData: arrayOf(shape({})),
};

Profile.defaultProps = {
  clientData: [],
};

export default Profile;

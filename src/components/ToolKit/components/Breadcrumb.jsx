import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Breadcrumb extends Component {
  render() {
    return (
      <div className="breadcrumbContent">
        <ul>
          {this.props.items.map((item, i) => (
            <li key={i} className={item.active ? 'active' : ''}>
              <Link to={item.url}>
                {item.title}
                <span
                  className={this.props.items.length - 1 === i ? 'last' : ''}>
                  <svg
                    width="4"
                    height="8"
                    viewBox="0 0 4 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.169565 1.85171C-0.0512704 1.61694 -0.056243 1.24728 0.153727 1.00606C0.26747 0.875574 0.430136 0.8 0.602396 0.8C0.765832 0.8 0.921373 0.867833 1.03476 0.988117L3.83011 3.96818C3.94301 4.08823 4 4.24532 4 4.40015C4 4.555 3.94333 4.7117 3.83042 4.83173L1.03532 7.81152C0.791162 8.07063 0.385581 8.06041 0.15383 7.79429C-0.0562671 7.55305 -0.0512908 7.18329 0.169593 6.94849L2.55916 4.40014L0.169565 1.85171Z"
                      fill="#D4D5E8"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Breadcrumb;

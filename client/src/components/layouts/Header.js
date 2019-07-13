import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "../utils/Payments";

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return "still logging";
			case false:
				return (
					<li>
						<div><a href="/auth/google">Login With Google</a></div>
					</li>
				);
			default:
				return [
					<li key={ 'header__payments' }>
						<Payments />
					</li>,

					<li key={ 'header__credits' } style={{ margin: '0 10px' }}>
						Credits: { this.props.auth.credits }
					</li>,

					<li key={ 'header__logout' }>
						<div><a href="/api/logout">Logout</a></div>
					</li>
				];
		}
	}

	render() {
		return (
			<nav>
				<div className="row">
					<div className="col s12">
						<div className="nav-wrapper">
							<Link to={ this.props.auth ? '/surveys' : '' } 
								className="left brand-logo">
								Emaily
							</Link>
							<ul className="right">{this.renderContent()}</ul>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);

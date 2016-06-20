import React from 'react';
import { render } from 'react-dom';
import routes from './config/routes';

//https://api.github.com/users/viacheslav-karnaukh
const USER_DATA = {
	img: 'https://avatars.githubusercontent.com/u/7796067',
	name: 'Viacheslav Karnaukh',
	username: 'viacheslav-karnaukh'
};

class ProfilePic extends React.Component {
	render() {
		return (
			<img src={this.props.imgUrl} style={{height: 150, width: 150}} />
		);
	}
}

class Link extends React.Component {
	changeUrl() {
		window.location.replace(this.props.href);
	}
	render() {
		return (
			<span
				style={{color: 'blue', cursor: 'pointer'}}
				onClick={this.changeUrl.bind(this)}>
				{this.props.children}
			</span>
		);
	}
}

class ProfileLink extends React.Component {
	render() {
		return (
			<Link href={'https://github.com/' + this.props.username}>
				{this.props.username}
			</Link>
		);
	}
}

class ProfileName extends React.Component {
	render() {
		return (
			<div>{this.props.name}</div>
		);
	}
}

class Avatar extends React.Component {
	render() {
		return (
			<div>
				<ProfilePic imgUrl={this.props.user.img} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink username={this.props.user.username} />
				{routes}
			</div>
		);
	}
}

render(<Avatar user={USER_DATA} />, document.getElementById('app'));
var React = require('react');
var ReactDOM = require('react-dom');

//https://api.github.com/users/viacheslav-karnaukh
var USER_DATA = {
	img: 'https://avatars.githubusercontent.com/u/7796067',
	name: 'Viacheslav Karnaukh',
	username: 'viacheslav-karnaukh'
};

var ProfilePic = React.createClass({
	render: function() {
		return (
			<img src={this.props.imgUrl} style={{height: 150, width: 150}} />
		);
	}
});

var ProfileLink = React.createClass({
	render: function() {
		return (
			<a href={'https://github.com/' + this.props.username}>
				{this.props.username}
			</a>
		);
	}
});

var ProfileName = React.createClass({
	render: function() {
		return (
			<div>{this.props.name}</div>
		);
	}
});

var Avatar = React.createClass({
	render: function() {
		return (
			<div>
				<ProfilePic imgUrl={this.props.user.img} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink username={this.props.user.username} />
			</div>
		);
	}
});

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));
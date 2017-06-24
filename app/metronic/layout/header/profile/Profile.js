import React from 'react';

import ProfileItem from './ProfileItem';

const createProfileItems = items => 
	items.map(item => 
		<ProfileItem
			key={item.id}
			icon={item.icon}
			title={item.title}
			badge={item.badge}
			badgeColor={item.badgeColor}
			url={item.url}
			onClick={item.onClick}
		/>
	);

const Profile = ({pic, name, items}) => (
	<li className="dropdown dropdown-user">
		<a className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
			<img alt="pic"className="img-circle" src={pic} />
			<span className="username username-hide-on-mobile"> {name} </span>
			<i className="fa fa-angle-down" />
		</a>
		<ul className="dropdown-menu dropdown-menu-default">
			{createProfileItems(items)}
		</ul>
	</li>
);

export default Profile;
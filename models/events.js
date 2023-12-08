module.exports = (sequelize, DataTypes) => {
	const events = sequelize.define('events', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		title: DataTypes.STRING,
		organizer: DataTypes.STRING,
		type: DataTypes.STRING,
		category: DataTypes.STRING,
		location_type: DataTypes.STRING,
		address: DataTypes.STRING,
		city: DataTypes.STRING,
		zip: DataTypes.INTEGER,
		occurrence_type: DataTypes.STRING,
		start_date: DataTypes.DATE,
		end_date: DataTypes.DATE,
		display_start_date: DataTypes.BOOLEAN,
		display_end_date: DataTypes.BOOLEAN,
	}, {
		timestamps: false,
	});
	
	events.associate = function(models){
		// events.hasMany(models.policies, {
		// 	foreignKey: 'agency_id',
		// 	targetKey: 'agency_id'
		// });
		// events.hasMany(models.users, {
		// 	foreignKey: 'agency',
		// 	as: 'user_agency',
		// 	targetKey: 'agency_id'
		// });
	}
	
	return events
}
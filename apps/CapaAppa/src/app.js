Capacitor.Plugins.LocalNotifications.createChannel({
	id: 'test',
	name: 'zen',
	description: 'first channel',
	importance: 5,
	visibility: 1,
	lights:	false,
	lightColor: "#ffffff",
	vibration:	false
})
.then(Capacitor.Plugins.LocalNotifications.schedule({
	notifications: [
		{
			title: "before 1 minute",
			body: "at",
			id: 1, //set different ids for different notification types, so far only one type available
			schedule: { at: new Date(Date.now()+1*60*1000) },
			sound: null,
			attachments: [{ id: "ic_local_notif_icon", url: "res://drawable/ic_local_notif_icon.png" }],
			actionTypeId: "",
			extra: null,
			smallIcon: "ic_local_notif_icon",
			channelId: "test"
		},
		{
			title: "every minute",
			body: "on every sec 40",
			id: 2, //set different ids for different notification types, so far only one type available
			schedule: {
				repeats: true,
				every: 'minute',
				on: {
					second: 40
				}
			},
			sound: null,
			attachments: [{ id: "ic_local_notif_icon", url: "res://drawable/ic_local_notif_icon.png" }],
			actionTypeId: "",
			extra: null,
			smallIcon: "ic_local_notif_icon",
			channelId: "test"
		},
		{
			title: "every 40 second",
			body: "on sec 40",
			id: 3, //set different ids for different notification types, so far only one type available
			schedule: {
				repeats: true,
				on: {
					second: 40
				}
			},
			sound: null,
			attachments: [{ id: "ic_local_notif_icon", url: "res://drawable/ic_local_notif_icon.png" }],
			actionTypeId: "",
			extra: null,
			smallIcon: "ic_local_notif_icon",
			channelId: "test"
		}
	]

}))
.catch(error => alert('error', error));

alert(Capacitor.Plugins.LocalNotifications.listChannels());

/*Capacitor.Plugins.LocalNotifications.schedule({
	notifications: [
		{
			title: "Title NOTE",
			body: "Title BODY",
			id: 1, //set different ids for different notification types, so far only one type available
			schedule: { at: new Date(Date.now()) },
			sound: null,
			attachments: [{ id: "ic_local_notif_icon", url: "res://drawable/ic_local_notif_icon.png" }],
			actionTypeId: "",
			extra: null,
			smallIcon: "ic_local_notif_icon",
			channelId: "test"
		}
	]

});*/
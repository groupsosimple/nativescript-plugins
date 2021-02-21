[![npm](https://img.shields.io/npm/v/@groupsosimple/nativescript-pubnub.svg)](https://www.npmjs.com/package/@groupsosimple/nativescript-pubnub)
[![npm](https://img.shields.io/npm/dt/@groupsosimple/nativescript-pubnub.svg?label=npm%20downloads)](https://www.npmjs.com/package/@groupsosimple/nativescript-pubnub)

# @groupsosimple/nativescript-pubnub

This is a NativeScript plugin wraper for the PubNub SDK. It has implementations for both [Android](https://github.com/pubnub/java) and [iOS](https://github.com/pubnub/objective-c) SDKs. An Angular service is also provided.

```javascript
ns plugin add @groupsosimple/nativescript-pubnub
```

## Get keys

You will need the publish and subscribe keys to authenticate your app. Get your keys from the [PubNub Admin Portal](https://dashboard.pubnub.com/login).

## Import PubNub

Using TypeScript

```typescript
import { PubNub } from '@groupsosimple/nativescript-pubnub';
```

Using JavaScript

```javascript
var pubnub = require('@groupsosimple/nativescript-pubnub');
```

## Configure PubNub

Configure your keys:

```javascript
pubnub = new PubNub({
	publishKey: 'myPublishKey',
	subscribeKey: 'mySubscribeKey',
	uuid: 'myUniqueUUID',
});
//or
pubnub = new PubNub().configuration({
	publishKey: 'myPublishKey',
	subscribeKey: 'mySubscribeKey',
	uuid: 'myUniqueUUID',
});
```

## Add event listeners

```javascript
pubnub.addListener({
	message: function (m) {
		// handle messages
	},
	presence: function (p) {
		// handle presence
	},
	signal: function (s) {
		// handle signals
	},
	messageAction: function (ma) {
		// handle message actions
	},
	file: function (event) {
		// handle files
	},
	status: function (s) {
		// handle status
	},
});
```

## Publish/subscribe

```javascript
var publishPayload = {
	title: 'greeting',
	description: 'This is my first message!',
};

pubnub.publish('MyChannel', publishPayload, (status) => {
	console.log(status);
});

pubnub.subscribe(['MyChannel'], true);
```

## Using the Angular Service

Declare the PubNub Angular Service in your root module

```typescript
import { PubNubService } from '@groupsosimple/nativescript-pubnub/angular';

@NgModule({
	imports: [...],
	declarations: [...],
	schemas: [...],
	providers: [PubNubService],
})
```

Inject the service in a component and configure the with your keys

```typescript
@Component()
export class MainComponent {
	constructor(private pubnubService: PubNubService) {
		pubnubService.configuration({
			publishKey: 'myPublishKey',
			subscribeKey: 'mySubscribeKey',
			uuid: 'myUniqueUUID',
		});
	}
}
```

After that, you can use the service normally

```typescript
@Component()
export class SomeComponent {
	constructor(private pubnubService: PubNubService) {
		pubnubService.subscribe(['MyChannel'], true);
	}
}
```

## PubNub Api

```typescript
constructor(config?: PNConfiguration);
configuration(config: PNConfiguration): PubNub;
subscribe(channels: string[], withPresence: boolean): void;
subscribeToChannelGroups(groups: string[], withPresence: boolean): void;
unsubscribe(channels: string[]): void;
unsubscribeFromAll(): void;
unsubscribeFromChannelGroups(groups: string[]): void;
publish(channel: string, message: Object, responseListener: (status: PNStatus) => void): void;
addEventListener(event: PNEventListener): void;
destroy(): void;
```

## More Information

More information can be seen in the original SDK implementation

- [Android](https://github.com/pubnub/java)
- [iOS](https://github.com/pubnub/objective-c)

## Changelog

- 1.0.0 Initial release
- 1.0.1 Angular service and bug fixes

## License

Apache License Version 2.0

## Authors

- [Fillps](https://github.com/fillps)

## Appreciation

- Thanks for [rickybrown](https://github.com/rickybrown), the developer of [ns-pubnub](https://github.com/rickybrown/ns-pubnub), where some of the iOS implementation was based on.

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
var firebaseConfig = {
	apiKey: 'AIzaSyA2IYwnbTuNbxTMNoXr3NohKrFRgwtKxNU',
	authDomain: 'gestaorisco-6ecaf.firebaseapp.com',
	projectId: 'gestaorisco-6ecaf',
	storageBucket: 'gestaorisco-6ecaf.appspot.com',
	messagingSenderId: '1088270600823',
	appId: '1:1088270600823:web:f2750ec59e625944c29472',
	measurementId: 'G-W83GXQMJ6Q',
	databaseURL: 'https://gestaorisco-6ecaf-default-rtdb.firebaseio.com',
};
firebase.initializeApp(firebaseConfig);

export default firebase;
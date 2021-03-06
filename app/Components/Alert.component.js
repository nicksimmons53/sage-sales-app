// Library Imports
import { Alert, AsyncStorage } from 'react-native';

// Alert to be shown for requesting access.
// Triggered on Login Page.
export const requestAccess = ( ) => {
  Alert.alert(
    'Request Access',
    'Please request access from the system administrator.',
    [
      {text: 'Cancel', style: 'cancel'},
    ]
  )
};

export const loginError = ( ) => {
  Alert.alert(
    'Whoops',
    'Something doesn\'t quite look right',
    [
      {text: 'OK', style: 'cancel'}
    ],
  )
};

// Alert to be shown when client is being saved.
// Triggered on Create Client Page.
export const saveClient = (navigation) => {
  Alert.alert(
    'Client Saved',
    '',
    [
      {
        text: 'Home',
        onPress: ( ) => {navigation.navigate('Profile')}
      }, {
        text: 'Cancel',
        style: 'cancel',
      },
    ]
  )
};

// Alert to be shown when cancelling a client creation.
// Triggered on Create Client Page.
export const cancelClient = (navigation) => {
  Alert.alert(
    'Are you sure?',
    'Any unsaved progress will be lost.',
    [
      {
        text: 'Exit',
        onPress: ( ) => {navigation.navigate('Profile')}
      }, {
        text: 'Cancel',
        style: 'cancel',
      }
    ]
  )
};


// Alert to be shown when signing out
// Triggered from Toolbar Component
export const signoutAlert = (navigation) => {
  Alert.alert(
    'Sign Out',
    '',
    [
      {
        text: 'Sign Out',
        onPress: ( ) => {
          AsyncStorage.clear( );
          navigation.navigate('Auth')
        }
      }, {
        text: 'Cancel',
        style: 'cancel',
      }
    ]
  )
}

export const deleteFile = (deleteFile) => {
  Alert.alert(
    'Delete File',
    'This file will be deleted permanently. Are you sure?',
    [
      {
        text: 'Delete',
        onPress: ( ) => {
          deleteFile( );
        }
      }, {
        text: 'Cancel',
        style: 'cancel'
      }
    ]
  )
}

// Alert to be shown when inactivating a client.
// Triggered on Client Profile Page.
export const deleteContact = (contactID, deleteContact) => {
  Alert.alert(
    'Delete Contact',
    'This contact will be deleted permanently.',
    [
      {
        text: 'Inactivate',
        onPress: ( ) => { deleteContact(contactID); }
        
      }, {
        text: 'Cancel',
        style: 'cancel',
      }
    ]
  )
};

// Alert to be shown if device is not connected to network
// Triggered on Login Screen and Profile Screen
export const networkALert = ( ) => {
  Alert.alert(
    'Network Connection',
    'This device isn\'t connected to the network. Any work will be saved when reconnected',
    [
      {
        text: 'Okay',
        style: 'cancel'
      }
    ]
  )
};

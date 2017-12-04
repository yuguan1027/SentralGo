import React , {Component} from 'react';
import {View , Text, StyleSheet} from 'react-native';


export default class Splash extends React.Component{
	
	componentDidMount(){
         // Start counting when the page is loaded
         this.timeoutHandle = setTimeout(()=>{
              // Add your logic for the transition
			  alert('1000');
         }, 1000);
    }

    componentWillUnmount(){
         clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    }
	
	render(){
		return (
			<View style={styles.container}>
				<Text>Hello WOrdddDDld</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

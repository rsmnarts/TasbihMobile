/**
 * Aplikasi Tasbih Sederhana
 * Created By @rsmnarts
 */

import React, { Component } from 'react'
import { Container, Header, Body, Title, Content, Text, Footer, FooterTab, Button, Card, CardItem } from 'native-base'
import { View, Button as Btn,	StyleSheet,	TouchableOpacity} from 'react-native'

export default class App extends Component {
	state = {
		number: 0
	}

	handleTekan(){
		if (this.state.number == 33) {
			this.setState({
				number: 0
			})
			alert('Anda sudah membaca dzikir 33 kali hari ini..')
		} else {
			this.setState({
				number: this.state.number + 1
			})
		}
	}

  render() {
    return(
      <Container>
        <Header>
	        <Body>
	            <Title style={styles.title}>Tasbih Mobile</Title>
	        </Body>
        </Header>        
        <Content padder>
          <View>
						<Card>
						  <CardItem header>
						    <Text>Dibaca 33 Kali</Text>
						  </CardItem>
						  <CardItem>
						    <Body>
						    <Text style={{ fontSize: 50, textAlign: 'center' }}>اَللهُ أَكْبَرُ (33 ×)</Text>
						    </Body>
						  </CardItem>
						  <CardItem footer>
						    <Text>Created by @rsmnarts</Text>
						  </CardItem>
						</Card>
          	<Text style={styles.jumlahTasbih}>{this.state.number}</Text>
          </View>
        </Content>
         <Footer>
          <FooterTab>
            <Button full onPress={()=>this.handleTekan()} style={styles.btnTekan}>
              <Text>Tekan</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
	title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 100
	},
	jumlahTasbih: {
		fontSize: 250,
		textAlign: 'center',
		marginTop: 20,
	}
})
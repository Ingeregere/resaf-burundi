import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'
import icone from '../../assets/images/logofooter.png'

export default function WhatsappChat() { 
 
	return (
		<FloatingWhatsApp
			phoneNumber={'++25761949393'} 
			accountName={'resaf-burundi'}
			avatar={icone}
			statusMessage={'resaf-burundi en ligne'}
			chatMessage={'Bonjour, vous avez quelque chose à me parler!'}
			notification={true}
			notificationSound={true}
		/>
	)
}
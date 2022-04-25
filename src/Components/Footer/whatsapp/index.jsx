import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'

export default function WhatsappChat() { 
 
	return (
		<FloatingWhatsApp
			phoneNumber={'+25779343813'} 
			icon
			accountName={'resaf-burundi'}
			avatar={'iconwhatsapp.png'}
			statusMessage={'resaf-burundi en ligne'}
			chatMessage={'Bonjour, vous avez quelque chose à me parler!'}
			notification={true}
			notificationSound={true}
		/>
	)
}
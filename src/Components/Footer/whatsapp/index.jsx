import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'

export default function WhatsappChat() { 
 
	return (
		<FloatingWhatsApp
			phoneNumber={'+25779343813'} 
			accountName={'EB-COMPANY'}
			avatar={'iconwhatsapp.png'}
			statusMessage={'EB-COMPANY en ligne'}
			chatMessage={'Bonjour, voulez-vous une de nos applications? contactez-nous,  merci!'}
			notification={true}
			notificationSound={true}
		/>
	)
}
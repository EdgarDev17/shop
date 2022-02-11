// This file is used for inicialize a new eccommerce object
// This is for connect with the headless cms

import CommerceSDK from '@chec/commerce.js'

const client = new CommerceSDK(process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY)

export default client